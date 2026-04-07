import { createElement, type ReactNode } from "react"
import { CatalogRow } from "../logic/catalog-row"

import { Check } from "lucide-react"

export const formatCatalogCellValue = (value: CatalogRow[keyof CatalogRow]): ReactNode => {
    if (value === undefined) return "—"
    if (typeof value === "boolean") return value ? createElement(Check, { className: "mx-auto" }) : "—"
    if (typeof value === "string" || typeof value === "number") return value
    return "—"
}