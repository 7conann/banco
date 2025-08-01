import { notFound } from "next/navigation"
import Image from "next/image"
import { CalendarDays, Clock } from "lucide-react"
import { Separator } from "@/components/ui/separator"

// Mock data for blog posts
const blogPosts = [
  {
    slug: "como-economizar-dinheiro",
    title: "Como Economizar Dinheiro: Dicas Essenciais para o Seu Bolso",
    date: "2024-07-20",
    readTime: "5 min",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Economizar dinheiro é uma meta comum para muitas pessoas, mas nem sempre é fácil saber por onde começar. Com a inflação e os custos de vida em constante aumento, ter um plano financeiro sólido é mais importante do que nunca. Este artigo oferece dicas práticas e eficazes para ajudá-lo a economizar dinheiro e construir um futuro financeiro mais seguro.</p>
      <h2>1. Crie um Orçamento Detalhado</h2>
      <p>O primeiro passo para economizar é saber para onde seu dinheiro está indo. Crie um orçamento detalhado que liste todas as suas fontes de renda e todas as suas despesas. Categorize suas despesas em fixas (aluguel, contas) e variáveis (alimentação, lazer). Ferramentas como planilhas ou aplicativos de orçamento podem ser muito úteis.</p>
      <h2>2. Defina Metas de Economia Claras</h2>
      <p>Ter metas claras e realistas pode motivá-lo a economizar. Seja para comprar uma casa, fazer uma viagem, pagar dívidas ou construir uma reserva de emergência, defina o valor e o prazo para cada meta. Isso tornará o processo mais tangível e menos abstrato.</p>
      <h2>3. Reduza Despesas Desnecessárias</h2>
      <p>Analise seu orçamento e identifique áreas onde você pode cortar gastos. Isso pode incluir reduzir idas a restaurantes, cancelar assinaturas que não usa, ou encontrar alternativas mais baratas para seus hobbies. Pequenas economias diárias podem somar grandes quantias ao longo do tempo.</p>
      <h2>4. Automatize Suas Economias</h2>
      <p>Configure transferências automáticas do seu salário para uma conta poupança ou de investimento. Ao automatizar suas economias, você garante que uma parte do seu dinheiro seja destinada a suas metas antes mesmo que você tenha a chance de gastá-la.</p>
      <h2>5. Evite Dívidas de Consumo</h2>
      <p>Cartões de crédito e empréstimos pessoais podem ser armadilhas financeiras devido aos juros altos. Tente pagar suas faturas de cartão de crédito integralmente todos os meses e evite fazer novas dívidas desnecessárias. Se você já tem dívidas, priorize o pagamento das que têm juros mais altos.</p>
      <h2>6. Cozinhe Mais em Casa</h2>
      <p>Comer fora ou pedir delivery com frequência pode ser um grande ralo de dinheiro. Cozinhar em casa é geralmente mais barato e mais saudável. Planeje suas refeições, faça uma lista de compras e evite desperdício de alimentos.</p>
      <h2>7. Compare Preços e Negocie</h2>
      <p>Antes de fazer uma compra grande, pesquise e compare preços em diferentes lojas ou online. Não hesite em negociar preços, especialmente para serviços como internet, TV a cabo ou seguros. Muitas empresas estão dispostas a oferecer descontos para reter clientes.</p>
      <h2>8. Invista em Educação Financeira</h2>
      <p>Quanto mais você souber sobre finanças pessoais, melhores decisões você tomará. Leia livros, siga blogs e podcasts sobre o assunto, e participe de workshops. O conhecimento é uma ferramenta poderosa para melhorar sua saúde financeira.</p>
      <p>Economizar dinheiro é uma jornada contínua que exige disciplina e planejamento. Ao implementar essas dicas, você estará no caminho certo para alcançar seus objetivos financeiros e desfrutar de uma vida mais tranquila e segura.</p>
    `,
  },
  {
    slug: "o-futuro-dos-pagamentos-digitais",
    title: "O Futuro dos Pagamentos Digitais: Tendências e Inovações",
    date: "2024-07-15",
    readTime: "7 min",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Os pagamentos digitais estão revolucionando a forma como interagimos com o dinheiro. De carteiras móveis a criptomoedas, a inovação nesse setor é constante. Este artigo explora as principais tendências e inovações que moldarão o futuro dos pagamentos digitais.</p>
      <h2>1. Ascensão das Carteiras Digitais e Pagamentos por Aproximação</h2>
      <p>As carteiras digitais como Apple Pay, Google Pay e Samsung Pay, juntamente com a tecnologia NFC (Near Field Communication), estão se tornando o método de pagamento preferido para muitos. A conveniência e a segurança que oferecem impulsionam sua adoção em larga escala.</p>
      <h2>2. Blockchain e Criptomoedas</h2>
      <p>A tecnologia blockchain e as criptomoedas, como Bitcoin e Ethereum, prometem transformar os pagamentos transfronteiriços e a inclusão financeira. Embora ainda enfrentem desafios regulatórios e de volatilidade, seu potencial para pagamentos mais rápidos e baratos é inegável.</p>
      <h2>3. Pagamentos Invisíveis e Contextuais</h2>
      <p>Imagine pagar por um café sem sequer tirar o celular do bolso. Os pagamentos invisíveis, onde a transação ocorre automaticamente em segundo plano (como em carros autônomos ou lojas sem caixas), são uma tendência crescente. Pagamentos contextuais, que se integram à experiência do usuário, também estão ganhando força.</p>
      <h2>4. Inteligência Artificial e Machine Learning</h2>
      <p>IA e Machine Learning estão sendo usadas para aprimorar a segurança dos pagamentos, detectar fraudes em tempo real e personalizar a experiência do usuário. Algoritmos podem analisar padrões de gastos para oferecer recomendações financeiras ou alertas de segurança.</p>
      <h2>5. Open Banking e APIs de Pagamento</h2>
      <p>O Open Banking está permitindo que terceiros acessem dados financeiros (com consentimento do usuário) para criar novos serviços e produtos. Isso leva a uma maior concorrência e inovação, com APIs de pagamento facilitando a integração de serviços financeiros em diversas plataformas.</p>
      <h2>6. Biometria para Autenticação</h2>
      <p>Impressões digitais, reconhecimento facial e de voz estão se tornando métodos comuns de autenticação para pagamentos. A biometria oferece uma camada extra de segurança e conveniência, eliminando a necessidade de senhas complexas.</p>
      <h2>7. Pagamentos B2B Digitais</h2>
      <p>O setor de pagamentos B2B (Business-to-Business) também está passando por uma transformação digital. Soluções que automatizam faturas, reconciliações e pagamentos estão otimizando as operações financeiras entre empresas.</p>
      <p>O futuro dos pagamentos digitais é dinâmico e promissor. À medida que a tecnologia avança e as expectativas dos consumidores evoluem, veremos uma contínua inovação que tornará as transações financeiras mais rápidas, seguras e integradas ao nosso dia a dia.</p>
    `,
  },
  {
    slug: "seguranca-financeira-na-era-digital",
    title: "Segurança Financeira na Era Digital: Proteja Seu Dinheiro Online",
    date: "2024-07-10",
    readTime: "6 min",
    image: "/placeholder.svg?height=400&width=800",
    content: `
      <p>Com a crescente digitalização das finanças, a segurança online tornou-se uma preocupação primordial. Proteger seu dinheiro e seus dados pessoais de fraudes e ataques cibernéticos é essencial. Este artigo oferece um guia completo sobre como manter sua segurança financeira na era digital.</p>
      <h2>1. Use Senhas Fortes e Autenticação de Dois Fatores (2FA)</h2>
      <p>A base da segurança online começa com senhas robustas. Use combinações complexas de letras maiúsculas e minúsculas, números e símbolos. Além disso, ative a autenticação de dois fatores (2FA) sempre que possível. Isso adiciona uma camada extra de segurança, exigindo um segundo método de verificação (como um código enviado ao seu celular) além da senha.</p>
      <h2>2. Cuidado com Phishing e Golpes Online</h2>
      <p>Phishing é uma tática comum onde criminosos tentam obter suas informações pessoais (senhas, dados bancários) se passando por instituições legítimas. Desconfie de e-mails, mensagens ou links suspeitos. Verifique sempre o remetente e o URL antes de clicar ou fornecer qualquer informação.</p>
      <h2>3. Mantenha Seus Softwares Atualizados</h2>
      <p>Sistemas operacionais, navegadores e aplicativos devem ser sempre atualizados. As atualizações frequentemente incluem patches de segurança que corrigem vulnerabilidades que poderiam ser exploradas por cibercriminosos.</p>
      <h2>4. Monitore Suas Contas Regularmente</h2>
      <p>Verifique seus extratos bancários e de cartão de crédito regularmente para identificar qualquer atividade suspeita. Muitos bancos oferecem alertas por SMS ou e-mail para transações incomuns. Quanto mais rápido você identificar uma fraude, mais fácil será resolvê-la.</p>
      <h2>5. Use Redes Wi-Fi Seguras</h2>
      <p>Evite realizar transações financeiras ou acessar informações sensíveis em redes Wi-Fi públicas e desprotegidas. Essas redes são mais vulneráveis a ataques. Se precisar usá-las, considere usar uma Rede Privada Virtual (VPN) para criptografar sua conexão.</p>
      <h2>6. Faça Backup de Dados Importantes</h2>
      <p>Embora não seja diretamente uma medida de segurança contra fraudes, fazer backup de seus documentos e informações financeiras importantes pode protegê-lo em caso de perda de dados devido a ataques de ransomware ou falhas de hardware.</p>
      <h2>7. Cuidado com o Excesso de Informações Pessoais Online</h2>
      <p>Pense duas vezes antes de compartilhar informações pessoais em redes sociais ou sites não confiáveis. Criminosos podem usar esses dados para engenharia social ou roubo de identidade.</p>
      <h2>8. Conheça Seus Direitos e Recursos</h2>
      <p>Em caso de fraude, saiba quais são seus direitos como consumidor e os procedimentos para relatar o incidente ao seu banco e às autoridades. Agir rapidamente pode minimizar os danos.</p>
      <p>A segurança financeira na era digital exige vigilância constante e a adoção de boas práticas. Ao seguir essas dicas, você estará fortalecendo suas defesas e protegendo seu patrimônio no ambiente online.</p>
    `,
  },
]

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = await params // Unwrap the promise
  const { slug } = unwrappedParams // Access the slug

  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      <article className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-50 sm:text-4xl lg:text-5xl">{post.title}</h1>
          <div className="flex items-center space-x-4 text-gray-500 dark:text-gray-400 mt-4">
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime} de leitura</span>
            </div>
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden mb-8">
          <Image
            src={post.image || "/placeholder.svg"}
            alt={post.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
            priority
          />
        </div>
        <div
          className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Separator className="my-8" />
        <div className="text-center text-gray-500 dark:text-gray-400">
          <p>Obrigado por ler! Esperamos que este artigo tenha sido útil.</p>
        </div>
      </article>
    </div>
  )
}
