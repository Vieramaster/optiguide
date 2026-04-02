interface ThicknesseMessageProps {
  isMax: boolean;
  percentage: string;
  thickness: number;
}

export const ThicknessMessage = ({
  thickness,
  isMax,
  percentage,
}: ThicknesseMessageProps) => (
  
  <p>
    {percentage === "0"
      ? `Ambas lentes presentan el mismo grosor: ${thickness} mm.`
      : `Esta lente mide ${thickness} mm y resulta un ${percentage}% ${isMax ? "más gruesa" : "más delgada"} que su contraparte.`}
  </p>
);
