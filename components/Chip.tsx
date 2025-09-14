import { useTheme } from "@/providers";
import { alpha } from "@/themes/style";
import React from "react";
import { StyleSheet, Text, TextStyle, View, ViewStyle } from "react-native";

export interface ChipProps {
  /**
   * The text to display in the chip
   */
  label: string;
  /**
   * The variant/style of the chip
   */
  variant?: "primary" | "secondary" | "success" | "warning" | "error";
  /**
   * Size of the chip
   */
  size?: "small" | "medium";
  /**
   * Custom style for the chip container
   */
  style?: ViewStyle;
  /**
   * Custom style for the text
   */
  textStyle?: TextStyle;
}

/**
 * A small, compact component for displaying short pieces of information
 */
export default function Chip({
  label,
  variant = "primary",
  size = "small",
  style,
  textStyle,
}: ChipProps) {
  const { theme } = useTheme();

  const getChipColors = () => {
    switch (variant) {
      case "primary":
        return {
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          color: theme.palette.primary.main,
        };
      case "secondary":
        return {
          backgroundColor: alpha(theme.palette.secondary.main, 0.1),
          color: theme.palette.secondary.main,
        };
      case "success":
        return {
          backgroundColor: alpha(theme.palette.success.main, 0.1),
          color: theme.palette.success.main,
        };
      case "warning":
        return {
          backgroundColor: alpha(theme.palette.warning.main, 0.1),
          color: theme.palette.warning.main,
        };
      case "error":
        return {
          backgroundColor: alpha(theme.palette.error.main, 0.1),
          color: theme.palette.error.main,
        };
      default:
        return {
          backgroundColor: alpha(theme.palette.primary.main, 0.1),
          color: theme.palette.primary.main,
        };
    }
  };

  const colors = getChipColors();
  const sizeStyles = size === "small" ? styles.small : styles.medium;

  return (
    <View
      style={[
        styles.chip,
        sizeStyles,
        { backgroundColor: colors.backgroundColor },
        style,
      ]}
    >
      <Text
        style={[
          styles.text,
          size === "small" ? styles.smallText : styles.mediumText,
          { color: colors.color },
          textStyle,
        ]}
      >
        {label}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  chip: {
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  small: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 8,
  },
  medium: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
  smallText: {
    fontSize: 10,
  },
  mediumText: {
    fontSize: 12,
  },
});
