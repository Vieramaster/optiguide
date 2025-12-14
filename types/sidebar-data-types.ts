import type { LucideIcon } from "lucide-react";

export type BlockType = {
  title: string;
  url: string;
};

export type LibraryItemType = {
  title: string;
  icon: LucideIcon;
  isActive?: boolean;
  blocks: BlockType[];
};

export type LaboratoryToolItemType = {
  title: string;
  icon: LucideIcon;
  url: string;
  blocks: BlockType[];
};

export type ToolItemType = {
  title: string;
  url: string;
  icon: LucideIcon;
};

export type TeamType = {
  name: string;
  logo: LucideIcon;
  plan: string;
};

export type UserType = {
  name: string;
  email: string;
  avatar: string;
};

export type SidebarDataType = {
  library: LibraryItemType[];
  tools: ToolItemType[];
};
/**  laboratoryTools: LibraryItemType[] */
