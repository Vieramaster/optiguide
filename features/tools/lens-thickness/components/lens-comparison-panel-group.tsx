import type { LensComparisonPanelView } from "../types/lens-comparison-view";

import { LensComparisonPanel } from "./lens-comparison-panel";

type LensComparisonPanelGroupProps = {
  panels: LensComparisonPanelView[];
};

export const LensComparisonPanelGroup = ({
  panels,
}: LensComparisonPanelGroupProps) => (
  <div className="mt-5 flex w-full justify-center lg:justify-evenly">
    {panels.map((panel) => (
      <LensComparisonPanel
        key={panel.lensComparisonKey}
        isVisible={panel.isVisible}
        refractiveIndexLabel={panel.refractiveIndexLabel}
        indexValue={panel.indexValue}
        onRefractiveIndexChange={panel.onRefractiveIndexChange}
        estimatedThickness={panel.estimatedThickness}
        isPositiveLens={panel.isPositiveLens}
        thicknessMessage={panel.thicknessMessage}
      />
    ))}
  </div>
);
