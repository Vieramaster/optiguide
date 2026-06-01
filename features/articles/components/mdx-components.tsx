import type { MDXComponents } from "mdx/types";

import {
  BodyText,
  ListItem,
  Links,
  UnorderedList,
  SubTitle,
  Text,
  Title,
} from "@/shared/components/ui";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import { ImageArticle } from "./image-article";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: Title,
    h2: SubTitle,
    h3: BodyText,
    p: Text,
    a: Links,
    img: ImageArticle,
    li: ListItem,
    ul: UnorderedList,
    table: Table,
    thead: TableHeader,
    tr: TableRow,
    th: TableHead,
    tbody: TableBody,
    td: TableCell,
  };
}
