"use client";

import * as React from "react";

import { NavLibrary } from "@/components/nav-library";
import { NavProjects } from "@/components/nav-projects";
import { PageTitle } from "./page-title";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from "@/components/ui/sidebar";

// This is sample data.
import { sidebarData } from "@/data/sidebar-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/**header del sidebar */}
      <SidebarHeader>
        <PageTitle />
      </SidebarHeader>
      {/**Contenido del sidebar */}
      <SidebarContent>
        <NavProjects projects={sidebarData.tools} title="herramientas" />
        <NavLibrary arrayItems={sidebarData.library} name="Libreria" />
      </SidebarContent>
      {/**Footer del sidebar */}
      <SidebarFooter />
    </Sidebar>
  );
}
