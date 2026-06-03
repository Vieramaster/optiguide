import { describe, expect, it } from "vitest";

import type { LensObjectResolved } from "../types/companies/companies";
import type { LensTreatment } from "../types/domain/technologies/lens-treatments";
import type { TableOptions } from "../types/ui/table-options";

import { filterCatalogByColumns } from "./filter-catalog-by-columns";

const antiReflexTreatment: LensTreatment = {
  treatmentItemId: "ar",
  treatmentName: "Antireflejo",
  treatmentBrand: "Essilor",
  treatmentFeatures: ["antiReflex"],
};

const buildLensItem = (
  key: string,
  treatment?: LensTreatment[],
): LensObjectResolved => ({
  key,
  lens: {
    lensItemId: key,
    category: "Monofocal test",
    lens: "monofocal",
    company: "Essilor",
    range: "stock",
    diam: [65],
    lensMaterial: {
      name: "CR-39",
      type: "resina orgánica estándar",
      index: 1.5,
    },
    lensForm: "esf",
    surfacing: true,
  },
  treatment,
});

const filterColumns = [
  { label: "antireflejo", value: "antiReflex" },
] satisfies TableOptions[];

describe("filterCatalogByColumns", () => {
  it("devuelve el catálogo completo sin columnas activas", () => {
    const catalog = [
      buildLensItem("a", [antiReflexTreatment]),
      buildLensItem("b"),
    ];

    const filtered = filterCatalogByColumns(catalog, filterColumns, {});

    expect(filtered).toHaveLength(2);
  });

  it("filtra por característica activa en la fila", () => {
    const catalog = [
      buildLensItem("with-ar", [antiReflexTreatment]),
      buildLensItem("without-ar"),
    ];

    const filtered = filterCatalogByColumns(catalog, filterColumns, {
      antiReflex: true,
    });

    expect(filtered).toHaveLength(1);
    expect(filtered[0]?.key).toBe("with-ar");
  });

  it("no filtra si no hay columnas configuradas", () => {
    const catalog = [buildLensItem("only")];

    const filtered = filterCatalogByColumns(catalog, [], { antiReflex: true });

    expect(filtered).toEqual(catalog);
  });
});
