interface MessageThicknessDifferenceProps {
  currentSide: "A" | "B";
  percentageDifferenceA: number;
  percentageDifferenceB: number;
}

export const MessageThicknessDifference = ({
  currentSide,
  percentageDifferenceA,
  percentageDifferenceB,
}: MessageThicknessDifferenceProps) => {
  if (percentageDifferenceA === percentageDifferenceB) {
    return <p>el mismo grosor que su contraparte</p>;
  }

  const isAThicker = percentageDifferenceA > percentageDifferenceB;
  const thickerSide = isAThicker ? "A" : "B";
  const diff = isAThicker ? percentageDifferenceA : percentageDifferenceB;

  return currentSide === thickerSide
    ? <p>un {diff}% más grueso que su contraparte</p>
    : <p>un {diff}% más delgado que su contraparte</p>;
};
