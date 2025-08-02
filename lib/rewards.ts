export interface CashbackService {
  id: string
  name: string
  category: string
  cashback_rate: number
  icon: string
  description: string
}

export interface UserReward {
  id: string
  user_id: string
  service_id: string
  amount: number
  cashback_earned: number
  created_at: string
  service: CashbackService
}

// Mock data for cashback services
const mockCashbackServices: CashbackService[] = [
  {
    id: "1",
    name: "Spotify",
    category: "Streaming",
    cashback_rate: 5,
    icon: "🎵",
    description: "Cashback em assinaturas de música",
  },
  {
    id: "2",
    name: "Netflix",
    category: "Streaming",
    cashback_rate: 3,
    icon: "🎬",
    description: "Cashback em streaming de vídeo",
  },
  {
    id: "3",
    name: "Uber",
    category: "Transporte",
    cashback_rate: 2,
    icon: "🚗",
    description: "Cashback em corridas",
  },
  {
    id: "4",
    name: "iFood",
    category: "Alimentação",
    cashback_rate: 4,
    icon: "🍕",
    description: "Cashback em delivery",
  },
]

// Mock user rewards
const mockUserRewards: UserReward[] = [
  {
    id: "1",
    user_id: "1",
    service_id: "1",
    amount: 29.9,
    cashback_earned: 1.5,
    created_at: "2024-01-15T10:30:00Z",
    service: mockCashbackServices[0],
  },
  {
    id: "2",
    user_id: "1",
    service_id: "2",
    amount: 45.9,
    cashback_earned: 1.38,
    created_at: "2024-01-14T15:20:00Z",
    service: mockCashbackServices[1],
  },
]

export const rewardsService = {
  async getCashbackServices(): Promise<CashbackService[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    return mockCashbackServices
  },

  async getUserRewards(userId: string): Promise<UserReward[]> {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 500))
    return mockUserRewards.filter((reward) => reward.user_id === userId)
  },

  async getTotalCashback(userId: string): Promise<number> {
    const rewards = await this.getUserRewards(userId)
    return rewards.reduce((total, reward) => total + reward.cashback_earned, 0)
  },
}
