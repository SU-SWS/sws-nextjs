import {clsx} from "clsx";
import twMerge from "@lib/utils/twMerge";
import {HTMLAttributes, ReactNode} from "react";

export interface LayoutProps {
  bg_color?: "f4f4f4" | "ebeae5" | "dcecef" | "dcefec" | "f2e8f1" | "f7ecde" | "sand"
  top_padding?: "none" | "more"
  bottom_margin?: "none"
  bottom_padding?: "none"
}

type Props = HTMLAttributes<HTMLDivElement> & LayoutProps & {
  children?: ReactNode
}

const OneColumn = ({
children, bg_color, top_padding, bottom_margin, bottom_padding, className, ...props
}: Props) => {
  return (
    <div
      {...props}
      className={twMerge(
        className,
        clsx("mb-32 space-y-16 @container", {
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
      data-columns="1"
    >
      {children}
    </div>
  );
};
export default OneColumn;
