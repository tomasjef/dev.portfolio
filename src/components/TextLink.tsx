import type { ComponentProps } from "react";

type Props = ComponentProps<"a"> & {
  // Trailing arrow, kept outside the underline and glued to the last word
  arrow?: "↗" | "↓";
  // Colour of the surrounding text; hover always moves to the other tone
  tone?: "ink" | "muted";
};

const hover = {
  ink: "hover:text-muted focus-visible:text-muted",
  muted: "hover:text-ink focus-visible:text-ink",
};

// Every text link is underlined and shifts tone on hover; links off-site open in a new tab.
export function TextLink({ arrow, tone = "ink", className = "", children, ...props }: Props) {
  const external = props.href?.startsWith("http")
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a
      {...external}
      {...props}
      className={`transition-colors duration-200 ${hover[tone]} ${className}`}
    >
      <span className="underline decoration-from-font [text-underline-position:from-font]">
        {children}
      </span>
      {/* U+FE0E asks for the text glyph, never the emoji */}
      {arrow && <>&nbsp;{arrow}&#xFE0E;</>}
    </a>
  );
}
