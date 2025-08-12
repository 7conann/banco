// app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

// Fonte dos posts (pode extrair para um módulo separado se preferir)
const blogPosts = [
  {
    slug: "como-economizar-dinheiro",
    title: "Como Economizar Dinheiro: Dicas Essenciais para o Seu Bolso",
    author: "Equipe Zi Credit",
    date: "15 de Julho de 2024",
    category: "Finanças Pessoais",
    image: "/placeholder.svg?height=400&width=800",
    content: `...` // (mantém seu HTML)
  },
  {
    slug: "seguranca-digital-no-banco",
    title: "Segurança Digital no Banco: Proteja Suas Finanças Online",
    author: "Equipe Zi Credit",
    date: "20 de Julho de 2024",
    category: "Segurança",
    image: "/placeholder.svg?height=400&width=800",
    content: `...`
  },
  {
    slug: "beneficios-do-cartao-de-credito",
    title: "Desvendando os Benefícios do Cartão de Crédito Zi Credit",
    author: "Equipe Zi Credit",
    date: "25 de Julho de 2024",
    category: "Cartões",
    image: "/placeholder.svg?height=400&width=800",
    content: `...`
  },
];

// 🔹 Exige ao Next gerar as páginas estaticamente no build
export function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

// (opcional) impede acesso a slugs não listados
export const dynamicParams = false;

type Props = { params: { slug: string } };

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find(p => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
      
    </div>
  );
}
