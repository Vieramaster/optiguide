import fs from "fs";
import path from "path";

export const findMarkdownFile = (root: string, slug: string): string | null => {
  const target = `${slug}.md`;
  const queue: string[] = [root];

  while (queue.length) {
    const current = queue.shift()!;
    const entries = fs.readdirSync(current, { withFileTypes: true });

    // Archivos primero
    const file = entries.find(e => e.isFile() && e.name === target);
    if (file) return path.join(current, file.name);

    // Directorios a la cola
    queue.push(
      ...entries
        .filter(e => e.isDirectory())
        .map(e => path.join(current, e.name))
    );
  }

  return null;
};