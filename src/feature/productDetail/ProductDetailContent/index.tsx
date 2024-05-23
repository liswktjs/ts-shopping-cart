import { useParams } from "react-router-dom";
import * as stylex from "@stylexjs/stylex";
import useGetProductDetailInfo from "../../../shared/product/api/queries/useGetProductDetailInfo";
import { colors } from "../../../styles/token.stylex";
import {
  Button,
  Text,
} from "../../../shared/components";

const style = stylex.create({
  container: {
    display: "flex",
    width: "100vw",
    height: "fit-content",
    minHeight: "calc(100vh - 70px)",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  productWrapper: {
    display: "flex",
    width: "400px",
    height: "fit-content",
    gap: "16px",
    flexDirection: "column",
  },
  imgWrapper: {
    borderWidth: "1px",
    borderRadius: "10px",
    borderColor: colors.zinc_400,
    borderStyle: "solid",
    color: colors.black,
    width: "400px",
    height: "400px",
    objectFit: "cover",
  },
  infoWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    width: "100%",
  },
  priceWrapper: {
    display: "flex",
    gap: "4px",
    alignItems: "center",
  },
});

const ProductDetailContent = () => {
  const { productId } = useParams();

  const { data } =
    useGetProductDetailInfo(
      Number(productId) as number
    );

  if (!data) {
    return null;
  }

  const {
    name,
    imgUrl,
    price,
    description,
  } = data[0];

  return (
    <section
      {...stylex.props(style.container)}
    >
      <div
        {...stylex.props(
          style.productWrapper
        )}
      >
        <img
          alt={`${name} image`}
          src={imgUrl}
          {...stylex.props(
            style.imgWrapper
          )}
        />

        <div
          {...stylex.props(
            style.infoWrapper
          )}
        >
          <Text variant="black_500_xl">
            {name}
          </Text>
          <div
            {...stylex.props(
              style.priceWrapper
            )}
          >
            <Text variant="zinc_500_lg">
              {price.toLocaleString(
                "ko-KR"
              )}
            </Text>
            <Text variant="zinc_500_md">
              원
            </Text>
          </div>

          <Text variant="zinc_500_lg">
            {description}
          </Text>
        </div>

        <Button
          variant="mint_500"
          type="button"
        >
          장바구니에 담기
        </Button>
      </div>
    </section>
  );
};

export default ProductDetailContent;
