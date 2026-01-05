import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { findMarkdownFile } from "@/lib/findmarkdown-file";
import { MarkdownRenderer } from "@/components/markdown-renderer";
import { generateStaticParams } from "@/lib/generate-static-params";


interface PageProps {
  params: Promise<{ slug: string }>;
}
// 1. Generación Estática: Next.js crea los HTML en el build
generateStaticParams()

// 2. El componente es limpio: solo se enfoca en el "camino feliz"
const LibraryPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  const baseDir = path.join(process.cwd(), "articles");
  const filePath = findMarkdownFile(baseDir, slug);

  if (!filePath) {
    notFound(); // Dispara el 404 de Next.js
  }

  // Lectura asíncrona que no bloquea el servidor
  const content = await fs.readFile(filePath, "utf-8");

  return (
    <article className="px-10 pt-5 pb-20 flex flex-col gap-6 mx-auto max-w-4xl">
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </article>
  );
};

export default LibraryPage;
