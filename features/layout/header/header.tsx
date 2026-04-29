"use client";
import { usePathname } from "next/navigation";

import { stringFormatters } from "@/shared/utils";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator,
} from "@/components/ui/";

import { SidebarTrigger } from "../sidebar/components";

import { SwitchTheme } from "./components/switch-theme";

export const Header = () => {
  const parts = stringFormatters(usePathname());
  return (
    <header className="flex justify-between px-10 h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 ">
      <div className="flex items-center gap-2 ">
        <SidebarTrigger className="-ml-1 md:hidden" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList className="lg:text-lg">
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbPage>{parts[0] ?? "Home"} </BreadcrumbPage>
            </BreadcrumbItem>
            {parts[1] && (
              <>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  {<BreadcrumbPage>{parts[1] ?? ""}</BreadcrumbPage>}
                </BreadcrumbItem>
              </>
            )}
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <SwitchTheme />
    </header>
  );
};
