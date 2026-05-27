"use client";

import { AppSidebar } from "@/shared/layout/sidebar/app-sidebar";
import {ARTICLES_SIDEBAR} from "@/features/articles/config/articles-sidebar";
import { CATALOG_SIDEBAR_ITEM } from "@/features/tools/catalog";
import { FACE_SHAPE_SIDEBAR_ITEM } from "@/features/tools/face-shape";
import { LENS_THICKNESS_SIDEBAR_ITEM } from "@/features/tools/lens-thickness";

const TOOLS_SIDEBAR = [
  LENS_THICKNESS_SIDEBAR_ITEM,
  FACE_SHAPE_SIDEBAR_ITEM,
  CATALOG_SIDEBAR_ITEM,
] as const;

type AppSidebarClientProps = Omit<
  React.ComponentProps<typeof AppSidebar>,
  "toolsSidebar" | "articlesSidebar"
>;

export const AppSidebarClient = (props: AppSidebarClientProps) => (
  <AppSidebar
    toolsSidebar={[...TOOLS_SIDEBAR]}
    articlesSidebar={ARTICLES_SIDEBAR}
    {...props}
  />
);
