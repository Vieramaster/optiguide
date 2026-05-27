import { Skeleton } from "@/shared/components/ui";

export const PageSkeleton = () => (
  <div className="flex flex-col gap-4 p-10 max-w-4xl mx-auto w-full">
    <Skeleton className="h-10 w-2/3" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-full" />
    <Skeleton className="h-4 w-3/4" />
  </div>
);
