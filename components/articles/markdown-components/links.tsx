import Link from "next/link";
import { normalizePath } from "@/lib/utils/path-normalizer";

export const Links = ({ children, href, ...props }: React.ComponentProps<"a">) => {
  const path = normalizePath(href);

  return (
    <Link href={path} {...props} className="font-semibold underline">
      {children}
    </Link>
  );
};
