"use client";

import type React from "react";

import { useState, useMemo, memo, useCallback } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Search,
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Bookmark,
} from "lucide-react";
import Link from "next/link";

const articles = [
  {
    id: "futuro-bancos-digitais-brasil-2024",
    title: "O Futuro dos Bancos Digitais no Brasil: Tendências para 2024",
    excerpt:
      "Descubra as principais tendências que estão moldando o setor bancário digital brasileiro e como o Zi Credit está na vanguarda dessa transformação.",
    content: `Principais tendências moldando o setor bancário digital no Brasil em 2024

Inteligência Artificial e Automação Avançadas

54% dos bancos brasileiros já utilizam IA em operações, incluindo assistentes virtuais e recomendações personalizadas Inforchannel.

Investimentos em IA, IA generativa e Big Data devem crescer até 61%, com expectativa de alcançar R$ 47,8 bi em tecnologia em 2025 portal.febraban.org.br.

Chatbots, assistentes virtuais e automação também impulsionam a eficiência operacional SAP News Centergestaoeplanejamento.com.br.

Personalização e Experiência do Cliente

IA e análise de dados permitem recomendações financeiras altamente personalizadas, desde dicas financeiras até estilo de vida SAP News Centerempreendendo.org.

Open Finance e Open Banking

O Open Finance permite compartilhamento consciente de dados e acelera o surgimento de soluções de crédito mais acessíveis e competitivas ciandt.com.

Banco Central segue ampliando performance e inclusão de novas empresas ao sistema ciandt.com.

Pagamentos Instantâneos e Digitalização do Crédito

O Pix é líder absoluto em pagamentos digitais, atingindo 152 milhões de usuários e respondendo por quase metade das transações no e-commerce Wikipédia.

"Pix Parcelado" amplia uso do Pix para compras de maior valor celcoin.com.br.

Fintechs concederam R$ 21,1 bi em crédito, crescimento de 52%, com continuidade nos investimentos em IA PwCcelcoin.com.br.

Super Apps e Ecossistemas Financeiros

Bancos digitais se transformam em plataformas integradas que oferecem desde contas até seguros, investimentos e serviços não financeiros CredittCards.

Integração com marketplaces, redes sociais e delivery impulsiona conveniência e fidelização empreendendo.org.

Sustentabilidade e Responsabilidade Social

Instituições digitais estão cada vez mais aderindo a causas ambientais e sociais como diferencial competitivo CredittCards.

Novos Modelos de Crédito e Players Não Tradicionais

Empresas como Vivo Pay, com licença de Sociedade de Crédito Direto (SCD), seguem ampliando sua atuação no setor financeiro Wikipédia.

Finanças embarcadas ("Embedded Finance") e Open Finance facilitam criação de novos modelos de negócios celcoin.com.brgestaoeplanejamento.com.br.

Sobre o papel do Zi Credit nessa transformação
Embora as fontes não mencionem especificamente o Zi Credit, se quiser, podemos imaginar como ele pode se posicionar à frente:
Apostando em IA generativa e personalização para oferecer propostas de crédito detalhadas e automatizadas;

Incorporando o Open Finance para acessar dados e oferecer crédito competitivo;

Integrando-se a ecossistemas digitais (como fintechs, e-commerce ou super apps);

Adotando princípios de sustentabilidade e impacto social como diferencial de marca.`,
    image: "/blog/Tendências Bancárias para 2024 (1).png",
    author: "Equipe Zi Credit",
    date: "15 de Janeiro, 2024",
    readTime: "8 min",
    category: "Tendências",
    tags: ["Bancos Digitais", "Tecnologia", "Inovação", "Brasil", "Futuro"],
    featured: true,
  },
  {
    id: "pix-revolucionou-pagamentos-brasil",
    title: "Como o PIX Revolucionou os Pagamentos no Brasil",
    excerpt:
      "Entenda como o sistema de pagamentos instantâneos mudou o cenário financeiro brasileiro.",
    content: `Como o PIX Revolucionou os Pagamentos no Brasil
O PIX, criado pelo Banco Central em novembro de 2020, transformou a forma como os brasileiros realizam transações financeiras.
 Com ele, pagamentos e transferências são instantâneos, gratuitos (para pessoas físicas) e podem ser feitos 24 horas por dia, 7 dias por semana.

Impactos Principais
Acesso e Inclusão Financeira

Pessoas sem conta em bancos tradicionais puderam movimentar dinheiro por fintechs e bancos digitais.

Mais de 152 milhões de usuários já adotaram o PIX, ampliando o alcance da economia digital.

Redução de Custos

Elimina tarifas comuns em TEDs, DOCs e boletos.

Facilita pagamentos de pequenas quantias e microtransações.

Velocidade e Conveniência

Dinheiro transferido em até 10 segundos.

Funciona para qualquer valor, do café da manhã à compra de um carro.

Integração com o Comércio

Lojas físicas e e-commerces adotaram o PIX como forma de pagamento principal.

PIX QR Code e PIX Copia e Cola ampliaram a usabilidade.

Inovação Contínua

PIX Saque e PIX Troco permitem retirar dinheiro em estabelecimentos comerciais.

PIX Parcelado traz alternativa ao cartão de crédito`,
    image: "/blog/Como o PIX Revolucionou os.png",
    author: "Maria Silva",
    date: "12 de Janeiro, 2024",
    readTime: "5 min",
    category: "Pagamentos",
    tags: ["PIX", "Pagamentos", "Banco Central", "Inovação", "Brasil"],
    featured: false,
  },
  {
    id: "seguranca-digital-dicas-proteger-financas",
    title: "Segurança Digital: Dicas Essenciais para Proteger Suas Finanças",
    excerpt:
      "Aprenda as melhores práticas para manter suas informações financeiras seguras no ambiente digital e evitar fraudes.",
    content: `Segurança Digital: Dicas Essenciais para Proteger Suas Finanças
No mundo cada vez mais conectado, proteger suas informações financeiras é tão importante quanto proteger seu dinheiro físico. Com o aumento das transações online e o uso de bancos digitais, a segurança cibernética tornou-se prioridade absoluta para consumidores e instituições financeiras.

Principais Riscos Digitais
Phishing e Engenharia Social
 Golpes que usam e-mails, mensagens ou ligações falsas para roubar dados pessoais.

Malwares e Ransomwares
 Programas maliciosos invadem dispositivos, bloqueiam acesso ou roubam informações.

Roubo de Credenciais
 Senhas fracas ou reutilizadas facilitam o acesso não autorizado a contas.

Wi-Fi Público e Redes Inseguras
 Conexões abertas expõem dados durante transações.

Boas Práticas de Proteção
Use autenticação de dois fatores (2FA) em todas as contas financeiras.

Crie senhas fortes e únicas, evitando informações óbvias.

Atualize regularmente sistemas e aplicativos para corrigir falhas de segurança.

Evite clicar em links suspeitos ou baixar arquivos desconhecidos.

Utilize conexões seguras e evite transações financeiras em redes públicas.

O Papel da Zi Credit na Segurança Digital
A Zi Credit implementa camadas múltiplas de proteção, incluindo criptografia avançada, monitoramento antifraude em tempo real e autenticação biométrica, garantindo que cada transação seja validada e protegida.
 Além disso, oferece educação financeira digital para ajudar clientes a reconhecer ameaças e manter hábitos seguros.`,
    image: "/blog/Segurança Digital e Proteção Financeira (1).png",
    author: "Carlos Mendes",
    date: "10 de Janeiro, 2024",
    readTime: "6 min",
    category: "Segurança",
    tags: ["Segurança", "Fraude", "Dicas", "Proteção", "Digital"],
    featured: false,
  },
  {
    id: "investimentos-inteligentes-para-iniciantes",
    title: "Investimentos Inteligentes: Guia Completo para Iniciantes",
    excerpt:
      "Comece a investir com confiança! Este guia descomplica o mundo dos investimentos para quem está dando os primeiros passos.",
    content: `Investimentos Inteligentes: Guia Completo para Iniciantes
Investir pode parecer intimidador para quem está começando, mas com as informações corretas e uma estratégia bem definida, é possível construir patrimônio e alcançar objetivos financeiros de forma consistente. Este guia foi desenvolvido para simplificar conceitos, eliminar o medo e ajudar novos investidores a dar os primeiros passos com confiança.

Por que Investir?
Proteção contra a inflação: manter o poder de compra ao longo do tempo.

Aumento de patrimônio: fazer o dinheiro trabalhar para você.

Liberdade financeira: conquistar mais autonomia no futuro.

Passos Essenciais para Começar
Defina seus objetivos — curto, médio e longo prazo.

Monte uma reserva de emergência antes de investir em ativos de risco.

Conheça seu perfil de investidor (conservador, moderado ou arrojado).

Estude os principais ativos: renda fixa, fundos, ações, ETFs, criptomoedas.

Diversifique para reduzir riscos e aproveitar diferentes oportunidades.

Erros Comuns de Iniciantes
Investir sem entender o produto.

Colocar todo o dinheiro em um único ativo.

Seguir "dicas quentes" sem análise.

Ignorar taxas e impostos.

O Diferencial da Zi Credit
A Zi Credit oferece uma plataforma intuitiva, com ferramentas de educação financeira, simulações personalizadas e recomendações alinhadas ao seu perfil.
 Além disso, integra investimentos tradicionais e digitais, permitindo que o usuário diversifique e acompanhe resultados em tempo real.`,
    image: "/blog/Investimentos Inteligentes .png",
    author: "Ana Paula",
    date: "05 de Janeiro, 2024",
    readTime: "10 min",
    category: "Investimentos",
    tags: ["Investimentos", "Finanças", "Guia", "Iniciantes", "Dinheiro"],
    featured: false,
  },
  {
    id: "cashback-como-funciona-e-vantagens",
    title: "Cashback: Como Funciona e as Vantagens de Usar no Dia a Dia",
    excerpt:
      "Descubra como o cashback pode te ajudar a economizar e ganhar dinheiro de volta em suas compras com o Zi Credit.",
    content: `Cashback: Como Funciona e as Vantagens de Usar no Dia a Dia
O cashback se tornou uma das estratégias mais atrativas para consumidores que buscam economizar enquanto compram. Em vez de apenas oferecer descontos, esse modelo devolve parte do valor gasto diretamente para o cliente, permitindo que ele utilize esse saldo em novas compras ou até mesmo o transfira para sua conta.

Como Funciona o Cashback?
Ao realizar uma compra, uma porcentagem do valor é devolvida ao consumidor.

Esse valor pode ser creditado na própria plataforma ou convertido em saldo bancário.

Funciona em lojas físicas e online, dependendo dos parceiros.

Principais Vantagens
Economia contínua — acumule saldo a cada compra.

Liberdade de uso — utilize o valor devolvido como preferir.

Incentivo a compras inteligentes — planejamento para aproveitar ao máximo as promoções.

Acúmulo com outros benefícios — possibilidade de combinar com cupons e programas de pontos.

O Diferencial da Zi Credit
A Zi Credit vai além do cashback tradicional, oferecendo percentuais competitivos e integração direta com sua conta digital.
 Com isso, o cliente pode:
Receber o cashback de forma instantânea.

Usar o saldo para pagar contas, investir ou fazer novas compras.

Monitorar ganhos acumulados em tempo real pelo aplicativo.

Essa abordagem torna a experiência de consumo mais inteligente, transparente e lucrativa para o usuário.`,
    image: "/blog/Cashback e Vantagens do Zi Credit.png",
    author: "Equipe Zi Credit",
    date: "01 de Janeiro, 2024",
    readTime: "7 min",
    category: "Recompensas",
    tags: ["Cashback", "Economia", "Vantagens", "Recompensas", "Zi Credit"],
    featured: false,
  },
];


