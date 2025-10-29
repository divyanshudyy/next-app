export default async function productDetails({
  params,
}: {
  params: Promise<{ productId: string }>;
}) {
  const productId = (await params).productId;
  return (
    <>
      <h1>Product Details {productId}</h1>
      <ul>
        <li>Product name</li>
        <li>Product price</li>
        <li>Product description</li>
      </ul>
    </>
  );
}
