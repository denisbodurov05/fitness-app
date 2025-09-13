import { useTheme } from "@/providers";
import { TypographyComponentProps } from "@/types/typography";
import React from "react";
import { Text as RNText, TextStyle } from "react-native";

export default function Typography({
  variant = "body1",
  color,
  style,
  align = "left",
  children,
  ...props
}: TypographyComponentProps) {
  const { theme } = useTheme();

  const variantStyle = theme.typography[variant];
  const textColor = color || theme.palette.text.primary;

  const combinedStyle: TextStyle = {
    ...variantStyle,
    color: textColor,
    textAlign: align,
    ...(Array.isArray(style) ? Object.assign({}, ...style) : style),
  };
  return (
    <RNText style={combinedStyle} {...props}>
      {children}
    </RNText>
  );
}
