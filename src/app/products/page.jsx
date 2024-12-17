import { getProducts } from "@/services/ProductsServices";

export default async function Page() {
  const products = await getProducts();

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.id} - {product.title} - {product.price}</li>
        ))}
      </ul>
    </div>
  );
}