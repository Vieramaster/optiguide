//LIBRARY
import ReactMarkdown from "react-markdown";
//COMPONENTS
import { LiList, Title, SubTitle, BodyText, Links, Text, OlList } from "@/components/ui/typography";
import { TableRow, TableHeader, Table, TableHead, TableBody, TableCell } from "@/components/ui/";
import { ImageArticle } from "./image-article";

interface MarkdownProps {
  children: string;
}

export const MarkdownRenderer = ({ children }: MarkdownProps) => (
  <ReactMarkdown
    // Importante: no usamos HTML crudo por seguridad (evitamos XSS).
    // Si en el futuro se necesitara HTML, habría que pasar el contenido
    // por una capa de sanitización explícita antes de renderizarlo.
    components={{
      h1: Title,
      h2: SubTitle,
      h3: BodyText,
      p: Text,
      a: Links,
      img: ImageArticle,
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

