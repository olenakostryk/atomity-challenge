import { useQuery } from "@tanstack/react-query";
import { fetchClusters } from "../lib/fetchClusters";;

export function useClusters() {
  return useQuery({
    queryKey: ["clusters"],
    queryFn: fetchClusters,
    staleTime: 1000 * 60 * 5,
  });
}