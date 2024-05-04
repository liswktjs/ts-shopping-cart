import * as stylex from "@stylexjs/stylex";
import { Icon } from "@iconify/react";
import { colors } from "../../../styles/token.stylex";
import Text from "../Text";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../Router/path";

const style = stylex.create({
  header: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: colors.mint_400,
    height: "fit-content",
    paddingVertical: "10px",
    paddingHorizontal: "80px",
  },
  wrapper: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
  },
  link: {
    cursor: {
      default: "pointer",
      ":hover": "pointer",
    },
    opacity: {
      default: 1,
      ":hover": 0.7,
    },
  },
});

const Header = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(PATH.home);
  };

  const handleCartLinkClick = () => {
    navigate(PATH.orderPayment);
  };

  const handleOrderListLinkClick =
    () => {
      navigate(PATH.orderList);
    };

  return (
    <header
      {...stylex.props(style.header)}
    >
      <div
        {...stylex.props(
          style.wrapper,
          style.link
        )}
        onClick={handleLogoClick}
      >
        <Icon
          icon="solar:cart-large-4-broken"
          fontSize={50}
          color={colors.white}
        />
        <Text variant="white_500_xl">
          Sally Shop
        </Text>
      </div>

      <div
        {...stylex.props(style.wrapper)}
      >
        <Text
          variant="white_500_md"
          style={style.link}
          onClick={handleCartLinkClick}
        >
          장바구니
        </Text>
        <Text
          variant="white_500_md"
          style={style.link}
          onClick={
            handleOrderListLinkClick
          }
        >
          주문목록
        </Text>
      </div>
    </header>
  );
};

export default Header;
