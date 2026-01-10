import OneColumn, {LayoutProps} from "@components/paragraphs/rows/one-column";
import {clsx} from "clsx";
import twMerge from "@lib/utils/twMerge";
import {ReactNode} from "react";

export interface ThreeColumnProps extends LayoutProps {
  vertical_dividers?: boolean
}

type Props = ThreeColumnProps & {
  left?: ReactNode
  main?: ReactNode
  right?: ReactNode
}

const ThreeColumn = ({
  left,
  main,
  right,
  bg_color,
  top_padding,
  bottom_margin,
  bottom_padding,
  vertical_dividers,
}: Props) => {
  return (
    <div
      className={twMerge(
        clsx("mb-32 @container", {
          "px-5 pb-20 pt-20": !!bg_color,
          "pt-0": top_padding === "none",
          "pt-40": top_padding === "more",
          "mb-0": bottom_margin === "none",
          "pb-0": bottom_padding === "none",
          "bg-sand-light": bg_color === "sand",
          "bg-foggy-light": bg_color === "f4f4f4",
          "bg-[#ebeae4]": bg_color === "ebeae5",
          "bg-[#dcecef]": bg_color === "dcecef",
          "bg-[#dcefec]": bg_color === "dcefec",
          "bg-[#f2e8f1]": bg_color === "f2e8f1",
          "bg-[#f7ecde]": bg_color === "f7ecde",
        }),
      )}
      data-columns="3"
    >
      <div className="centered grid gap-10 @4xl:grid-cols-2 @6xl:gap-38 @6xl:grid-cols-3">
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
        <OneColumn
          top_padding="none"
          bottom_margin="none"
          className={clsx({
            "after:contents('') relative after:absolute after:-right-10 after:top-0 after:h-full after:w-[1px] after:bg-black":
              vertical_dividers,
          })}
        >
          {main}
        </OneColumn>
        <OneColumn top_padding="none" bottom_margin="none">
          {right}
        </OneColumn>
      </div>
    </div>
  );
};
export default ThreeColumn;
