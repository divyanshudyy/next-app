"use client";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathName = usePathname();
  const productId = pathName.split("/")[2];
  const reviewId = pathName.split("/")[4];
  return (
    <>
      <h1>
        Reviews {reviewId} Not Found For Product {productId}
      </h1>
      <p>Return to Home</p>
    </>
  );
}
