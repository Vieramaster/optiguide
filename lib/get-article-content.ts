import { promises as fs } from "fs";
import { notFound } from "next/navigation";

import { ARTICLES_DIR } from "@/lib/constants";
import { findMarkdownFile } from "@/lib/findmarkdown-file";
import { isValidSlug } from "@/lib/validation/slug-validation";

/**
 * Función utilitaria para cargar el contenido de un artículo desde archivos Markdown
 * Maneja validación del slug, búsqueda del archivo y lectura del contenido
 *
 * @param slug - El slug del artículo a cargar (debe ser válido y existir)
 * @returns El contenido del artículo como string Markdown
 * @throws Llama automáticamente a notFound() de Next.js si:
 *   - El slug no es válido
 *   - El archivo no existe
 *   - Hay un error de lectura del archivo
 *
 * @example
 * ```ts
 * const content = await getArticleContent("miopia");
 * // Retorna el contenido del archivo articles/.../miopia.md
 * ```
 */
export async function getArticleContent(slug: string): Promise<string> {
  // Validar el slug antes de procesar
  if (!isValidSlug(slug)) {
    notFound();
  }

  try {
    const filePath = findMarkdownFile(ARTICLES_DIR, slug);

    if (!filePath) notFound();

    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error loading article "${slug}":`, error);
    notFound();
  }
}