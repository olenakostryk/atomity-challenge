type Cluster = {
  name: string;
  cost: number;
};

type Props = {
  clusters: Cluster[];
  selectedCluster: Cluster | null;
};

export default function OptimizationInsight({
  clusters,
  selectedCluster,
}: Props) {
  if (!selectedCluster) return null;

  const average =
    clusters.reduce((sum, c) => sum + c.cost, 0) /
    clusters.length;

  const difference = Math.round(
    ((selectedCluster.cost - average) / average) * 100
  );

  const savings = Math.round(
    selectedCluster.cost * 0.15
  );

  return (
    <div className="mt-6 rounded-2xl border bg-white p-6 shadow-lg">
      <h3 className="text-lg font-semibold">
        Optimization Insight
      </h3>

      <p className="mt-4 text-gray-600">
        {selectedCluster.name} is{" "}
        {Math.abs(difference)}%
        {difference > 0 ? " above" : " below"} the
        average cluster cost.
      </p>

      <div className="mt-4 rounded-xl bg-emerald-50 p-4">
        <p className="text-sm text-gray-500">
          Potential Monthly Savings
        </p>

        <p className="text-xl font-bold text-emerald-600">
          ${savings.toLocaleString()}
        </p>
      </div>
    </div>
  );
}