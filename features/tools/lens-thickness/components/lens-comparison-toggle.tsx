import { Button } from "@/shared/components/ui";

import type { LensComparisonKey } from "../types/lens-comparison";
import type { LensComparisonToggleItemView } from "../types/lens-comparison-view";

type LensComparisonToggleProps = {
  items: LensComparisonToggleItemView[];
  onSelectLens: (lensComparisonKey: LensComparisonKey) => void;
};

export const LensComparisonToggle = ({
  items,
  onSelectLens,
}: LensComparisonToggleProps) => (
  <div
    className="flex justify-center gap-6 xl:hidden"
    role="group"
    aria-label="Seleccionar lente para comparar"
  >
    {items.map((item) => (
      <Button
        key={item.lensComparisonKey}
        type="button"
        variant={item.isActive ? "default" : "outline"}
        aria-pressed={item.isActive}
        aria-label={item.ariaLabel}
        onClick={() => onSelectLens(item.lensComparisonKey)}
      >
        {item.buttonLabel}
      </Button>
    ))}
  </div>
);
