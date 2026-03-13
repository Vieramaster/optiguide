//FRAMEWORKS
"use client";
import { usePathname } from "next/navigation";
//UTILS
import { stringFormatters } from "./utils/stringFormatters";
//COMPONENTS
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Separator
} from "@/components/ui/";
import { SidebarTrigger } from "../../sidebar/components/sidebar";


export const Header = () => {
  const pathname = usePathname();
  const parts = stringFormatters(pathname)
  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1 md:hidden" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem className="hidden md:block">
              <BreadcrumbLink href="#">{parts[0] ?? "Home"} </BreadcrumbLink>
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
    </header>
  );
};
