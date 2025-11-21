import { redirect } from "next/navigation";
import { use } from "react";

export default function ProductReviews({
  params,
}: {
  params: Promise<{ productId: string; reviewId: string }>;
}) {
  // ✅ Unwrap the promise
  const { productId, reviewId } = use(params);

  if (parseInt(reviewId) > 100) {
    redirect("/");
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
