import { useInfiniteQuery } from "@tanstack/react-query";
import { DEV_SERVER_HOST_URL } from "../../../constant/host";
import { productQueryKey } from "../key";

export interface ProductType {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
  description: string;
}

interface GetInfiniteProductListResponse {
  first: number;
  prev: null | number;
  next: null | number;
  last: number;
  pages: number;
  items: number;
  data: ProductType[];
}

const getInfiniteProductList = async (
  cursor: number
): Promise<GetInfiniteProductListResponse> => {
  const res = await fetch(
    `${DEV_SERVER_HOST_URL}/productList?_page=${cursor}&_per_page=10`
  );
  return res.json();
};

const useGetInfiniteProductList =
  () => {
    return useInfiniteQuery({
      queryKey:
        productQueryKey.productList(),
      queryFn: ({ pageParam }) =>
        getInfiniteProductList(
          pageParam
        ),
      getNextPageParam: (
        lastPage: GetInfiniteProductListResponse
      ) => lastPage.next ?? undefined,
      initialPageParam: 1,
    });
  };

export default useGetInfiniteProductList;
