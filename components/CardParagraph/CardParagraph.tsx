import { HtmlHTMLAttributes } from "react";
import { H2, H3, H4 } from "@/components/Typography/Headers";
import ActionLink from "@/components/Cta/ActionLink";
import Button from "@/components/Cta/Button";
import ImageCard from "@/components/ImageCard/ImageCard";
import { clsx } from "clsx";

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  id?: string;
  header?: string;
  superHeader?: string;
  body?: string;
  link?: {
    url: string;
    title: string;
  };
  imageUrl?: string;
  imageAlt?: string;
  videoUrl?: string;
  headingLevel?: "h2" | "h3" | "h4" | "div";
  hideHeading?: boolean;
  linkStyle?: "action" | "button";
};

const CardParagraph = ({
  children,
  id,
  header,
  superHeader,
  body,
  link,
  imageUrl,
  imageAlt,
  videoUrl,
  headingLevel = "h2",
  hideHeading = false,
  linkStyle = "button",
  ...props
}: Props) => {
  const headerClasses = clsx({
    "sr-only": hideHeading,
  });

  return (
    <ImageCard
      {...props}
      aria-labelledby={header ? id : undefined}
      imageUrl={imageUrl}
      imageAlt={imageAlt}
      videoUrl={videoUrl}
      isArticle={!!header && headingLevel !== "div"}
    >
      {header && (
        <>
          {headingLevel === "h2" && (
            <H2 id={id} className={headerClasses}>
              {header}
            </H2>
          )}
          {headingLevel === "h3" && (
            <H3 id={id} className={headerClasses}>
              {header}
            </H3>
          )}
          {headingLevel === "h4" && (
            <H4 id={id} className={headerClasses}>
              {header}
            </H4>
          )}
          {headingLevel === "div" && (
            <div className={headerClasses}>{header}</div>
          )}
        </>
      )}

      {superHeader && (
        <div className="order-first font-semibold">{superHeader}</div>
      )}

      {children}

      {link?.url && (
        <>
          {linkStyle === "action" && (
            <ActionLink href={link.url}>{link.title}</ActionLink>
          )}
          {linkStyle !== "action" && (
            <Button href={link.url}>{link.title}</Button>
          )}
        </>
      )}
    </ImageCard>
  );
};

export default CardParagraph;
