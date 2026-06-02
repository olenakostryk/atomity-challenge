type Cluster = {
  name: string;
  cost: number;
};

type MetricsTableProps = {
  clusters: Cluster[];
  activeCluster: string | null;
};

export default function MetricsTable({
  clusters,
  activeCluster,
}: MetricsTableProps) {
  return (
    <table className="mt-8 w-full">
      <thead>
        <tr className="border-b">
          <th className="py-3 text-left">
            Cluster
          </th>

          <th className="py-3 text-right">
            Cost
          </th>
        </tr>
      </thead>

      <tbody>
        {clusters.map((cluster) => (
          <tr
  key={cluster.name}
  className={`border-b ${
    activeCluster === cluster.name
      ? "bg-emerald-50"
      : ""
  }`}
>
            <td className="py-3">
              {cluster.name}
            </td>

            <td className="py-3 text-right">
              ${cluster.cost}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}