import { promises as fs } from "fs";
import path from "path";

import { ARTICLES_DIR } from "@/lib/constants";

async function scanMarkdown(dir: string): Promise<{ slug: string }[]> {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    const nested = await Promise.all(
        entries.map(async (entry) => {
            const fullPath = path.join(dir, entry.name);

            if (entry.isDirectory()) {
                return scanMarkdown(fullPath);
            }

            return entry.isFile() && entry.name.endsWith(".md")
                ? [{ slug: path.basename(entry.name, ".md") }]
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
