import { notFound } from "next/navigation";
import type { ComponentType } from "react";

type MdxModule = {
  default: ComponentType;
};

export const loadArticleMdx = async (slug: string): Promise<ComponentType> => {
  try {
    const mod = (await import(
      `../markdowns/${slug}.mdx`
    )) as MdxModule;

    return mod.default;
  } catch {
    notFound();
  }
};
