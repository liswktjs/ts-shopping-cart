import * as stylex from "@stylexjs/stylex";
import type { ProductType } from "../../shared/product/api/queries/useGetInfiniteProductList";
import ShoppingItem from "./ShoppingItem";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../Router/path";

const style = stylex.create({
  container: {
    display: "grid",
    paddingVertical: "50px",
    paddingHorizontal: "50px",
    gap: "50px",
    gridTemplateColumns: "1fr 1fr 1fr",
    height: "fit-content",
  },
});

interface Props {
  productList: ProductType[];
}

const ShoppingProductList = ({
  productList,
}: Props) => {
  const navigate = useNavigate();

  const handleShoppingItemClick = (
    id: number
  ) => {
    navigate(
      `${PATH.productDetail}/${id}`
    );
  };

  return (
    <section
      {...stylex.props(style.container)}
    >
      {productList.map(
        ({
          name,
          price,
          imgUrl,
          id,
        }) => (
          <ShoppingItem
            key={id}
            productImg={imgUrl}
            productName={name}
            price={price}
            handleAddCartClick={() => {}}
            handleShoppingItemClick={() =>
              handleShoppingItemClick(
                id
              )
            }
          />
        )
      )}
    </section>
  );
};

export default ShoppingProductList;
