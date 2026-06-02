type Props = {
  cluster: {
    name: string;
    cost: number;
  } | null;
};

export default function DetailCard({ cluster }: Props) {
  if (!cluster) return null;

  return (
   <div className="space-y-4">
  <div>
    <p className="text-gray-500">Total Cost</p>
    <p className="text-3xl font-bold">
      ${cluster.cost}
    </p>
  </div>

  <div>
    <p className="text-gray-500">Efficiency</p>
    <p className="font-semibold text-emerald-500">
      82%
    </p>
  </div>

  <div>
    <p className="text-gray-500">Potential Savings</p>
    <p className="font-semibold">
      ${Math.round(cluster.cost * 0.15)}
    </p>
  </div>
</div>
  );
}