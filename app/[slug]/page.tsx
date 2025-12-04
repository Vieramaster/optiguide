export const dynamic = "force-dynamic";
export const revalidate = 0;

import fs from "fs";
import path from "path";
import { findMarkdownFile } from "@/lib/findMarkdownFile";
import { MarkdownRenderer } from "@/components/markdown-renderer";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;

  const baseDir = path.join(process.cwd(), "articles");
  const filePath = findMarkdownFile(baseDir, slug);

  if (!filePath) {
    return <div>No se encontró el artículo</div>;
  }

  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <section className="px-10 pt-5 pb-20 flex flex-col gap-6">
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </section>
  );
}
