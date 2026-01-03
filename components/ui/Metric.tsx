interface MetricProps {
  value: number | string;
  label: string;
}

export default function Metric({ value, label }: MetricProps) {
  return (
    <div>
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-xs text-gray-500">{label}</div>
    </div>
  );
}