const categories = [
  "Todos",
  "Tendências",
  "Pagamentos",
  "Segurança",
  "Investimentos",
  "Recompensas",
];

const ArticleCard = memo(function ArticleCard({
  article,
  onPreview,
}: {
  article: (typeof articles)[0];
  onPreview: (article: (typeof articles)[0]) => void;
}) {
  return (
    <Card className="overflow-hidden shadow-lg cursor-pointer hover:shadow-xl transition-shadow">
      <div onClick={() => onPreview(article)}>
        <img
          src={article.image || "/placeholder.svg"}
          alt={article.title}
  className="w-full h-48 object-cover object-center"
          loading="lazy"
        />
        <CardContent className="p-4">
          <Badge className="mb-2">{article.category}</Badge>
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            {article.title}
          </h3>
          <p className="text-sm text-gray-700 mb-4 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="flex items-center text-xs text-gray-500">
            <Calendar className="w-3 h-3 mr-1" />
            <span>{article.date}</span>
            <Clock className="w-3 h-3 ml-3 mr-1" />
            <span>{article.readTime}</span>
          </div>
        </CardContent>
      </div>
    </Card>
  );
});

const FullPagePreview = memo(function FullPagePreview({
  article,
  onClose,
}: {
  article: (typeof articles)[0];
  onClose: () => void;
}) {
  const organizeContentIntoTopics = (content: string) => {
    const paragraphs = content.split("\n\n").filter((p) => p.trim().length > 0);
    const topics = [];

    for (let i = 0; i < paragraphs.length; i += 2) {
      const title =
        paragraphs[i]?.split(".")[0] ||
        paragraphs[i]?.split(":")[0] ||
        `Tópico ${Math.floor(i / 2) + 1}`;
      const content = paragraphs.slice(i, i + 2).join("\n\n");
      topics.push({ title: title.trim(), content: content.trim() });
    }

    return topics;
  };

  const contentTopics = organizeContentIntoTopics(article.content);

  return (
    <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
      {/* Header do preview */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={onClose}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao Blog
            </Button>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Share2 className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Bookmark className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <header className="mb-12 text-center bg-primary py-16  px-4 sm:px-6 lg:px-8">
        <Badge className="mb-4 text-sm bg-black text-white">
          {article.category}
        </Badge>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black leading-tight mb-6">
          {article.title}
        </h1>

        {/* Meta informações */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-black/70 mb-6">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{article.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{article.readTime}</span>
          </div>
          <span>Por {article.author}</span>
        </div>

        {/* Excerpt */}
        <p className="text-lg sm:text-xl text-black/80 leading-relaxed mb-8 font-light max-w-4xl mx-auto">
          {article.excerpt}
        </p>
      </header>
      {/* Conteúdo do artigo */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {contentTopics.map((topic, index) => (
            <Card
              key={index}
              className="p-6 sm:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                  {topic.title}
                </h3>
              </div>
              <div className="prose prose-gray max-w-none">
                <div className="text-gray-700 leading-relaxed text-base whitespace-pre-line">
                  {topic.content}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Tags */}
        <div className="mb-12 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            Tags Relacionadas
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {article.tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-sm px-3 py-1"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-2xl text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-3">
            Gostou do conteúdo?
          </h3>
          <p className="text-gray-600 mb-6 text-lg">
            Descubra como o Zi Credit pode transformar suas finanças
          </p>
          <Link href="/suporte">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 px-8 py-3">
              Criar minha conta
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
});

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [previewArticle, setPreviewArticle] = useState<
    (typeof articles)[0] | null
  >(null);

  const filteredArticles = useMemo(() => {
    let filtered = articles;

    if (selectedCategory !== "Todos") {
      filtered = filtered.filter(
        (article) => article.category === selectedCategory
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) =>
            tag.toLowerCase().includes(searchTerm.toLowerCase())
          )
      );
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const featuredArticle = useMemo(
    () => articles.find((article) => article.featured) || articles[0],
    []
  );

  const handleCategoryChange = useCallback((category: string) => {
    setSelectedCategory(category);
  }, []);

  const handleSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const handlePreview = useCallback((article: (typeof articles)[0]) => {
    setPreviewArticle(article);
  }, []);

  const handleClosePreview = useCallback(() => {
    setPreviewArticle(null);
  }, []);

  if (previewArticle) {
    return (
      <FullPagePreview article={previewArticle} onClose={handleClosePreview} />
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-15">
          <h1 className="text-4xl font-bold text-center mb-8">Nosso Blog</h1>
          <p className="text-xl text-center text-gray-600 mb-12">
            Fique por dentro das últimas notícias e tendências do mundo
            financeiro.
          </p>

          {/* Featured Article Section */}
       

          {/* Search and Filter Section */}
          <section className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Buscar artigos..."
                  className="pl-10 pr-4 py-2 rounded-md border border-gray-300 w-full"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    onClick={() => handleCategoryChange(category)}
                    className={
                      selectedCategory === category
                        ? "bg-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>
          </section>

          {/* Articles Grid */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                  onPreview={handlePreview}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-gray-600 text-lg">
                Nenhum artigo encontrado para sua busca.
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
