import { promises as fs } from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { findMarkdownFile } from "@/lib/findmarkdown-file";
import { MarkdownRenderer } from "@/components/articles/markdown-renderer";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Generación Estática: Next.js crea los HTML en el build
export async function generateStaticParams() {
  const articlesDir = path.join(process.cwd(), "articles");
  const slugs: { slug: string }[] = [];

  async function findMarkdownFiles(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        await findMarkdownFiles(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".md")) {
        const slug = entry.name.replace(/\.md$/, "");
        slugs.push({ slug });
      }
    }
  }

  try {
    await findMarkdownFiles(articlesDir);
    return slugs;
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

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
    <article className="px-10 pt-5 pb-20 flex flex-col gap-6 mx-auto xl:px-28">
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </article>
  );
};

export default LibraryPage;
