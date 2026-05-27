import { notFound } from "next/navigation";
import type { ComponentType } from "react";

import { SectionArticle } from "@/features/articles";
import { getArticleStaticParams } from "@/features/articles/server";
import { isValidSlug } from "@/shared/validation/slug-validation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  return getArticleStaticParams();
};

async function loadArticleMdx(slug: string): Promise<ComponentType> {
  try {
    // Ruta relativa: el import dinámico con alias `@/` puede fallar en dev (Turbopack).
    const mod = await import(`../../../features/articles/markdowns/${slug}.mdx`);
    return mod.default as ComponentType;
  } catch {
    notFound();
  }
}

const ArticlesPage = async ({ params }: PageProps) => {
  const { slug } = await params;

  if (!isValidSlug(slug)) {
    notFound();
  }

  const Post = await loadArticleMdx(slug);

  return (
    <SectionArticle>
      <Post />
    </SectionArticle>
  );
};

export default ArticlesPage;
