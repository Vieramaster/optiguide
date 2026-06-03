import Link from "next/link";

export const Links = ({
  children,
  href,
  ...props
}: React.ComponentProps<"a">) => {
  const path =
    !href
      ? "#"
      : href.startsWith("/") || href.startsWith("http")
        ? href
        : `/${href}`;

  return (
    <Link href={path} {...props} className="font-semibold underline">
      {children}
    </Link>
  );
};
