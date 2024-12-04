import CustomersTable from "@/app/ui/customers/table";

const fetchProducts = async () => {
  const res = await fetch('https://api.escuelajs.co/api/v1/products');
  if (!res.ok) throw new Error('Failed to fetch products');
  return res.json();
};

export default async function CustomersPage() {
  return <div><CustomersTable products={await fetchProducts()} /></div>;
}
