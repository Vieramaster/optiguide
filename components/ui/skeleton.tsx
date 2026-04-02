
export const Skeleton = ({ ...props }: React.ComponentProps<"div">) => 
<div
  data-slot="skeleton"
  className="bg-accent animate-pulse rounded-md"
  {...props}
/>