import OneColumn, { LayoutProps } from "@/components/Row/OneColumn";
import TwoColumn from "@/components/Row/TwoColumn";
import ThreeColumn from "@/components/Row/ThreeColumn";
import { HTMLAttributes, ReactNode } from "react";
import twMerge from "@/utilities/utils/twMerge";

export type LayoutType = "one-column" | "two-column" | "three-column";

export interface RowLayout extends LayoutProps {
  id: string;
  type: LayoutType;
  column_widths?: "33-67" | "67-33";
  vertical_dividers?: boolean;
  left?: ReactNode;
  main?: ReactNode;
  right?: ReactNode;
  children?: ReactNode;
}

type Props = HTMLAttributes<HTMLDivElement> & {
  layouts?: RowLayout[];
};

const Rows = ({ layouts, className, ...props }: Props) => {
  if (!layouts) return null;

  return (
    <div className={twMerge("@container", className)} {...props}>
      {layouts.map((layout) => (
        <Row key={layout.id} {...layout} />
      ))}
    </div>
  );
};

const Row = ({
  type,
  bg_color,
  top_padding,
  bottom_margin,
  bottom_padding,
  column_widths,
  vertical_dividers,
  left,
  main,
  right,
  children,
}: RowLayout) => {
  const layoutProps: LayoutProps = {
    bg_color,
    top_padding,
    bottom_margin,
    bottom_padding,
  };

  if (type === "two-column") {
    return (
      <TwoColumn
        {...layoutProps}
        column_widths={column_widths}
        vertical_dividers={vertical_dividers}
        left={left}
        right={right}
      />
    );
  }

  if (type === "three-column") {
    return (
      <ThreeColumn
        {...layoutProps}
        vertical_dividers={vertical_dividers}
        left={left}
        main={main}
        right={right}
      />
    );
  }

  // Fall back to one column if the layout is unknown or explicitly one-column
  return <OneColumn {...layoutProps}>{children}</OneColumn>;
};

export default Rows;
