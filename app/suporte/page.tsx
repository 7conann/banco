"use client"

import type React from "react"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import {
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  Clock,
  Search,
  ChevronRight,
  BookOpen,
  Users,
  Shield,
  CreditCard,
} from "lucide-react"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

const faqCategories = [
  {
    id: "conta",
    title: "Conta e Cadastro",
    icon: Users,
    questions: [
      {
        question: "Como criar uma conta no Zi Credit?",
        answer:
          "Para criar sua conta, clique em 'Criar conta' no topo da página, preencha seus dados pessoais e siga as instruções de verificação. O processo leva apenas alguns minutos.",
      },
      {
        question: "Quais documentos preciso para abrir uma conta?",
        answer:
          "Você precisa de um documento de identidade válido (RG ou CNH), CPF e comprovante de residência atualizado. Para pessoa jurídica, também é necessário o CNPJ e contrato social.",
      },
      {
        question: "Como alterar meus dados cadastrais?",
        answer:
          "Acesse suas configurações no dashboard, vá em 'Perfil' e atualize as informações necessárias. Algumas alterações podem requerer verificação adicional.",
      },
    ],
  },
  {
    id: "transacoes",
    title: "Transações e Pagamentos",
    icon: CreditCard,
    questions: [
      {
        question: "Como fazer um PIX?",
        answer:
          "No seu dashboard, clique em 'Nova Transferência', selecione PIX, insira a chave PIX do destinatário, o valor e confirme a transação com sua senha ou biometria.",
      },
      {
        question: "Qual o limite para transferências PIX?",
        answer:
          "O limite padrão é de R$ 20.000 por transação e R$ 40.000 por dia. Você pode solicitar aumento de limite através do suporte.",
      },
      {
        question: "Como funciona o Boleto PIX?",
        answer:
          "O Boleto PIX permite que o pagador escolha entre pagar via código de barras tradicional ou através de QR Code PIX, oferecendo mais flexibilidade.",
      },
    ],
  },
  {
    id: "cashback",
    title: "Cashback e Premiações",
    icon: Shield,
    questions: [
      {
        question: "Como funciona o sistema de cashback?",
        answer:
          "Você ganha 0,50% de cashback em serviços parceiros como Spotify, Netflix, recargas de celular, etc. O cashback é creditado automaticamente em até 48 horas.",
      },
      {
        question: "Quando posso resgatar meu cashback?",
        answer:
          "O cashback fica disponível para resgate após 30 dias da transação. Você pode resgatar a partir de R$ 10,00 acumulados.",
      },
      {
        question: "Como funciona o sistema de níveis?",
        answer:
          "Temos 4 níveis: Bronze, Prata, Ouro e Diamante. Quanto mais você gasta, maior seu nível e maior o multiplicador de cashback.",
      },
    ],
  },
  {
    id: "seguranca",
    title: "Segurança",
    icon: Shield,
    questions: [
      {
        question: "Como o Zi Credit protege meus dados?",
        answer:
          "Utilizamos criptografia de ponta, autenticação de dois fatores e monitoramento 24/7 para proteger suas informações e transações.",
      },
      {
        question: "O que fazer se suspeitar de fraude?",
        answer:
          "Entre em contato imediatamente com nosso suporte através do chat ou telefone. Bloqueamos sua conta temporariamente enquanto investigamos.",
      },
      {
        question: "Como ativar a autenticação de dois fatores?",
        answer: "Vá em Configurações > Segurança e ative a opção '2FA'. Você pode usar SMS ou aplicativo autenticador.",
      },
    ],
  },
]

const supportChannels = [
  {
    title: "Chat ao Vivo",
    description: "Fale conosco em tempo real",
    icon: MessageCircle,
    availability: "24/7",
    action: "Iniciar Chat",
    href: "/chat",
  },
  {
    title: "Telefone",
    description: "+55 (61) 98174-3930",
    icon: Phone,
    availability: "Seg-Sex 8h-18h",
    action: "Ligar Agora",
    href: "tel:+5561981743930",
  },
  {
    title: "E-mail",
    description: "contato@zicredit.com",
    icon: Mail,
    availability: "Resposta em até 24h",
    action: "Enviar E-mail",
    href: "mailto:contato@zicredit.com",
  },
]

