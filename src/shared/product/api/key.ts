const queryKey = "product";

export const productQueryKey = {
  all: () => [queryKey],
  productList: () => [
    queryKey,
    "product-list",
  ],
};
