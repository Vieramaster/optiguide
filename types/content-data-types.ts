import { JSX } from "react";

export type BlockComponent<P> = (props: P & { key?: React.Key }) => JSX.Element;

export type BasicData = {
  text: string;
};
export type BlockTitleType = BasicData & {
  type: "title";
};

export type BlockSubtitleType = BasicData & {
  type: "subtitle";
  text: string;
};

export type BlockParagraphType = BasicData & {
  type: "paragraph";
};

export type BlockImageType = {
  type: "image";
  url: string;
  alt: string;
};

export type BlockListType = {
  type: "ol";
  items: string[];
};

export type ContentFormatType =
  | "title"
  | "subtitle"
  | "paragraph"
  | "image"
  | "ol";

export type ContentType = {
  title: string;
  slug: string;
  categories: string[];
  blocks: BlocksItemType[];
};

export type BlocksItemType =
  | BlockListType
  | BlockImageType
  | BlockParagraphType
  | BlockSubtitleType
  | BlockTitleType;
