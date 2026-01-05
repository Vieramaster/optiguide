import path from "path";
import fs from "fs/promises";

export const generateStaticParams = async () => {
  const articlesDir = path.join(process.cwd(), "articles");
  try {
    const files = await fs.readdir(articlesDir);
    return files
      .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
      .map((file) => ({
        slug: file.replace(/\.mdx?$/, ""),
      }));
  } catch (e) {
    console.log(e);
    return [];
  }
};
