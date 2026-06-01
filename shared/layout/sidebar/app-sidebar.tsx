"use client";

import { PageTitle } from "@/shared/components";

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
  toolsNavTitle: string;
  articlesNavTitle: string;
}

export const AppSidebar = ({
  toolsSidebar,
  articlesSidebar,
  toolsNavTitle,
  articlesNavTitle,
  ...props
}: AppSidebarProps) => (
  <Sidebar collapsible="icon" {...props}>
    <SidebarHeader>
      <PageTitle textSize="text-2xl" />
    </SidebarHeader>
    <SidebarContent>
      <ProjectsNav projects={toolsSidebar} title={toolsNavTitle} />
      <ArticlesNav articles={articlesSidebar} name={articlesNavTitle} />
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
);
