import type { LucideIcon } from "lucide-react";

export type block = {
  title: string;
  url: string;
};

export type articleItem = {
  title: string;
  Icon: LucideIcon;
  blocks: block[];
};



export type toolItem = {
  title: string;
  url: string;
  Icon: LucideIcon;
};

export type team = {
  name: string;
  logo: LucideIcon;
  plan: string;
};

export type user = {
  name: string;
  email: string;
  avatar: string;
};

