"use client";

import * as React from "react";

import { NavLibrary } from "@/components/nav-library";
import { NavProjects } from "@/components/nav-projects";
import { NavUser } from "@/components/nav-user";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";

import { GlassesIcon } from "lucide-react";

import { Minus } from "lucide-react";
// This is sample data.
import { sidebarData } from "@/data/sidebar-data";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      {/**header del sidebar */}
      <SidebarHeader>
        <p>OPTIGUIDE</p>
        <Minus className="rotate-90" />
        <GlassesIcon />
      </SidebarHeader>
      {/**Contenido del sidebar */}
      <SidebarContent>
        <NavProjects projects={sidebarData.tools} title="herramientas" />
        <NavLibrary arrayItems={sidebarData.library} name="Libreria" />
      </SidebarContent>
      {/**Footer del sidebar */}
      <SidebarFooter>
        <NavUser user={sidebarData.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
/**        <NavLibrary
          arrayItems={sidebarData.laboratoryTools}
          name="Herramientas de laboratorio"
        /> */
