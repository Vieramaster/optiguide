//LIBRARY
import ReactMarkdown from "react-markdown";
//COMPONENTS
import { LiList, Title, SubTitle, BodyText, Links, Text, OlList, MDImage } from "./markdown-components";
import { TableRow, TableHeader, Table ,  TableHead, TableBody, TableCell} from "@/components/ui/table";


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

