import {HtmlHTMLAttributes} from "react";
import Image from "next/image";
import Link from "@components/elements/link";
import twMerge from "@lib/utils/twMerge";

type Props = HtmlHTMLAttributes<HTMLDivElement> & {
  imageUrl?: string;
  imageAlt?: string;
  videoUrl?: string;
  link?: {
    url: string;
    title: string;
  };
  caption?: string;
};

const MediaCaptionParagraph = async ({
  imageUrl,
  imageAlt,
  videoUrl,
  link,
  caption,
  children,
  ...props
}: Props) => {
  return (
    <figure {...props} className={twMerge("centered xl:max-w-[980px]", props.className)}>
      {imageUrl && (
        <div className="relative aspect-[16/9] w-full">
          <Image
            className="object-cover"
            src={imageUrl}
            alt={imageAlt || ""}
            fill
            sizes="(max-width: 768px) 100vw, 1000px"
          />
        </div>
      )}
      <figcaption className="color type-0 text-right text-cool-grey">
        {link?.url && <Link href={link.url}>{link.title}</Link>}

        {children}
      </figcaption>
    </figure>
  );
};
export default MediaCaptionParagraph;
