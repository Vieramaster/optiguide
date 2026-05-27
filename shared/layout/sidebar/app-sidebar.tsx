"use client";

import { PageTitle } from "@/shared/components/page-title";

import {
  ProjectsNav,
  ArticlesNav,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "./components";
import type { ArticleItem, ToolItem } from "./types/sidebar";

interface AppSidebarProps extends React.ComponentProps<typeof Sidebar> {
  toolsSidebar: ToolItem[];
  articlesSidebar: ArticleItem[];
}

export const AppSidebar = ({
  toolsSidebar,
  articlesSidebar,
  ...props
}: AppSidebarProps) => (
  <Sidebar collapsible="icon" {...props}>
    <SidebarHeader>
      <PageTitle textSize="text-2xl" />
    </SidebarHeader>
    <SidebarContent>
      <ProjectsNav projects={toolsSidebar} title="herramientas" />
      <ArticlesNav articles={articlesSidebar} name="Articulos" />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
);
