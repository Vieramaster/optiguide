import { Check, Minus } from "lucide-react";

import { CatalogRow } from "../types/ui/table-options";

interface Props {
  value: CatalogRow[keyof CatalogRow];
  label: string;
}

export const FormatCatalogCellValue = ({ value, label }: Props) => {
  if (typeof value === "boolean") {
    return (
      <SpanComponent {...{ value, label }}>
        {value ? <Check /> : <Minus />}
      </SpanComponent>
    );
  }
  if (typeof value === "string" || typeof value === "number")
    return <SpanComponent {...{ value, label }}>value</SpanComponent>;

  return <UndefinedComponent />;
};

interface SpanComponentProps extends Props {
  children: React.ReactNode;
}

const SpanComponent = ({ value, label, children }: SpanComponentProps) => {
  return (
    <span
      title={value ? `tiene ${label}` : `no tiene ${label}`}
      className="flex justify-center w-full items-center"
    >
      {children}
    </span>
  );
};
const UndefinedComponent = () => (
  <span title="No contiene beneficios">
    <Minus />
  </span>
);
