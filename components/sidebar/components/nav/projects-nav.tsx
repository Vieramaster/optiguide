"use client";
//COMPONENTS
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/sidebar/components/sidebar";
//TYPES
import type { toolItem } from "../../types/sidebar";

interface projectsNavProps {
  title: string;
  projects: toolItem[];
}
export const ProjectsNav = ({ projects, title }: projectsNavProps) => {
  return (
    <SidebarGroup className="group-data-[collapsible=icon]:hidden">
      <SidebarGroupLabel>{title}</SidebarGroupLabel>
      <SidebarMenu>
        {projects.map(({ title, url, Icon }) => (
          <SidebarMenuItem key={title}>
            <SidebarMenuButton asChild>
              <a href={url}>
                <Icon />
                <span>{title}</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};
