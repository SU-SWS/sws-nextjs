import { clsx } from "clsx";

/**
 * Color token definitions
 * Light/dark mode pairings
 */

export type ColorToken = "primary" | "secondary" | "tertiary";

interface ColorDefinition {
  light: {
    bg: string;
    text: string;
  };
  dark: {
    bg: string;
    text: string;
  };
}

/**
 * CTA (Call to Action) link style variants
 */
export type CtaVariant = "digital-red" | "black" | "white";

interface CtaDefinition {
  light: {
    text: string;
    decoration: string;
    hocusText: string;
    hocusBg: string;
    hocusDecoration: string;
  };
  dark: {
    text: string;
    decoration: string;
    hocusText: string;
    hocusBg: string;
    hocusDecoration: string;
  };
}

export const ctaTokens: Record<CtaVariant, CtaDefinition> = {
  "digital-red": {
    light: {
      text: "text-digital-red",
      decoration: "decoration-digital-red",
      hocusText: "hocus:text-digital-red-xdark",
      hocusBg: "",
      hocusDecoration: "hocus:decoration-digital-red-xdark",
    },
    dark: {
      text: "dark:text-digital-red-xlight",
      decoration: "dark:decoration-digital-red-xlight",
      hocusText: "dark:hocus:text-white",
      hocusBg: "",
      hocusDecoration: "dark:hocus:decoration-white",
    },
  },
  black: {
    light: {
      text: "text-black",
      decoration: "decoration-black",
      hocusText: "hocus:text-black",
      hocusBg: "hocus:bg-black-10",
      hocusDecoration: "hocus:decoration-black",
    },
    dark: {
      text: "dark:text-white",
      decoration: "dark:decoration-white",
      hocusText: "dark:hocus:text-white",
      hocusBg: "dark:hocus:bg-white/10",
      hocusDecoration: "dark:hocus:decoration-white",
    },
  },
  white: {
    light: {
      text: "text-white",
      decoration: "decoration-digital-red-light",
      hocusText: "hocus:text-black",
      hocusBg: "hocus:bg-white/80",
      hocusDecoration: "hocus:decoration-black",
    },
    dark: {
      text: "dark:text-white",
      decoration: "dark:decoration-digital-red-light",
      hocusText: "dark:hocus:text-black",
      hocusBg: "dark:hocus:bg-white/80",
      hocusDecoration: "dark:hocus:decoration-black",
    },
  },
};

/**
 * Button style variants
 */
export type ButtonVariant = "primary" | "black-ghost" | "white-ghost";

interface ButtonDefinition {
  light: {
    bg: string;
    text: string;
    border: string;
    hocusBg: string;
    hocusText: string;
    hocusBorder: string;
  };
  dark: {
    bg: string;
    text: string;
    border: string;
    hocusBg: string;
    hocusText: string;
    hocusBorder: string;
  };
}

export const buttonTokens: Record<ButtonVariant, ButtonDefinition> = {
  primary: {
    light: {
      bg: "bg-digital-red",
      text: "text-white",
      border: "border-digital-red-xlight",
      hocusBg: "hocus:bg-black",
      hocusText: "hocus:text-white",
      hocusBorder: "hocus:border-black",
    },
    dark: {
      bg: "dark:bg-digital-red",
      text: "dark:text-white",
      border: "dark:border-digital-red-xlight",
      hocusBg: "dark:hocus:bg-white",
      hocusText: "dark:hocus:text-black",
      hocusBorder: "dark:hocus:border-white",
    },
  },
  "black-ghost": {
    light: {
      bg: "bg-transparent",
      text: "text-black",
      border: "border-black",
      hocusBg: "hocus:bg-black",
      hocusText: "hocus:text-white",
      hocusBorder: "hocus:border-black",
    },
    dark: {
      bg: "dark:bg-transparent",
      text: "dark:text-white",
      border: "dark:border-white",
      hocusBg: "dark:hocus:bg-white",
      hocusText: "dark:hocus:text-black",
      hocusBorder: "dark:hocus:border-white",
    },
  },
  "white-ghost": {
    light: {
      bg: "bg-transparent",
      text: "text-white",
      border: "border-white",
      hocusBg: "hocus:bg-white",
      hocusText: "hocus:text-black",
      hocusBorder: "hocus:border-white",
    },
    dark: {
      bg: "dark:bg-transparent",
      text: "dark:text-white",
      border: "dark:border-white",
      hocusBg: "dark:hocus:bg-white",
      hocusText: "dark:hocus:text-black",
      hocusBorder: "dark:hocus:border-white",
    },
  },
};

export const colorTokens: Record<ColorToken, ColorDefinition> = {
  primary: {
    light: {
      bg: "bg-white",
      text: "text-black-90",
    },
    dark: {
      bg: "dark:bg-black",
      text: "dark:text-white",
    },
  },
  secondary: {
    light: {
      bg: "bg-sand",
      text: "text-black-90",
    },
    dark: {
      bg: "dark:bg-black",
      text: "dark:text-white",
    },
  },
  tertiary: {
    light: {
      bg: "bg-fog-light",
      text: "text-black-90",
    },
    dark: {
      bg: "dark:bg-black",
      text: "dark:text-white",
    },
  },
};

/**
 * Get background and text color classes for a given color token
 */
export function getColorClasses(token: ColorToken): string {
  const colors = colorTokens[token];
  return clsx(colors.light.bg, colors.dark.bg, colors.light.text, colors.dark.text);
}

/**
 * Get only background color classes for a given color token
 */
export function getBgColorClasses(token: ColorToken): string {
  const colors = colorTokens[token];
  return clsx(colors.light.bg, colors.dark.bg);
}

/**
 * Get only text color classes for a given color token
 */
export function getTextColorClasses(token: ColorToken): string {
  const colors = colorTokens[token];
  return clsx(colors.light.text, colors.dark.text);
}

/**
 * Get CTA link classes for a given variant
 */
export function getCtaClasses(variant: CtaVariant): string {
  const cta = ctaTokens[variant];
  return clsx(
    "transition-all ease-in-out duration-500 underline underline-offset-2 decoration-2",
    cta.light.text,
    cta.light.decoration,
    cta.light.hocusText,
    cta.light.hocusBg,
    cta.light.hocusDecoration,
    cta.dark.text,
    cta.dark.decoration,
    cta.dark.hocusText,
    cta.dark.hocusBg,
    cta.dark.hocusDecoration,
  );
}

/**
 * Get button classes for a given variant
 */
export function getButtonClasses(variant: ButtonVariant): string {
  const btn = buttonTokens[variant];
  return clsx(
    "transition-all ease-in-out duration-300 border-2",
    btn.light.bg,
    btn.light.text,
    btn.light.border,
    btn.light.hocusBg,
    btn.light.hocusText,
    btn.light.hocusBorder,
    btn.dark.bg,
    btn.dark.text,
    btn.dark.border,
    btn.dark.hocusBg,
    btn.dark.hocusText,
    btn.dark.hocusBorder,
  );
}
