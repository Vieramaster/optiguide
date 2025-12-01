import fs from "fs";
import path from "path";

export const findMarkdownFile = (dir: string, slug: string): string | null => {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const result = findMarkdownFile(fullPath, slug);
      if (result) return result;
    }

    if (entry.isFile() && entry.name === `${slug}.md`) {
      return fullPath;
    }
  }

  return null;
};
