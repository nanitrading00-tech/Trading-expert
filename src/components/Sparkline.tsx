import { useId } from "react";

type Props = {
  points: number[];
  up: boolean;
  baseline?: number;
  className?: string;
};

const WIDTH = 300;
const HEIGHT = 100;

export default function Sparkline({ points, up, baseline, className }: Props) {
  const gradientId = `spark${useId().replace(/[^a-zA-Z0-9_-]/g, "")}`;
  if (points.length < 2) return <svg className={className} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} aria-hidden="true" />;

  const values = baseline === undefined ? points : [...points, baseline];
  const min = Math.min(...values);
  const range = Math.max(...values) - min || 1;
  const x = (i: number) => (i / (points.length - 1)) * WIDTH;
  const y = (value: number) => HEIGHT - 4 - ((value - min) / range) * (HEIGHT - 8);

  const line = points.map((value, i) => `${i ? "L" : "M"}${x(i).toFixed(1)},${y(value).toFixed(1)}`).join(" ");
  const color = up ? "var(--green-bright)" : "var(--red)";

  return (
    <svg className={className} viewBox={`0 0 ${WIDTH} ${HEIGHT}`} preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {baseline !== undefined && (
        <line
          x1="0"
          x2={WIDTH}
          y1={y(baseline)}
          y2={y(baseline)}
          stroke="rgba(255,255,255,0.25)"
          strokeDasharray="4 4"
          vectorEffect="non-scaling-stroke"
        />
      )}
      <path d={`${line} L${WIDTH},${HEIGHT} L0,${HEIGHT} Z`} fill={`url(#${gradientId})`} />
      <path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
