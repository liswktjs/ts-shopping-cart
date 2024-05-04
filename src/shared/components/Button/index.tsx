import {
  ButtonHTMLAttributes,
  PropsWithChildren,
} from "react";
import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../styles/token.stylex";

const buttonVariant = stylex.create({
  brown: {
    width: "100%",
    height: "fit-content",
    padding: "4px",
    borderStyle: "none",
    borderRadius: "4px",
    opacity: {
      default: 1,
      ":hover": 0.8,
    },
    cursor: {
      ":hover": "pointer",
    },
    transition: "all 0.15s ease-in-out",
    backgroundColor: colors.brown,
    color: colors.white,
  },
  mint_500: {
    width: "100%",
    height: "fit-content",
    padding: "4px",
    borderStyle: "none",
    borderRadius: "4px",
    opacity: {
      default: 1,
      ":hover": 0.7,
    },
    cursor: {
      ":hover": "pointer",
    },
    transition: "all 0.15s ease-in-out",
    backgroundColor: colors.mint_500,
    color: colors.white,
  },
  mint_400: {
    width: "100%",
    height: "fit-content",
    padding: "4px",
    borderStyle: "none",
    borderRadius: "4px",
    opacity: {
      default: 1,
      ":hover": 0.7,
    },
    cursor: {
      ":hover": "pointer",
    },
    transition: "all 0.15s ease-in-out",
    backgroundColor: colors.mint_500,
    color: colors.white,
  },
});

interface Props
  extends Omit<
    ButtonHTMLAttributes<HTMLButtonElement>,
    "style"
  > {
  variant: keyof typeof buttonVariant;
  style?: stylex.StyleXStyles;
}

const Button = ({
  children,
  style,
  variant,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <button
      {...stylex.props(
        buttonVariant[variant],
        style
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
