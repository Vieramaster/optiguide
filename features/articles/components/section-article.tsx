import { ReactNode } from "react";

interface SectionArticleProps {
    children: ReactNode;
}

export const SectionArticle = ({ children }: SectionArticleProps) => (
    <article className="w-full px-10 pt-5 pb-20 flex flex-col gap-6 mx-auto xl:px-28">
        {children}
    </article>
);