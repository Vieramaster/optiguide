import { notFound } from "next/navigation";

import { SectionArticle } from "@/features/articles";
import { getArticleStaticParams, loadArticleMdx } from "@/features/articles/server";
import { isValidSlug } from "@/shared/validation/slug-validation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  return getArticleStaticParams();
};

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
