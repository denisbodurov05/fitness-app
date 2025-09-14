import React from "react";
import { TextProps as RNTextProps, TextStyle } from "react-native";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "subtitle1"
  | "subtitle2"
  | "body1"
  | "body2"
  | "button"
  | "caption"
  | "overline";

export interface BaseTypographyProps {
  /**
   * The typography variant to use
   * @default 'body1'
   */
  variant?: TypographyVariant;
  /**
   * Custom color override
   */
  color?: string;
  /**
   * Text alignment
   */
  align?: "left" | "center" | "right" | "justify";
  /**
   * The text content
   */
  children?: React.ReactNode;
}

export interface TypographyComponentProps
  extends BaseTypographyProps,
    Omit<RNTextProps, "style" | "children"> {
  /**
   * Additional styles
   */
  style?: TextStyle | TextStyle[];
}

export type { FontWeight, Typography, TypographyStyle } from "./theme";
