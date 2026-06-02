import { motion } from "framer-motion";
type Cluster = {
  name: string;
  cost: number;
};

type ChartProps = {
  clusters: Cluster[];
  activeCluster: string | null;
  setActiveCluster: (
    cluster: string | null
  ) => void;
};

export default function Chart({
  clusters,
  activeCluster,
  setActiveCluster,
}: ChartProps) {
  const maxCost = Math.max(
    ...clusters.map((c) => c.cost)
  );

  return (
    <div className="mt-16 flex h-80 items-end gap-6">
      {clusters.map((cluster) => {
        const barHeight =
  (cluster.cost / maxCost) * 220;

        return (
          <div
            key={cluster.name}
            className="flex flex-1 flex-col items-center"
          >
 <motion.div
 className={`
  w-full
  rounded-2xl
  shadow-lg
  transition-all
  duration-300
  ${
    activeCluster === cluster.name
      ? "bg-emerald-500 shadow-[0_0_30px_rgba(16,185,129,0.5)]"
      : "bg-emerald-300"
  }
`}
  onMouseEnter={() =>
    setActiveCluster(cluster.name)
  }
  onMouseLeave={() =>
    setActiveCluster(null)
  }
  initial={{
    height: 0,
    opacity: 0,
  }}
  animate={{
    height: `${barHeight}px`,
    opacity: 1,
    scale:
      activeCluster === cluster.name
        ? 1.08
        : 1,
  }}
  transition={{
    duration: 0.8,
    ease: "easeOut",
  }}
/>

            <span className="mt-3 text-sm">
              {cluster.name}
            </span>

            <span className="text-xs text-gray-500">
              ${cluster.cost}
            </span>
          </div>
        );
      })}
    </div>
  );
}