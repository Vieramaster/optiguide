import { notFound } from "next/navigation";
import type { ComponentType } from "react";

export const loadArticleMdx = async (slug: string): Promise<ComponentType> => {
  try {
    const mod = await import(`../markdowns/${slug}.mdx`);
    return mod.default as ComponentType;
  } catch {
    notFound();
  }
};
