import Link from "next/link";

export default function productList() {
  const productId = 100;
  return (
    <>
      <h1>Product List Page</h1>
      <Link href={"/"}>Home</Link>
      <ul>
        <li>
          <Link href={`/products/1`}>product 1</Link>
        </li>
        <li>
          <Link href={`/products/2`}>product 2</Link>
        </li>
        <li>
          <Link href={`/products/3`} replace>
            product 3
          </Link>
        </li>
        <li>
          <Link href={`/products/${productId}`}>product {productId}</Link>
        </li>
      </ul>
    </>
  );
}
