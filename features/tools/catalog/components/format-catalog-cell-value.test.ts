import { describe, expect, it } from "vitest";

import { formatCatalogCellAccessibleName } from "./format-catalog-cell-value";

describe("formatCatalogCellAccessibleName", () => {
  it("usa la etiqueta para valores de texto", () => {
    expect(formatCatalogCellAccessibleName("stock", "rango")).toBe("rango");
  });

  it("describe presencia booleana positiva", () => {
    expect(formatCatalogCellAccessibleName(true, "antireflejo")).toBe(
      "tiene antireflejo",
    );
  });

  it("describe ausencia booleana", () => {
    expect(formatCatalogCellAccessibleName(false, "antireflejo")).toBe(
      "no tiene antireflejo",
    );
  });
});
