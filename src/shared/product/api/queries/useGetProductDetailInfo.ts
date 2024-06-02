import {
  UseSuspenseQueryOptions,
  UseSuspenseQueryResult,
  useSuspenseQuery,
} from "@tanstack/react-query";
import { DEV_SERVER_HOST_URL } from "../../../constant/host";
import { ProductType } from "./useGetInfiniteProductList";
import { productQueryKey } from "../key";

interface GetProductDetailInfoRequest {
  productId: number;
}

type GetProductDetailInfoResponse = [
  ProductType
];

const getProductDetailInfo = async ({
  productId,
}: GetProductDetailInfoRequest): Promise<GetProductDetailInfoResponse> => {
  const response = await fetch(
    `${DEV_SERVER_HOST_URL}/productList?id=${productId}`
  );
  return response.json();
};

const useGetProductDetailInfo = (
  productId: number,
  options?: Omit<
    UseSuspenseQueryOptions<
      GetProductDetailInfoResponse,
      Error
    >,
    "queryKey" | "queryFn"
  >
): UseSuspenseQueryResult<
  GetProductDetailInfoResponse,
  Error
> => {
  return useSuspenseQuery<
    GetProductDetailInfoResponse,
    Error
  >({
    queryKey:
      productQueryKey.productDetail(
        productId
      ),
    queryFn: () =>
      getProductDetailInfo({
        productId,
      }),
    ...options,
  });
};

export default useGetProductDetailInfo;
