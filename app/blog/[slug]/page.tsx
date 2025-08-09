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
  );
}
