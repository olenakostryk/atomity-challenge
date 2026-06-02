export async function fetchClusters() {
  const response = await fetch(
    "https://dummyjson.com/products?limit=4"
  );

  const data = await response.json();

  return data.products;
}