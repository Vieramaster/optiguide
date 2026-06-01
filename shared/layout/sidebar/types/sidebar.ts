import type { LucideIcon } from "lucide-react";

export type SidebarBlock = {
  title: string;
  url: string;
};

export type ArticleItem = {
  title: string;
  Icon: LucideIcon;
  blocks: SidebarBlock[];
};

export type ToolItem = {
  title: string;
  url: string;
  Icon: LucideIcon;
};
