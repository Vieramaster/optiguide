import { describe, expect, it } from "vitest";

import { buildLensThicknessMmMessage } from "./lens-comparison-messages";

describe("buildLensThicknessMmMessage", () => {
  it("formatea el grosor con un decimal", () => {
    expect(buildLensThicknessMmMessage(3.456)).toBe(
      "El grosor del lente es de 3.5 mm",
    );
  });

  it("usa valor absoluto para el texto", () => {
    expect(buildLensThicknessMmMessage(-4.2)).toBe(
      "El grosor del lente es de 4.2 mm",
    );
  });
});
