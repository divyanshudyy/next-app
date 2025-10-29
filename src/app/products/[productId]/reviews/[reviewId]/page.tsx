import { notFound } from "next/navigation";

export default async function productReviews({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const reviewId = params.reviewId;
  const productId = params.productId;
  if (parseInt(reviewId) > 100) {
    return notFound();
  }
  return (
    <>
      <h1>Product Name {productId}</h1>
      <h2>Product Reviews {reviewId}</h2>
      <ul>
        <li>name</li>
        <li>Product Review</li>
      </ul>
    </>
  );
}
