import fs from "fs";
import path from "path";

/**
 * Busca recursivamente un archivo Markdown por su slug
 * @param root - Directorio raíz donde buscar
 * @param slug - Slug del archivo (sin extensión .md)
 * @returns Ruta completa del archivo encontrado o null si no existe
 */
export const findMarkdownFile = (rootDirectory: string, slug: string): string | null => {
  const targetFileName = `${slug}.md`;
  const directoriesToSearch: string[] = [rootDirectory];

  while (directoriesToSearch.length) {
    const currentDirectory = directoriesToSearch.shift()!;
    const directoryEntries = fs.readdirSync(currentDirectory, { withFileTypes: true });

    // Check for target file first
    const targetFile = directoryEntries.find(entry => entry.isFile() && entry.name === targetFileName);
    if (targetFile) return path.join(currentDirectory, targetFile.name);

    // Add subdirectories to search queue
    directoriesToSearch.push(
      ...directoryEntries
        .filter(entry => entry.isDirectory())
        .map(entry => path.join(currentDirectory, entry.name))
    );
  }

  return null;
};