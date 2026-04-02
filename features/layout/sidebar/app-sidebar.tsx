"use client";

//COMPONENTS
import {
  ProjectsList, ArticlesList, Sidebar, SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "./components";
import { PageTitle } from "@/components/page-title";

//DATA
import { TOOLS_SIDEBAR } from "./data/toolsSidebar";
import { ARTICLES_SIDEBAR } from "./data/librarySidebar";

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible="icon" {...props}>
    {/**header del sidebar */}
    <SidebarHeader>
      <PageTitle textSize="text-2xl" />
    </SidebarHeader>
    {/**Contenido del sidebar */}
    <SidebarContent>
      <ProjectsList projects={TOOLS_SIDEBAR} title="herramientas" />
      <ArticlesList arrayItems={ARTICLES_SIDEBAR} name="Articulos" />
    </SidebarContent>
    {/**Footer del sidebar */}
    <SidebarFooter />
  </Sidebar>
);