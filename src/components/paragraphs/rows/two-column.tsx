import OneColumn, {LayoutProps} from "@components/paragraphs/rows/one-column";
import twMerge from "@lib/utils/twMerge";
import {clsx} from "clsx";
import {ReactNode} from "react";

export interface TwoColumnProps extends LayoutProps {
  column_widths?: "33-67" | "67-33" | "40-60"
  vertical_dividers?: boolean
}

type Props = TwoColumnProps & {
  left?: ReactNode
  right?: ReactNode
}

const TwoColumn = ({
  left,
  right,
  bg_color,
  top_padding,
  bottom_margin,
  bottom_padding,
  column_widths,
  vertical_dividers,
}: Props) => {
  return (
    <div
      className={twMerge(
        "mb-32 @container",
        clsx({
          gutters: !bg_color,
          "px-5 pb-20 pt-20": !!bg_color,
          "pt-0": top_padding === "none",
          "pt-40": top_padding === "more",
          "mb-0": bottom_margin === "none",
          "pb-0": bottom_padding === "none",
          "bg-foggy-light": bg_color === "f4f4f4",
          "bg-[#ebeae4]": bg_color === "ebeae5",
          "bg-[#dcecef]": bg_color === "dcecef",
          "bg-[#dcefec]": bg_color === "dcefec",
          "bg-[#f2e8f1]": bg_color === "f2e8f1",
          "bg-[#f7ecde]": bg_color === "f7ecde",
        }),
      )}
      data-columns="2"
    >
      <div
        className={twMerge(
          "centered grid gap-10 @6xl:gap-38",
          clsx({
            "@6xl:grid-cols-2": !column_widths,
            "@6xl:grid-cols-2-3": column_widths === "40-60",
            "@6xl:grid-cols-1-2": column_widths === "33-67",
            "@6xl:grid-cols-2-1": column_widths === "67-33",
          }),
        )}
      >
        <OneColumn
          top_padding="none"
          bottom_margin="none"
          className={clsx({
            "after:contents('') relative after:absolute after:-right-10 after:top-0 after:h-full after:w-[1px] after:bg-black":
              vertical_dividers,
          })}
        >
          {left}
        </OneColumn>
        <OneColumn top_padding="none" bottom_margin="none">
          {right}
        </OneColumn>
      </div>
    </div>
  );
};
export default TwoColumn;
