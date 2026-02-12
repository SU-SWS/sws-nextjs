import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { HtmlHTMLAttributes } from "react";
import twMerge from "@/utilities/utils/twMerge";
import Link from "next/link";
import { getLinkHref } from "@/components/Cta/Link";
import { CtaVariant, getCtaClasses } from "@/utilities/colorTokens";

type Props = HtmlHTMLAttributes<HTMLAnchorElement> & {
  /**
   * Link url.
   */
  href: string;
  /**
   * CTA color variant for styling.
   */
  variant?: CtaVariant;
};

const ActionLink = ({
 href, children, variant, ...props 
}: Props) => {
  const ctaClasses = variant ? getCtaClasses(variant) : "";

  return (
    <Link
      {...props}
      href={getLinkHref(href)}
      className={twMerge("group relative", ctaClasses, props.className)}
    >
      {children}
      <ChevronRightIcon
        height={25}
        className="ml-2 inline-block transition-all group-hocus-visible:translate-x-1"
      />
    </Link>
  );
};
export default ActionLink;
