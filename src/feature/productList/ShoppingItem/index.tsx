import * as stylex from "@stylexjs/stylex";
import { Icon } from "@iconify/react";
import { colors } from "../../../styles/token.stylex";
import { Text } from "../../../shared/components";

const style = stylex.create({
  container: {
    borderWidth: "1px",
    borderColor: colors.zinc_400,
    borderRadius: "4px",
    borderStyle: "solid",
    padding: "4px",
    width: "300px",
    height: "fit-content",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    cursor: {
      default: null,
      ":hover": "pointer",
    },
  },
  productImgWrapper: {
    width: "280px",
    overflow: "hidden",
    borderRadius: "4px",
  },
  productImg: {
    width: "280px",
    height: "280px",
    objectFit: "cover",
  },
  productName: {
    maxWidth: "200px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  infoWrapper: {
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: "10px",
    paddingVertical: "2px",
  },
  priceWrapper: {
    display: "flex",
    alignItems: "flex-end",
  },
  addButton: {
    opacity: {
      default: 1,
      ":hover": 0.7,
    },
  },
});

interface Props {
  productName: string;
  price: number;
  productImg: string;
  handleAddCartClick: () => void;
  handleShoppingItemClick: () => void;
}

const ShoppingItem = ({
  productName,
  price,
  productImg,
  handleAddCartClick,
  handleShoppingItemClick,
}: Props) => {
  return (
    <div
      {...stylex.props(style.container)}
      onClick={handleShoppingItemClick}
    >
      <div
        {...stylex.props(
          style.productImgWrapper
        )}
      >
        <img
          src={productImg}
          alt="상품이미지"
          {...stylex.props(
            style.productImg
          )}
        />
      </div>
      <div
        {...stylex.props(
          style.infoWrapper
        )}
      >
        <div>
          <Text
            variant="black_500_lg"
            style={style.productName}
          >
            {productName}
          </Text>
          <div
            {...stylex.props(
              style.priceWrapper
            )}
          >
            <Text variant="black_500_xl">
              {price.toLocaleString(
                "ko-KR"
              )}
            </Text>
            <Text variant="black_500_md">
              원
            </Text>
          </div>
        </div>
        <button
          type="button"
          {...stylex.props(
            style.addButton
          )}
          onClick={(e) => {
            e.stopPropagation();
            handleAddCartClick();
          }}
        >
          <Icon
            icon="solar:cart-large-4-broken"
            fontSize={30}
            color={colors.black}
          />
        </button>
      </div>
    </div>
  );
};

export default ShoppingItem;
