import { describe, expect, it } from "vitest";

import {
  getThicknessDifferenceDisplay,
  getThicknessDifferencePercent,
} from "./compare-lens-thickness-percent";

describe("getThicknessDifferencePercent", () => {
  it("devuelve null si el espesor máximo es 0", () => {
    expect(getThicknessDifferencePercent(0, 0)).toBeNull();
  });

  it("calcula el porcentaje respecto a la lente más gruesa", () => {
    expect(getThicknessDifferencePercent(10, 5)).toBe(50);
  });

  it("devuelve 0 cuando los espesores son iguales", () => {
    expect(getThicknessDifferencePercent(4.2, 4.2)).toBe(0);
  });
});

describe("getThicknessDifferenceDisplay", () => {
  it("oculta el mensaje si no hay espesor", () => {
    const display = getThicknessDifferenceDisplay(0, 0);

    expect(display).toEqual({ kind: "hidden" });
  });

  it("indica igualdad sin diferencia", () => {
    const display = getThicknessDifferenceDisplay(3, 3);

    expect(display).toEqual({ kind: "equal" });
  });

  it("expone el porcentaje cuando hay diferencia", () => {
    const display = getThicknessDifferenceDisplay(8, 4);

    expect(display).toEqual({ kind: "percent", thicknessDifferencePercent: 50 });
  });
});