export default function SuportePage() {
  const [step, setStep] = useState<1|2>(1);
const [form, setForm] = useState({
  name: "",
  surname: "",
  email: "",
  phone: "",
  company: "",
  employees: "",
  products: [] as string[],
  message: "",
});
const productsList = [
  "Banking as a Service",
  "Blockchain as a Service",
  "Investment as a Service",
  "Soluções para Corretoras",
  "Gateway de Pagamentos",
  "Tesouraria Cripto",
  "Comércio Exterior",
  "Liquidity as a Service",
  "Emissão de cartão",
  "Tokenização",
  "White Label",
];
const next = () => setStep(2);
const back = () => setStep(1);

const toggleProduct = (prod: string) => {
  setForm(f => ({
    ...f,
    products: f.products.includes(prod)
      ? f.products.filter(p => p !== prod)
      : [...f.products, prod],
  }));
};

  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("conta")
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const filteredQuestions =
    faqCategories
      .find((cat) => cat.id === selectedCategory)
      ?.questions.filter(
        (q) =>
          q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
          q.answer.toLowerCase().includes(searchTerm.toLowerCase()),
      ) || []

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria o envio do formulário
    console.log("Formulário enviado:", contactForm)
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.")
    setContactForm({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Como podemos ajudar?</h1>
              <p className="text-xl text-gray-600 mb-8">
                Encontre respostas rápidas ou entre em contato com nossa equipe de suporte especializada.
              </p>

              {/* Search */}
              <div className="max-w-md mx-auto">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <Input
                    placeholder="Buscar ajuda..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 py-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Support Channels */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Canais de Atendimento</h2>
              <p className="text-gray-600">Escolha a forma mais conveniente para entrar em contato</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {supportChannels.map((channel, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <channel.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{channel.title}</h3>
                    <p className="text-gray-600 mb-2">{channel.description}</p>
                    <div className="flex items-center justify-center space-x-1 text-sm text-gray-500 mb-4">
                      <Clock className="h-4 w-4" />
                      <span>{channel.availability}</span>
                    </div>
                    <Button className="w-full" asChild>
                      <Link href={channel.href}>
                        {channel.action}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Perguntas Frequentes</h2>
              <p className="text-gray-600">Encontre respostas para as dúvidas mais comuns</p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                {/* Categories Sidebar */}
                <div className="lg:col-span-1">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Categorias</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <nav className="space-y-1">
                        {faqCategories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors ${
                              selectedCategory === category.id
                                ? "bg-primary/10 text-primary border-r-2 border-primary"
                                : "text-gray-700"
                            }`}
                          >
                            <category.icon className="h-5 w-5" />
                            <span>{category.title}</span>
                          </button>
                        ))}
                      </nav>
                    </CardContent>
                  </Card>
                </div>

                {/* FAQ Content */}
                <div className="lg:col-span-3">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <BookOpen className="h-5 w-5" />
                        <span>{faqCategories.find((cat) => cat.id === selectedCategory)?.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {filteredQuestions.length === 0 ? (
                        <div className="text-center py-8">
                          <HelpCircle className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">Nenhuma pergunta encontrada</h3>
                          <p className="text-gray-600">Tente ajustar sua busca ou entre em contato conosco.</p>
                        </div>
                      ) : (
                        <Accordion type="single" collapsible className="w-full">
                          {filteredQuestions.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`}>
                              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                            </AccordionItem>
                          ))}
                        </Accordion>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form */}
   <section className="py-16">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Fale com nossos especialistas</CardTitle>
          <p className="text-gray-600">
            Nossa equipe entrará em contato para entender sua necessidade...
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleContactSubmit} className="space-y-6">

            {step === 1 && (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name"  className="mb-2">Nome*</Label>
                    <Input id="name" value={form.name}
                           onChange={e => setForm(f => ({...f, name: e.target.value}))}
                           required />
                  </div>
                  <div>
                    <Label htmlFor="surname" className="mb-2">Sobrenome*</Label>
                    <Input id="surname" value={form.surname}
                           onChange={e => setForm(f => ({...f, surname: e.target.value}))}
                           required />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="mb-2">E‐mail corporativo*</Label>
                  <Input id="email" type="email" value={form.email}
                         onChange={e => setForm(f => ({...f, email: e.target.value}))}
                         required />
                </div>
                <div>
                  <Label htmlFor="phone" className="mb-2">Numero de Telefone</Label>
                  <Input id="phone" value={form.phone}
                         onChange={e => setForm(f => ({...f, phone: e.target.value}))} />
                </div>
                <div>
                  <Label htmlFor="company" className="mb-2">Nome da Empresa*</Label>
                  <Input id="company" value={form.company}
                         onChange={e => setForm(f => ({...f, company: e.target.value}))}
                         required />
                </div>
                <div>
                  <Label htmlFor="employees" className="mb-2">Número de Funcionários*</Label>
                  <Input id="employees" type="number" value={form.employees}
                         onChange={e => setForm(f => ({...f, employees: e.target.value}))}
                         required />
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div>
                  <p className="mb-2">
                    Marque os produtos que deseja conhecer*:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {productsList.map(prod => (
                      <label key={prod} className="flex items-center space-x-2">
                        <Checkbox
                          checked={form.products.includes(prod)}
                          onCheckedChange={() => toggleProduct(prod)}
                        />
                        <span className="text-sm">{prod}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <Label htmlFor="message" className="mb-2">
                    Conte mais sobre sua operação
                  </Label>
                  <Textarea id="message" rows={5} value={form.message}
                            onChange={e => setForm(f => ({...f, message: e.target.value}))}
                            required />
                </div>
              </>
            )}

            <div className="flex justify-between">
              {step > 1 
                ? <Button variant="outline" onClick={back}>Voltar</Button>
                : <div/>
              }
              {step < 2
                ? <Button onClick={next}>Avançar</Button>
                : <Button type="submit">Enviar</Button>
              }
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  </div>
</section>

      </main>
      <Footer />
    </div>
  )
}
