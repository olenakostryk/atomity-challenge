"use client";

import { useState } from "react";
import Chart from "./Chart";
import MetricsTable from "./MetricsTable";
import { useClusters } from "../hooks/useClusters";
import DetailCard from "./DetailCard";
import LoadingState from "./LoadingState";
import { motion } from "framer-motion";
import OptimizationInsight from "./OptimizationInsight";


type Cluster = {
  name: string;
  cost: number;
};


export default function CostExplorer() {
  const { data, isLoading, error } = useClusters();

const [activeCluster, setActiveCluster] =
  useState<string | null>(null);


  if (isLoading) {
  return <LoadingState />;
}

  if (error) {
    return <div>Error loading data</div>;
  }

  const clusters: Cluster[] =
    data?.map((product: any) => ({
      name: product.title.slice(0, 10),
      cost: Math.round(product.price * 350),
    })) || [];

      const selectedCluster =
  clusters.find(
    (cluster) =>
      cluster.name === activeCluster
  ) || null;


  return (
    <section className="min-h-screen px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-4 text-green-500">
          Cloud Cost Intelligence
        </p>

        <h1 className="mb-4 text-5xl font-bold">
          Track infrastructure spending
          across clusters
        </h1>

        <p className="max-w-2xl text-gray-500">
          Monitor cloud resources and identify
          optimization opportunities.
        </p>

<motion.div
  className="grid gap-8 lg:grid-cols-3"
  initial={{
    opacity: 0,
    y: 50,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
  }}
  transition={{
    duration: 0.8,
  }}
>
  <div className="lg:col-span-2">
    <Chart
      clusters={clusters}
      activeCluster={activeCluster}
      setActiveCluster={setActiveCluster}
    />

    <MetricsTable
      clusters={clusters}
      activeCluster={activeCluster}
    />
  </div>

 <div>
  <DetailCard
    cluster={selectedCluster}
  />

  <OptimizationInsight
    clusters={clusters}
    selectedCluster={selectedCluster}
  />
</div>
</motion.div>

         
        </div>
      
    </section>
  );
}