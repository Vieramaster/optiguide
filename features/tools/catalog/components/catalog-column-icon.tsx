"use client";

import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/shared/components/ui/tooltip";

interface CatalogColumnIconProps {
  label: string;
  Icon: LucideIcon;
  className?: string;
}

export const CatalogColumnIcon = ({
  label,
  Icon,
  className,
}: CatalogColumnIconProps) => (
  <Tooltip>
    <TooltipTrigger asChild>
      <span
        className={cn("inline-flex cursor-help", className)}
        tabIndex={0}
        aria-label={label}
      >
        <Icon aria-hidden />
      </span>
    </TooltipTrigger>
    <TooltipContent sideOffset={4}>{label}</TooltipContent>
  </Tooltip>
);
