import { Check, Minus } from "lucide-react";

import { CatalogRow } from "../types/ui/table-options";

interface Props {
  value: CatalogRow[keyof CatalogRow];
  label: string;
}

export const FormatCatalogCellValue = ({ value, label }: Props) => {
  if (typeof value === "boolean") {
    const accessibleName = formatCatalogCellAccessibleName(value, label);

    return (
      <SpanComponent accessibleName={accessibleName}>
        {value ? (
          <Check aria-hidden className="size-4" />
        ) : (
          <Minus aria-hidden className="size-4" />
        )}
      </SpanComponent>
    );
  }
  if (typeof value === "string" || typeof value === "number") {
    const accessibleName = formatCatalogCellAccessibleName(value, label);

    return <SpanComponent accessibleName={accessibleName}>{value}</SpanComponent>;
  }

  return <UndefinedComponent />;
};

interface SpanComponentProps {
  accessibleName: string;
  children: React.ReactNode;
}

const SpanComponent = ({ accessibleName, children }: SpanComponentProps) => (
  <span
    aria-label={accessibleName}
    className="flex w-full items-center justify-center"
  >
    {children}
  </span>
);

const UndefinedComponent = () => (
  <span aria-label="No contiene beneficios">
    <Minus aria-hidden className="size-4" />
  </span>
);

export const formatCatalogCellAccessibleName = (
  value: unknown,
  label: string,
) => {
  if (typeof value === "string") {
    return label;
  }

  return value ? `tiene ${label}` : `no tiene ${label}`;
};
