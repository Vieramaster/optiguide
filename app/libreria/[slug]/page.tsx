// Local imports
import { getArticleStaticParams } from "@/lib/utils/get-article-static-params";
import { getArticleContent } from "@/lib/get-article-content";
import { MarkdownRenderer } from "@/components/articles/markdown-renderer";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return getArticleStaticParams();
}

const LibraryPage = async ({ params }: PageProps) => {
  const { slug } = await params;
  const content = await getArticleContent(slug);

  return (
    <article className="px-10 pt-5 pb-20 flex flex-col gap-6 mx-auto xl:px-28">
      <MarkdownRenderer>{content}</MarkdownRenderer>
    </article>
  );
};

export default LibraryPage;
