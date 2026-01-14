import { HTMLAttributes } from "react";
import Image from "next/image";
import { clsx } from "clsx";
import {
  ColorToken,
  getColorClasses,
  getBgColorClasses,
} from "@lib/colorTokens";

type BgImageWrapperProps = HTMLAttributes<HTMLDivElement> & {
  bgColor?: ColorToken;
  hasBgImage?: boolean;
  src?: string;
  alt?: string;
};

export const BgImageWrapper = ({
  className,
  children,
  bgColor,
  hasBgImage = false,
  src,
  alt,
  ...props
}: BgImageWrapperProps) => {
  const colorClasses = bgColor ? getColorClasses(bgColor) : "";
  const bgColorClasses = bgColor ? getBgColorClasses(bgColor) : "";

  return (
    <div
      {...props}
      className={clsx("relative rs-mb-5 w-full", colorClasses, className)}
    >
      <div className="cc rs-pb-7 rs-pt-6">
        {hasBgImage && src && (
          <div className="size-full absolute top-0 left-0 z-0">
            <Image
              className="ed11y-ignore object-cover z-0"
              src={src}
              alt={alt || ""}
              loading={"lazy"}
              fill
              sizes="100vw"
            />
            <div
              className={clsx(
                "absolute size-full opacity-80 z-10 backdrop-blur-sm",
                bgColorClasses,
              )}
            />
          </div>
        )}
        <div className="relative z-50 w-full">{children}</div>
      </div>
    </div>
  );
};
