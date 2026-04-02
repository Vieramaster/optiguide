//COMPONENTS
import { SectionArticle } from "./section-article";
import { Skeleton } from "@/components/ui";
//DATA
import { SKELETON_CONFIG } from "../data/skeleton-config";

const lala = ["h1", "text", "h2", "text", "text"] as const

export const ArticleSkeleton = () => (
  <SectionArticle>
    {lala.map((item, index) => <Skeleton style={SKELETON_CONFIG[item]} key={index} />)}
  </SectionArticle>
);

