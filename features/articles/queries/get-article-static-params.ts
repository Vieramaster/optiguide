import { promises as fs } from "fs";
import path from "path";

import { ARTICLES_DIR } from "@/features/articles/constants";

export const getArticleStaticParams = async (): Promise<{ slug: string }[]> => {
  try {
    const entries = await fs.readdir(ARTICLES_DIR, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile() && entry.name.endsWith(".mdx"))
      .map((entry) => ({ slug: path.basename(entry.name, ".mdx") }));
  } catch (error) {
    console.error("Error generating article params:", error);
    return [];
  }
};
