import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import Link from "next/link";
import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"


interface MarkdownProps {
  children: string;
}
export const MarkdownRenderer = ({ children }: MarkdownProps) => (
  <ReactMarkdown
    rehypePlugins={[rehypeRaw]}
    components={{
      h1: Title,
      h2: SubTitle,
      h3: BodyText,
      p: Text,
      a: Links,
      img: MDImage,
      li: LiList,
      ul: OlList,
      table: Table,
      thead: TableHeader,
      tr:TableRow,
      th:TableHead,
      tbody: TableBody,
      td:TableCell,

    }}
  >
    {children}
  </ReactMarkdown>
);

//COMPONENTS

//TEXTS

const Title = ({ ...props }: React.ComponentProps<"h1">) => (
  <h1 className="font-bold text-4xl" {...props} />
);
const SubTitle = ({ ...props }: React.ComponentProps<"h2">) => (
  <h2 className="font-semibold text-2xl" {...props} />
);
const BodyText = ({ ...props }: React.ComponentProps<"h3">) => (
  <h3 className="font-semibold text-lg" {...props} />
);
const Text = ({ ...props }: React.ComponentProps<"p">) => (
  <p className="" {...props} />
);

//LIST
const LiList = ({ ...props }: React.ComponentProps<"li">) => (
  <li className="font-semi-bold  italic my-2" {...props} />
);
const OlList = ({ ...props }: React.ComponentProps<"ul">) => (
  <ul className="list-disc pl-10 -mt-4 " {...props} />
);

const Links = ({ children, href, ...props }: React.ComponentProps<"a">) => {
  let path = href ?? "#";

  // si no empieza con / o http → agregar /
  if (!path.startsWith("/") && !path.startsWith("http")) {
    path = "/" + path;
  }

  return (
    <Link href={path} {...props} className="font-semibold underline">
      {children}
    </Link>
  );
};

const MDImage = ({ ...props }: React.ComponentProps<"img">) => {
  // Only allow string src, as required by next/image
  // Destructure only what Next/Image expects, and provide fallback for alt and required sizing.
  const {
    src,
    alt = "",
    width,
    height,
    ...rest
  } = props as React.ComponentProps<"img">;

  // Next/Image requires src to be string, not undefined, not Blob.
  if (typeof src !== "string" || !src) {
    // If no src available, render nothing (or consider a placeholder).
    return null;
  }

  // Next/Image prefers width/height for static import, but these may be missing in Markdown.
  // You may want to set default width/height or 'fill' as appropriate for your layout.
  return (
    <Image
      src={src}
      alt={alt}
      width={width ? Number(width) : 600}
      height={height ? Number(height) : 400}
      {...rest}
      className="mx-auto my-5 rounded-xl w-full lg:w-1/2"
    />
  );
};

