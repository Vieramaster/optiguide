
import { getArticleStaticParams } from "@/features/articles/utils/get-article-static-params";
import { getArticleContent } from "@/features/articles/utils/get-article-content";
import { ArticleContent } from "@/features/articles/article-content";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}
export const generateStaticParams = async (): Promise<{ slug: string }[]> => {
  return getArticleStaticParams();
}

const ArticlesPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const content = await getArticleContent(slug);

  return (
    <ArticleContent>{content}</ArticleContent>
  );
};

export default ArticlesPage;
