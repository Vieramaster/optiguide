import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Title } from "./markdown-components/title";
import { SubTitle } from "./markdown-components/subtitle";
import { BodyText } from "./markdown-components/body-text";
import { Text } from "./markdown-components/text";
import { Links } from "./markdown-components/links";
import { MDImage } from "./markdown-components/md-image";
import { LiList } from "./markdown-components/li-list";
import { OlList } from "./markdown-components/ol-list";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
      tr: TableRow,
      th: TableHead,
      tbody: TableBody,
      td: TableCell,
    }}
  >
    {children}
  </ReactMarkdown>
);
