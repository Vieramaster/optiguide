import { CatalogRow } from "../logic/catalog-row";
import { Check, Minus } from "lucide-react";

type Props = {
  value: CatalogRow[keyof CatalogRow];
  label: string;
};

export const FormatCatalogCellValue = ({ value, label }: Props) => {
  if (value === undefined) {
    return (
      <span title={label}>
        <Minus />
      </span>
    );
  }

  if (typeof value === "boolean") {
    return (
      <span
        title={value ? `tiene ${label}` : `no tiene ${label}`}
        className="flex justify-center w-full items-center  "
      >
        {value ? <Check /> : <Minus />}
      </span>
    );
  }

  if (typeof value === "string" || typeof value === "number") {
    return <span title={label}>{value}</span>;
  }

  return null;
};
