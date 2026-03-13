"use client";
//FRAMEWORKS
import Link from "next/link";
//COMPONENTS
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/";
import { ChevronRight } from "lucide-react";
//TYPES
import type { articleItem } from "../../types/sidebar";


interface ArticlesNavProps {
  name: string;
  arrayItems: articleItem[];
}
export const ArticlesNav = ({ name, arrayItems }: ArticlesNavProps) => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>{name}</SidebarGroupLabel>
      <SidebarMenu>
        {arrayItems.map(({ title, Icon, blocks }) => (
          <Collapsible
            key={title}
            asChild
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton tooltip={title}>
                  {Icon && <Icon />}
                  <span>{title}</span>
                  <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                </SidebarMenuButton>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <SidebarMenuSub>
                  {blocks?.map(({ url, title }) => (
                    <SidebarMenuSubItem key={title}>
                      <SidebarMenuSubButton asChild>
                        <Link href={url}>
                          <span>{title}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
