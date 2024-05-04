const queryKey = "product";

export const productQueryKey = {
  all: () => [queryKey],
  productList: () => [
    queryKey,
    "product-list",
  ],
  productDetail: (id: number) => [
    queryKey,
    "product-detail",
    id,
  ],
};
