import { HtmlHTMLAttributes } from "react";
import { H2, H3, H4 } from "@/components/Typography/Headers";
import Link from "@/components/Cta/Link";
import ReverseVisualOrder from "@/components/ReverseVisualOrder/ReverseVisualOrder";
import ImageCard from "@/components/ImageCard/ImageCard";
import CountUpNumber from "@/components/CountUp/CountUp";
import { clsx } from "clsx";
import twMerge from "@/utilities/utils/twMerge";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

type ColorOption =
  | "2e2d29"
  | "53565a"
  | "544948"
  | "8c1515"
  | "620059"
  | "007c92"
  | "175e54"
  | "e98300"
  | "f4f4f4"
  | "e04f39"
  | "279989"
  | "d1660f";

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  id?: string;
  headline?: string;
  headingLevel?: "h2" | "h3" | "h4" | "div";
  hideHeading?: boolean;
  stat: string;
  superhead?: string;
  body?: string;
  button?: {
    url: string;
    title: string;
  };
  linkStyle?: "action" | "button";
  imageUrl?: string;
  imageAlt?: string;
  iconName?: string;
  iconStyle?: string;
  iconColor?: ColorOption;
  statColor?: ColorOption;
  bgColor?: ColorOption;
  centered?: boolean;
};
const StatCardParagraph = ({
  id,
  headline,
  headingLevel = "h2",
  hideHeading = false,
  stat,
  superhead,
  body,
  button,
  linkStyle = "action",
  imageUrl,
  imageAlt,
  iconName,
  iconStyle,
  iconColor,
  statColor,
  bgColor,
  centered = false,
  children,
  ...props
}: Props) => {
  const headerClasses = clsx({
    "sr-only": hideHeading,
  });

  let statMatches: RegExpMatchArray | null = null;
  let decimalPlaces = 0;
  let prefix: string | undefined;

  // The stat starts with numbers.
  if (/^[0-9]/.test(stat)) {
    statMatches = stat.match(/^([0-9.]+)(.*)/);

    if (statMatches && statMatches[1].indexOf(".") > 0) {
      decimalPlaces = statMatches[1].replace(/^.*\./, "").length;
    }
  }

  // The stat starts with dollar sign and then numbers.
  if (/^\$[0-9]/.test(stat)) {
    prefix = "$";
    statMatches = stat.match(/^\$([0-9.]+)(.*)/);
    if (statMatches && statMatches[1].indexOf(".") > 0) {
      decimalPlaces = statMatches[1].replace(/^.*\./, "").length;
    }
  }
  const allowTextColors = !bgColor || ["f4f4f4"].includes(bgColor);
  const whiteText =
    bgColor && !["f4f4f4", "e98300", "e04f39"].includes(bgColor);

  return (
    <ImageCard
      {...props}
      className={clsx({
        "text-center": centered,
        "text-white [&_a]:text-white": whiteText,
        "bg-black": bgColor === "2e2d29",
        "bg-cool-grey": bgColor === "53565a",
        "bg-stone-dark": bgColor === "544948",
        "bg-cardinal-red": bgColor === "8c1515",
        "bg-plum": bgColor === "620059",
        "bg-lagunita": bgColor === "007c92",
        "bg-palo-alto": bgColor === "175e54",
        "bg-poppy": bgColor === "e98300",
        "bg-foggy-light": bgColor === "f4f4f4",
        "bg-spirited": bgColor === "e04f39",
      })}
      aria-labelledby={headline ? id : undefined}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      isArticle={!!headline && headingLevel !== "div"}
    >
      <ReverseVisualOrder>
        {headline && (
          <>
            {headingLevel === "h2" && (
              <H2 id={id} className={twMerge("mb-0", headerClasses)}>
                {headline}
              </H2>
            )}
            {headingLevel === "h3" && (
              <H3 id={id} className={twMerge("mb-0", headerClasses)}>
                {headline}
              </H3>
            )}
            {headingLevel === "h4" && (
              <H4 id={id} className={twMerge("mb-0", headerClasses)}>
                {headline}
              </H4>
            )}
            {headingLevel === "div" && (
              <div className={twMerge("mb-0", headerClasses)}>{headline}</div>
            )}
          </>
        )}

        <div>
          {imageUrl && <div></div>}
          {iconName && (
            <div className="block">
              <span
                aria-hidden="true"
                className={clsx(`fa-${iconName} ${iconStyle} text-[60px]`, {
                  "text-cardinal-red":
                    allowTextColors && iconColor === "8c1515",
                  "text-plum": allowTextColors && iconColor === "620059",
                  "text-lagunita": allowTextColors && iconColor === "007c92",
                  "text-palo-verde-dark":
                    allowTextColors && iconColor === "279989",
                  "text-poppy-dark": allowTextColors && iconColor === "d1660f",
                  "text-spirited": allowTextColors && iconColor === "e04f39",
                })}
              />
            </div>
          )}
          {superhead && <div className="font-semibold">{superhead}</div>}
          {statMatches && (
            <CountUpNumber
              end={parseFloat(statMatches[1])}
              prefix={prefix}
              suffix={(statMatches && statMatches[2]) || undefined}
              className={clsx(
                "text-[40px] font-bold @xl:text-[50px] @2xl:text-[60px]",
                {
                  "text-cardinal-red":
                    allowTextColors && statColor === "8c1515",
                  "text-plum": allowTextColors && statColor === "620059",
                  "text-lagunita": allowTextColors && statColor === "007c92",
                  "text-palo-verde-dark":
                    allowTextColors && statColor === "279989",
                  "text-poppy-dark": allowTextColors && statColor === "d1660f",
                  "text-spirited": allowTextColors && statColor === "e04f39",
                },
              )}
              decimals={decimalPlaces}
            />
          )}
        </div>
      </ReverseVisualOrder>
      {children}
      {button?.url && (
        <Link
          className={twMerge(
            clsx(
              "group flex w-fit items-center gap-3 text-black no-underline hocus:underline",
              {
                "border border-black px-7 py-5": linkStyle === "button",
                "border-white text-white hocus:text-white": whiteText,
                "mx-auto": centered,
              },
            ),
          )}
          href={button.url}
        >
          {button.title}

          {linkStyle !== "button" && (
            <ChevronRightIcon
              className="shrink-0 transition-all group-hocus:translate-x-1.5"
              width={20}
            />
          )}
        </Link>
      )}
    </ImageCard>
  );
};
export default StatCardParagraph;
