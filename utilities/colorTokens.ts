import { clsx } from "clsx";

/**
 * Color token definitions
 * Use "primary", "secondary", "tertiary" for light backgrounds
 * Use "primary-dark", "secondary-dark", "tertiary-dark" for dark backgrounds
 */

export type ColorToken =
  | "primary"
  | "primary-dark"
  | "secondary"
  | "secondary-dark"
  | "tertiary"
  | "tertiary-dark";

interface ColorDefinition {
  bg: string;
  text: string;
}

export const colorTokens: Record<ColorToken, ColorDefinition> = {
  primary: {
    bg: "bg-white",
    text: "text-black-90",
  },
  "primary-dark": {
    bg: "bg-black",
    text: "text-white",
  },
  secondary: {
    bg: "bg-[#F3F0E2]",
    text: "text-black-90",
  },
  "secondary-dark": {
    bg: "bg-black",
    text: "text-white",
  },
  tertiary: {
    bg: "bg-fog-light",
    text: "text-black-90",
  },
  "tertiary-dark": {
    bg: "bg-black",
    text: "text-white",
  },
};

/**
 * CTA (Call to Action) link style variants
 * Use "digital-red", "black" for light backgrounds
 * Use "digital-red-dark", "black-dark", "white" for dark backgrounds
 */
export type CtaVariant =
  | "digital-red"
  | "digital-red-dark"
  | "black"
  | "black-dark"
  | "white";

interface CtaDefinition {
  text: string;
  decoration: string;
  hocusText: string;
  hocusBg: string;
  hocusDecoration: string;
}

export const ctaTokens: Record<CtaVariant, CtaDefinition> = {
  "digital-red": {
    text: "text-digital-red",
    decoration: "decoration-digital-red",
    hocusText: "hocus:text-digital-red-xdark",
    hocusBg: "",
    hocusDecoration: "hocus:decoration-digital-red-xdark",
  },
  "digital-red-dark": {
    text: "text-digital-red-xlight",
    decoration: "decoration-digital-red-xlight",
    hocusText: "hocus:text-white",
    hocusBg: "",
    hocusDecoration: "hocus:decoration-white",
  },
  black: {
    text: "text-black",
    decoration: "decoration-black",
    hocusText: "hocus:text-black",
    hocusBg: "hocus:bg-black-10",
    hocusDecoration: "hocus:decoration-black",
  },
  "black-dark": {
    text: "text-white",
    decoration: "decoration-white",
    hocusText: "hocus:text-white",
    hocusBg: "hocus:bg-white/10",
    hocusDecoration: "hocus:decoration-white",
  },
  white: {
    text: "text-white",
    decoration: "decoration-digital-red-light",
    hocusText: "hocus:text-black",
    hocusBg: "hocus:bg-white/80",
    hocusDecoration: "hocus:decoration-black",
  },
};

/**
 * Button style variants
 * Use "primary", "black-ghost" for light backgrounds
 * Use "primary-dark", "white-ghost" for dark backgrounds
 */
export type ButtonVariant =
  | "primary"
  | "primary-dark"
  | "black-ghost"
  | "white-ghost";

interface ButtonDefinition {
  bg: string;
  text: string;
  border: string;
  hocusBg: string;
  hocusText: string;
  hocusBorder: string;
}

export const buttonTokens: Record<ButtonVariant, ButtonDefinition> = {
  primary: {
    bg: "bg-digital-red",
    text: "text-white",
    border: "border-digital-red-xlight",
    hocusBg: "hocus:bg-black",
    hocusText: "hocus:text-white",
    hocusBorder: "hocus:border-black",
  },
  "primary-dark": {
    bg: "bg-digital-red",
    text: "text-white",
    border: "border-digital-red-xlight",
    hocusBg: "hocus:bg-white",
    hocusText: "hocus:text-black",
    hocusBorder: "hocus:border-white",
  },
  "black-ghost": {
    bg: "bg-transparent",
    text: "text-black",
    border: "border-black",
    hocusBg: "hocus:bg-black",
    hocusText: "hocus:text-white",
    hocusBorder: "hocus:border-black",
  },
  "white-ghost": {
    bg: "bg-transparent",
    text: "text-white",
    border: "border-white",
    hocusBg: "hocus:bg-white",
    hocusText: "hocus:text-black",
    hocusBorder: "hocus:border-white",
  },
};

/**
 * Get background and text color classes for a given color token
 */
export function getColorClasses(token: ColorToken): string {
  const colors = colorTokens[token];
  return clsx(colors.bg, colors.text);
}

/**
 * Get only background color classes for a given color token
 */
export function getBgColorClasses(token: ColorToken): string {
  const colors = colorTokens[token];
  return colors.bg;
}

/**
 * Get only text color classes for a given color token
 */
export function getTextColorClasses(token: ColorToken): string {
  const colors = colorTokens[token];
  return colors.text;
}

/**
 * Get CTA link classes for a given variant
 */
export function getCtaClasses(variant: CtaVariant): string {
  const cta = ctaTokens[variant];
  return clsx(
    "transition-all ease-in-out duration-500 underline underline-offset-2 decoration-2",
    cta.text,
    cta.decoration,
    cta.hocusText,
    cta.hocusBg,
    cta.hocusDecoration,
  );
}

/**
 * Get button classes for a given variant
 */
export function getButtonClasses(variant: ButtonVariant): string {
  const btn = buttonTokens[variant];
  return clsx(
    "transition-all ease-in-out duration-300 border-2",
    btn.bg,
    btn.text,
    btn.border,
    btn.hocusBg,
    btn.hocusText,
    btn.hocusBorder,
  );
}
