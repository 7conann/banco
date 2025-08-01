import { supabase } from "./supabase"

export const rewardsService = {
  async getCashbackServices() {
    const { data, error } = await supabase
      .from("cashback_services")
      .select("*")
      .eq("is_active", true)
      .order("service_name")

    return { data, error }
  },

  async getUserRewards(userId: string) {
    const { data, error } = await supabase
      .from("rewards")
      .select(`
        *,
        cashback_services (
          service_name,
          icon_name
        )
      `)
      .eq("user_id", userId)
      .order("created_at", { ascending: false })

    return { data, error }
  },

  async createReward(reward: {
    user_id: string
    service_type: string
    original_amount: number
    transaction_id?: string
  }) {
    // Buscar configuração do serviço
    const { data: service } = await supabase
      .from("cashback_services")
      .select("cashback_percentage")
      .eq("service_type", reward.service_type)
      .single()

    if (!service) throw new Error("Serviço não encontrado")

    const cashback_amount = (reward.original_amount * service.cashback_percentage) / 100

    const { data, error } = await supabase
      .from("rewards")
      .insert({
        user_id: reward.user_id,
        service_type: reward.service_type,
        original_amount: reward.original_amount,
        cashback_amount,
        cashback_percentage: service.cashback_percentage,
        transaction_id: reward.transaction_id,
      })
      .select()
      .single()

    return { data, error }
  },

  async getTotalCashback(userId: string) {
    const { data, error } = await supabase
      .from("rewards")
      .select("cashback_amount")
      .eq("user_id", userId)
      .eq("status", "credited")

    if (error) return { total: 0, error }

    const total = data?.reduce((sum, reward) => sum + reward.cashback_amount, 0) || 0
    return { total, error: null }
  },

  async getPendingCashback(userId: string) {
    const { data, error } = await supabase
      .from("rewards")
      .select("cashback_amount")
      .eq("user_id", userId)
      .eq("status", "pending")

    if (error) return { total: 0, error }

    const total = data?.reduce((sum, reward) => sum + reward.cashback_amount, 0) || 0
    return { total, error: null }
  },

  async simulateCashback(serviceType: string, amount: number) {
    const { data: service } = await supabase
      .from("cashback_services")
      .select("cashback_percentage")
      .eq("service_type", serviceType)
      .single()

    if (!service) return { cashback: 0, percentage: 0 }

    const cashback = (amount * service.cashback_percentage) / 100
    return { cashback, percentage: service.cashback_percentage }
  },
}
