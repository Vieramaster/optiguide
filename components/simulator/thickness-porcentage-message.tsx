interface ThicknessPorcentageMessageProps {
  isMax: boolean;
  percentage: string;
}

export const ThicknessPorcentageMessage = ({
  isMax,
  percentage,
}: ThicknessPorcentageMessageProps) => (
  <p>
    {percentage === "0"
      ? "Ambas lentes tienen el mismo grosor"
      : isMax
        ? `La lente seleccionada es un ${percentage}% más gruesa que su contraparte`
        : `La lente seleccionada es un ${percentage}% más delgada que su contraparte`}
  </p>
);
