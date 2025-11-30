import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from "next/image";
import rehypeRaw from "rehype-raw";
type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "articles", `${slug}.md`);
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <section className="px-10 pt-5 pb-20 flex flex-col gap-8">
      <ReactMarkdown
        rehypePlugins={[rehypeRaw]}
        components={{
          h1: Title,
          h2: SubTitle,
          p: Text,
          a: Links,
          img: MDImage,
          li: LiList,
          ul: OlList,
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
}

const LiList = ({ ...props }: React.ComponentProps<"li">) => (
  <li className="font-semi-bold  italic my-2" {...props} />
);
const OlList = ({ ...props }: React.ComponentProps<"ul">) => (
  <ul className="list-disc pl-10 " {...props} />
);

const Title = ({ ...props }: React.ComponentProps<"h1">) => (
  <h1 className="font-bold text-4xl" {...props} />
);

const SubTitle = ({ ...props }: React.ComponentProps<"h2">) => (
  <h2 className="font-semibold text-2xl" {...props} />
);

const Text = ({ ...props }: React.ComponentProps<"p">) => (
  <p className="" {...props} />
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
      className="mx-auto my-5 rounded-xl"
      
    />
  );
};
