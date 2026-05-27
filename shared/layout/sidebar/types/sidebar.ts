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

export type Team = {
  name: string;
  logo: LucideIcon;
  plan: string;
};

export type User = {
  name: string;
  email: string;
  avatar: string;
};
