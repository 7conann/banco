import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import React from "react" // Import React for React.use

// Mock data for blog posts
const blogPosts = [
  {
    slug: "como-economizar-dinheiro",
    title: "Como Economizar Dinheiro: Dicas Essenciais para o Seu Bolso",
    author: "Equipe Zi Credit",
    date: "15 de Julho de 2024",
    category: "Finanças Pessoais",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Economizar dinheiro é uma habilidade fundamental para alcançar a estabilidade financeira e realizar sonhos. Não importa qual seja sua renda, sempre há maneiras de otimizar seus gastos e construir uma reserva.</p>
      <h2>1. Crie um Orçamento Detalhado</h2>
      <p>O primeiro passo para economizar é saber para onde seu dinheiro está indo. Registre todas as suas receitas e despesas. Existem muitos aplicativos e planilhas que podem te ajudar nessa tarefa. Ao visualizar seus gastos, você identifica áreas onde pode cortar.</p>
      <h2>2. Defina Metas Claras</h2>
      <p>Economizar para quê? Uma viagem, a entrada de uma casa, a aposentadoria? Ter metas claras e realistas te mantém motivado. Divida grandes metas em pequenas etapas para torná-las mais alcançáveis.</p>
      <h2>3. Corte Gastos Desnecessários</h2>
      <p>Analise seu orçamento e identifique despesas que podem ser reduzidas ou eliminadas. Assinaturas que você não usa, comer fora com frequência, compras por impulso – pequenos cortes podem gerar grandes economias a longo prazo.</p>
      <h2>4. Automatize Suas Economias</h2>
      <p>Configure transferências automáticas para sua poupança ou investimento logo após receber seu salário. Assim, você garante que uma parte do seu dinheiro seja destinada à economia antes mesmo de começar a gastar.</p>
      <h2>5. Evite Dívidas de Alto Custo</h2>
      <p>Juros de cartão de crédito e cheque especial podem corroer suas economias. Priorize o pagamento dessas dívidas e evite contrair novas. Se precisar de crédito, procure opções com juros mais baixos.</p>
      <h2>6. Pesquise e Compare Preços</h2>
      <p>Antes de fazer uma compra grande, pesquise em diferentes lojas e compare preços. Use a internet a seu favor para encontrar as melhores ofertas e descontos.</p>
      <h2>7. Invista Seu Dinheiro</h2>
      <p>Não deixe seu dinheiro parado na poupança se você busca rendimentos maiores. Explore opções de investimento que se adequem ao seu perfil de risco e objetivos, como CDBs, Tesouro Direto ou fundos de investimento.</p>
      <p>Lembre-se, economizar é uma jornada contínua. Pequenas mudanças de hábito podem fazer uma grande diferença ao longo do tempo. Comece hoje e veja seu futuro financeiro se transformar!</p>
    `,
  },
  {
    slug: "seguranca-digital-no-banco",
    title: "Segurança Digital no Banco: Proteja Suas Finanças Online",
    author: "Equipe Zi Credit",
    date: "20 de Julho de 2024",
    category: "Segurança",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>A segurança digital é uma preocupação crescente no mundo financeiro. Com a digitalização dos serviços bancários, é essencial que você saiba como proteger suas informações e seu dinheiro online.</p>
      <h2>1. Senhas Fortes e Únicas</h2>
      <p>Use senhas complexas, com uma combinação de letras maiúsculas e minúsculas, números e símbolos. Nunca reutilize senhas em diferentes serviços, especialmente em contas bancárias.</p>
      <h2>2. Autenticação de Dois Fatores (2FA)</h2>
      <p>Ative a autenticação de dois fatores sempre que possível. Isso adiciona uma camada extra de segurança, exigindo um segundo método de verificação (como um código enviado para seu celular) além da senha.</p>
      <h2>3. Cuidado com Phishing e Golpes</h2>
      <p>Desconfie de e-mails, mensagens ou ligações que solicitam informações pessoais ou financeiras. Bancos nunca pedem senhas ou dados sensíveis por esses canais. Verifique sempre o remetente e a URL antes de clicar em qualquer link.</p>
      <h2>4. Mantenha Seus Dispositivos Seguros</h2>
      <p>Use antivírus e mantenha seu sistema operacional e aplicativos sempre atualizados. Evite acessar sua conta bancária em redes Wi-Fi públicas e não seguras.</p>
      <h2>5. Monitore Suas Transações</h2>
      <p>Verifique regularmente seu extrato bancário e as transações do seu cartão de crédito. Relate qualquer atividade suspeita ao seu banco imediatamente.</p>
      <h2>6. Cuidado ao Clicar em Links</h2>
      <p>Evite clicar em links suspeitos. Se precisar acessar seu banco, digite o endereço diretamente no navegador ou use o aplicativo oficial.</p>
      <h2>7. Use Conexões Seguras (HTTPS)</h2>
      <p>Sempre verifique se o site do seu banco utiliza HTTPS (indicado por um cadeado na barra de endereço). Isso garante que a comunicação entre seu navegador e o site é criptografada.</p>
      <p>Ao seguir essas dicas, você aumenta significativamente sua segurança digital e protege suas finanças contra fraudes e ataques cibernéticos. A Zi Credit está comprometida em oferecer um ambiente seguro, mas sua colaboração é fundamental!</p>
    `,
  },
  {
    slug: "beneficios-do-cartao-de-credito",
    title: "Desvendando os Benefícios do Cartão de Crédito Zi Credit",
    author: "Equipe Zi Credit",
    date: "25 de Julho de 2024",
    category: "Cartões",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>O cartão de crédito Zi Credit vai muito além de uma simples ferramenta de pagamento. Ele oferece uma série de benefícios que podem otimizar suas finanças e proporcionar mais conveniência e segurança no seu dia a dia.</p>
      <h2>1. Programa de Recompensas Exclusivo</h2>
      <p>Com o cartão Zi Credit, cada compra se transforma em pontos que podem ser trocados por produtos, serviços, passagens aéreas ou até mesmo cashback. Quanto mais você usa, mais você ganha!</p>
      <h2>2. Cashback em Compras Selecionadas</h2>
      <p>Receba uma porcentagem do seu dinheiro de volta em categorias específicas de gastos, como supermercados, postos de gasolina ou restaurantes. É dinheiro voltando para o seu bolso sem esforço.</p>
      <h2>3. Seguros e Proteções</h2>
      <p>Seu cartão Zi Credit pode oferecer seguros de viagem, proteção de compras, garantia estendida e outros benefícios que te dão mais tranquilidade em diversas situações.</p>
      <h2>4. Controle Financeiro na Palma da Mão</h2>
      <p>Através do nosso aplicativo, você acompanha seus gastos em tempo real, gerencia seu limite, paga faturas e organiza suas finanças de forma prática e intuitiva.</p>
      <h2>5. Flexibilidade de Pagamento</h2>
      <p>Com opções de parcelamento e a possibilidade de pagar o valor total ou mínimo da fatura, o cartão Zi Credit se adapta às suas necessidades financeiras, oferecendo flexibilidade para gerenciar seu fluxo de caixa.</p>
      <h2>6. Aceitação Internacional</h2>
      <p>Viaje e faça compras em qualquer lugar do mundo com a segurança e a conveniência do seu cartão Zi Credit, aceito em milhões de estabelecimentos.</p>
      <h2>7. Atendimento Personalizado</h2>
      <p>Conte com um suporte dedicado e personalizado para tirar suas dúvidas e resolver qualquer questão relacionada ao seu cartão, a qualquer hora.</p>
      <p>Descubra um mundo de possibilidades com o cartão de crédito Zi Credit e transforme sua experiência financeira!</p>
    `,
  },
]

interface BlogPostPageProps {
  params: { slug: string }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Use React.use to unwrap the params promise
  const unwrappedParams = React.use(Promise.resolve(params))
  const slug = unwrappedParams.slug

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="inline-flex items-center text-gray-600 hover:text-primary mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para o Blog
        </Link>
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          width={800}
          height={400}
          className="w-full h-auto rounded-lg object-cover mb-6"
        />
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        <div className="flex items-center text-gray-500 text-sm mb-6">
          <span>Por {post.author}</span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
          <span className="mx-2">•</span>
          <span className="font-medium text-primary">{post.category}</span>
        </div>
        <div
          className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </div>
  )
}
