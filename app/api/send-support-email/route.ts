import { type NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const isPersonaFisica = data.type === "pf"

    let emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #FFD700; padding-bottom: 10px;">
          Nova solicitação de suporte - ${isPersonaFisica ? "Pessoa Física" : "Pessoa Jurídica"}
        </h2>
        
        <h3 style="color: #555; margin-top: 30px;">📞 Informações de Contato:</h3>
        <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin: 10px 0;">
          <p><strong>Nome:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Telefone:</strong> ${data.phone}</p>
    `

    if (isPersonaFisica) {
      emailContent += `<p><strong>Cidade:</strong> ${data.city}</p>`
    } else {
      emailContent += `
          <p><strong>Nome da Empresa:</strong> ${data.companyName}</p>
          <p><strong>Função na Empresa:</strong> ${data.role}</p>
          <p><strong>Número de Funcionários:</strong> ${data.employees}</p>
          <p><strong>Faturamento Médio:</strong> ${data.avgBilling}</p>
      `
    }

    emailContent += `
        </div>
        
        <h3 style="color: #555; margin-top: 30px;">🎯 Produtos de Interesse:</h3>
        <div style="background: #f0f8ff; padding: 15px; border-radius: 5px; margin: 10px 0;">
          <ul style="margin: 0; padding-left: 20px;">
    `

    data.products.forEach((product: string) => {
      emailContent += `<li style="margin: 5px 0;">${product}</li>`
    })

    emailContent += `
          </ul>
        </div>
        
        <h3 style="color: #555; margin-top: 30px;">📝 Descrição da Operação:</h3>
        <div style="background: #fff8dc; padding: 15px; border-radius: 5px; margin: 10px 0;">
          <p style="margin: 0; line-height: 1.6;">${data.operation || "Não informado"}</p>
        </div>
        
        <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
        <p style="color: #888; font-size: 12px; text-align: center;">
          Email enviado automaticamente pelo sistema de suporte do Zi Credit<br>
          Data: ${new Date().toLocaleString("pt-BR")}
        </p>
      </div>
    `

    const emailResponse = await resend.emails.send({
      from: "Zi Credit Suporte <suporte@resend.dev>",
      to: "angelomarchi05@gmail.com",
      subject: `🔔 Nova solicitação de suporte - ${isPersonaFisica ? "Pessoa Física" : "Pessoa Jurídica"} - ${data.name}`,
      html: emailContent,
    })

    console.log("Email enviado com sucesso:", emailResponse)

    return NextResponse.json({
      success: true,
      message: "Email enviado com sucesso! Nossa equipe entrará em contato em breve.",
      emailId: emailResponse.data?.id,
    })
  } catch (error) {
    console.error("Erro ao enviar email:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao enviar email. Tente novamente ou entre em contato diretamente.",
      },
      { status: 500 },
    )
  }
}
