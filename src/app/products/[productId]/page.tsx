import { Metadata } from "next";

type Props = {
  params: Promise<{ productId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productId } = await params;
  return {
    title: `Product ${productId}`,
    description: "bcas",
  };
}

export default async function ProductDetails({ params }: Props) {
  const { productId } = await params;

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
