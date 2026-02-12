import { ReactNode, TimeHTMLAttributes } from "react";
import * as styles from "./typography.styles";
import * as types from "./typography.types";
import clsx from "clsx";

export type TypographyProps = {
  as?: types.TextType;
  font?: types.FontFamilyType;
  size?: types.FontSizeType;
  weight?: types.FontWeightType;
  align?: types.TextAlignType;
  color?: types.TextColorType;
  variant?: types.TextVariantType;
  leading?: types.FontLeadingType;
  italic?: boolean;
  srOnly?: boolean;
  uppercase?: boolean;
  className?: string;
  children?: ReactNode;
};

// The TimeHTMLAttributes<HTMLElement> is for the dateTime attribute when using as="time"
export type TextProps = TypographyProps &
  React.HTMLAttributes<HTMLElement> &
  TimeHTMLAttributes<HTMLElement>;

export const Text = ({
  as: AsComponent = "p",
  font = "sans",
  size,
  weight,
  align,
  color = "default",
  variant,
  leading,
  italic,
  srOnly,
  uppercase,
  className,
  children,
  ...rest
}: TextProps) => {

  return (
    <AsComponent
      {...rest}
      className={clsx(
        font ? styles.fontFamilies[font] : "",
        size ? styles.fontSizes[size] : "",
        weight ? styles.fontWeights[weight] : "",
        align ? styles.textAligns[align] : "",
        color ? styles.textColors[color] : "",
        variant ? styles.textVariants[variant] : "",
        leading ? styles.fontLeadings[leading] : "",
        italic ? "italic" : "",
        srOnly ? "sr-only" : "",
        uppercase ? "uppercase" : "",
        className,
      )}
    >
      {children}
    </AsComponent>
  );
};
