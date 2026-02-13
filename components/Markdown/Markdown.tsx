import ReactMarkdown from "react-markdown";
import { Heading } from "@/components/Typography/Heading";
import { Text, type TypographyProps } from "@/components/Typography/Text";

type MarkdownProps = {
  /** Raw markdown string to render */
  children: string;
  className?: string;
} & Pick<TypographyProps, "font" | "size" | "weight" | "color" | "leading">;

function dedent(str: string): string {
  const lines = str
    .replace(/^\n/, "")
    .replace(/\n\s*$/, "")
    .split("\n");
  const indent = Math.min(
    ...lines
      .filter((l) => l.trim())
      .map((l) => l.match(/^ */)?.[0].length ?? 0),
  );
  return lines.map((l) => l.slice(indent)).join("\n");
}

export const Markdown = ({
  children,
  font,
  size,
  weight,
  color,
  leading,
}: MarkdownProps) => (
  <ReactMarkdown
    components={{
      h1: ({ children }) => <Heading as="h1">{children}</Heading>,
      h2: ({ children }) => <Heading as="h2">{children}</Heading>,
      h3: ({ children }) => <Heading as="h3">{children}</Heading>,
      h4: ({ children }) => <Heading as="h4">{children}</Heading>,
      h5: ({ children }) => <Heading as="h5">{children}</Heading>,
      h6: ({ children }) => <Heading as="h6">{children}</Heading>,
      p: ({ children }) => (
        <Text
          as="p"
          font={font}
          size={size}
          weight={weight}
          color={color}
          leading={leading}
        >
          {children}
        </Text>
      ),
      strong: ({ children }) => (
        <Text as="strong" weight="bold">
          {children}
        </Text>
      ),
      em: ({ children }) => (
        <Text as="em" italic>
          {children}
        </Text>
      ),
      blockquote: ({ children }) => (
        <Text as="blockquote" font="serif">
          {children}
        </Text>
      ),
      ul: ({ children }) => (
        <Text as="ul" font={font} size={size} color={color} leading={leading}>
          {children}
        </Text>
      ),
      ol: ({ children }) => (
        <Text as="ol" font={font} size={size} color={color} leading={leading}>
          {children}
        </Text>
      ),
      li: ({ children }) => <Text as="li">{children}</Text>,
      a: ({ href, children }) => (
        <a
          href={href}
          className="text-digital-red hover:text-black hover:underline focus:text-black focus:underline"
        >
          {children}
        </a>
      ),
      pre: ({ children }) => <Text as="pre">{children}</Text>,
      del: ({ children }) => <Text as="del">{children}</Text>,
      sub: ({ children }) => <Text as="sub">{children}</Text>,
      sup: ({ children }) => <Text as="sup">{children}</Text>,
      small: ({ children }) => (
        <Text as="small">
          {children}
        </Text>
      ),
    }}
  >
    {dedent(children)}
  </ReactMarkdown>
);
