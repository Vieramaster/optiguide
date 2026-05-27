"use client";

import type { ToolItem } from "../types/sidebar";

import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";

interface ProjectsNavProps {
  title: string;
  projects: ToolItem[];
}
export const ProjectsNav = ({ projects, title }: ProjectsNavProps) => {
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
