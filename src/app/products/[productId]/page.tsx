export default function ProductDetailRoute({
  params,
}: {
  params: { productId: string };
}) {
  return <p>Product details {params.productId}</p>;
}
