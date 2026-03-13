"use client";

//COMPONENTS
import { ArticlesNav } from "./nav/articles-nav";
import { ProjectsNav } from "./nav/projects-nav";
import { PageTitle } from "@/components/page-title";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/";
//DATA
import { ARTICLES_SIDEBAR } from "../data/library-sidebar";
import { TOOLS_SIDEBAR } from "../data/tools-sidebar";

export const AppSidebar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => (
  <Sidebar collapsible="icon" {...props}>
    {/**header del sidebar */}
    <SidebarHeader>
      <PageTitle />
    </SidebarHeader>
    {/**Contenido del sidebar */}
    <SidebarContent>
      <ProjectsNav projects={TOOLS_SIDEBAR} title="herramientas" />
      <ArticlesNav arrayItems={ARTICLES_SIDEBAR} name="Articulos" />
    </SidebarContent>
    {/**Footer del sidebar */}
    <SidebarFooter />
  </Sidebar>
);