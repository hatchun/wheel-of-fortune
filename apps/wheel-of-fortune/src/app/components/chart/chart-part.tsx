export function ChartPart({
  colorIdentifier,
  percentage,
  offset = 0,
}: {
  name: string,
  colorIdentifier: string;
  percentage: number;
  offset?: number;
}) {
  const rotation = offset - 90;
  return (
    <circle
      r="4.95"
      cx="10"
      cy="10"
      fill="transparent"
      stroke={colorIdentifier}
      strokeWidth="9.9"
      strokeDasharray={`${percentage * 0.311} 50`}
      transform={`rotate(${rotation},10,10)`}
    />
  );
}
