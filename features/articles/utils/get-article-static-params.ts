import { promises as fs } from "fs";
import path from "path";

import { ARTICLES_DIR } from "@/features/articles/utils/constants";

const scanMarkdown = async (dir: string): Promise<{ slug: string }[]> => {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    const nested = await Promise.all(
        entries.map(async ({ name, isFile, isDirectory }) => {

            const fullPath = path.join(dir, name);

            if (isDirectory()) {
                return scanMarkdown(fullPath);
            }

            return isFile() && name.endsWith(".md")
                ? [{ slug: path.basename(name, ".md") }]
                : [];
        })
    );

    return nested.flat();
}

export const getArticleStaticParams = async (): Promise<{ slug: string }[]> => {
    try {
        return await scanMarkdown(ARTICLES_DIR);
    } catch (error) {
        console.error("Error generating article params:", error);
        return [];
    }
}
