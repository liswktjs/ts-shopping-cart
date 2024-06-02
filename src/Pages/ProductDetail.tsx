import { Suspense } from "react";
import ProductDetailContent from "../feature/productDetail/ProductDetailContent";

const ProductDetail = () => {
  return (
    <Suspense
      fallback={<div>fallback</div>}
    >
      <ProductDetailContent />
    </Suspense>
  );
};

export default ProductDetail;
