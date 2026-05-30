import { Title } from "@/shared/components/ui";

import { LensThicknessTitle } from "../constants/title";

export const LensThicknessSimulatorHeader = () => (
  <header className="mx-auto flex max-w-2xl flex-col gap-3 text-center">
    <Title>{LensThicknessTitle.title}</Title>
    <p className="italic">
      {LensThicknessTitle.text}{" "}
      <span className="font-semibold not-italic">
        {LensThicknessTitle.buttonText}
      </span>
      .
    </p>
    <p className="text-sm text-muted-foreground">
      {LensThicknessTitle.comparisonIntro}
    </p>
  </header>
);
