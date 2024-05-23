import * as stylex from "@stylexjs/stylex";
import { colors } from "../../../styles/token.stylex";
import {
  HTMLAttributes,
  PropsWithChildren,
} from "react";

const textVariant = stylex.create({
  zinc_500_xl_bold: {
    fontSize: "32px",
    fontWeight: 700,
    color: colors.zinc_500,
  },
  zinc_500_xl: {
    fontSize: "32px",
    fontWeight: 400,
    color: colors.zinc_500,
  },
  zinc_500_lg: {
    fontSize: "20px",
    fontWeight: 400,
    color: colors.zinc_500,
  },
  zinc_500_md: {
    fontSize: "16px",
    fontWeight: 400,
    color: colors.zinc_500,
  },
  black_500_xl_bold: {
    fontSize: "32px",
    fontWeight: 700,
    color: colors.black,
  },
  black_500_xl: {
    fontSize: "32px",
    fontWeight: 400,
    color: colors.black,
  },
  black_500_lg: {
    fontSize: "20px",
    fontWeight: 400,
    color: colors.black,
  },
  black_500_md: {
    fontSize: "16px",
    fontWeight: 400,
    color: colors.black,
  },
  white_500_xl_bold: {
    fontSize: "32px",
    fontWeight: 700,
    color: colors.white,
  },
  white_500_xl: {
    fontSize: "32px",
    fontWeight: 400,
    color: colors.white,
  },
  white_500_lg: {
    fontSize: "20px",
    fontWeight: 400,
    color: colors.white,
  },
  white_500_md: {
    fontSize: "16px",
    fontWeight: 400,
    color: colors.white,
  },
});

interface Props
  extends Omit<
    HTMLAttributes<HTMLDivElement>,
    "style"
  > {
  variant: keyof typeof textVariant;
  style?: stylex.StyleXStyles;
}

export const Text = ({
  variant,
  children,
  style,
  ...rest
}: PropsWithChildren<Props>) => {
  return (
    <div
      {...stylex.props(
        textVariant[variant],
        style
      )}
      {...rest}
    >
      {children}
    </div>
  );
};
