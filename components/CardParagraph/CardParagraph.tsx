import { HtmlHTMLAttributes } from "react";
import { Heading } from "@/components/Typography/Heading";
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
          {headingLevel !== "div" ? (
            <Heading as={headingLevel} id={id} className={headerClasses}>
              {header}
            </Heading>
          ) : (
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
