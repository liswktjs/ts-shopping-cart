import useGetInfiniteProductList from "../shared/product/api/queries/useGetInfiniteProductList";
import { ObserverContainer } from "../shared/components";
import ShoppingProductList from "../feature/productList/ShoppingProductList";

const HomePage = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
  } = useGetInfiniteProductList();

  const handleTriggerNextPage = () => {
    if (hasNextPage) {
      fetchNextPage();
    }
  };

  return (
    <>
      <ShoppingProductList
        productList={
          data?.pages
            .map((page) => page.data)
            .flat() ?? []
        }
      />
      <ObserverContainer
        triggerAction={
          handleTriggerNextPage
        }
      />
    </>
  );
};

export default HomePage;
