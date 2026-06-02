import { motion } from "framer-motion";

type Props = {
  cluster: {
    name: string;
    cost: number;
  } | null;
};

export default function DetailCard({ cluster }: Props) {
  if (!cluster) {
    return (
      <div className="rounded-2xl border p-6 shadow-lg">
        Hover a cluster
      </div>
    );
  }

  const savings = Math.round(cluster.cost * 0.15);
  const optimizedCost = cluster.cost - savings;

  return (
    <motion.div
      key={cluster.name}
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="
        rounded-2xl
        border
        bg-white
        p-6
        shadow-xl
        sticky
        top-8
      "
    >
      <h3 className="text-xl font-semibold">
        {cluster.name}
      </h3>

      <div className="mt-6 space-y-4">
        <div>
          <p className="text-sm text-gray-500">
            Current Cost
          </p>

          <p className="text-3xl font-bold">
            ${cluster.cost.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Potential Savings
          </p>

          <p className="text-xl font-semibold text-emerald-500">
            ${savings.toLocaleString()}
          </p>
        </div>

        <div>
          <p className="text-sm text-gray-500">
            Optimized Cost
          </p>

          <p className="text-xl font-semibold">
            ${optimizedCost.toLocaleString()}
          </p>
        </div>
      </div>
    </motion.div>
  );
}