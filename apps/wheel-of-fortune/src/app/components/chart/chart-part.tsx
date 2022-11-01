export function ChartPart({
  bgColor,
  percentage,
  offset = 0,
}: {
  name: string,
  bgColor: string;
  percentage: number;
  offset?: number;
}) {
  const rotation = offset - 90;
  return (
    <circle
      r="5"
      cx="10"
      cy="10"
      fill="transparent"
      stroke={bgColor}
      strokeWidth="10"
      strokeDasharray={`${percentage * 0.3142} 50`}
      transform={`rotate(${rotation},10,10)`}
    />
  );
}
