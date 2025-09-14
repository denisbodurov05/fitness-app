import { useTheme } from "@/providers";
import React, { memo, useState } from "react";
import { Image, StyleProp, Text, View, ViewStyle } from "react-native";

export interface AvatarProps {
  /**
   * Avatar image URL
   */
  uri?: string;
  /**
   * Size of the avatar (width and height)
   * @default 50
   */
  size?: number;
  /**
   * Alternative text to display when image fails to load or no uri provided
   * Usually user initials (e.g., "JD" for John Doe)
   */
  alt?: string;
  /**
   * User's full name for generating initials automatically
   */
  name?: string;
  /**
   * Border radius override
   * @default size / 2 (circular)
   */
  borderRadius?: number;
  /**
   * Custom container style
   */
  style?: StyleProp<ViewStyle>;
}

/**
 * Simple optimized Avatar component that only re-fetches when URI changes
 */
const Avatar = memo<AvatarProps>(
  ({ uri, size = 50, alt, name, borderRadius, style }) => {
    const { theme } = useTheme();
    const [imageError, setImageError] = useState(false);

    // Generate initials from name if provided
    const initials = React.useMemo(() => {
      if (alt) return alt;
      if (!name) return "?";

      return name
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase())
        .slice(0, 2)
        .join("");
    }, [alt, name]);

    const radius = borderRadius ?? size / 2;
    const fontSize = Math.max(size * 0.3, 12);

    const containerStyle = {
      width: size,
      height: size,
      borderRadius: radius,
      backgroundColor: theme.palette.primary.main,
      alignItems: "center" as const,
      justifyContent: "center" as const,
      overflow: "hidden" as const,
    };

    const imageStyle = {
      width: size,
      height: size,
      borderRadius: radius,
    };

    const textStyle = {
      color: theme.palette.secondary.lighter,
      fontSize,
      fontWeight: "600" as const,
      textAlign: "center" as const,
    };

    // Reset error state when URI changes
    React.useEffect(() => {
      setImageError(false);
    }, [uri]);

    return (
      <View style={[containerStyle, style]}>
        {uri && !imageError ? (
          <Image
            source={{ uri }}
            style={imageStyle}
            onError={() => setImageError(true)}
          />
        ) : (
          <Text style={textStyle} numberOfLines={1}>
            {initials}
          </Text>
        )}
      </View>
    );
  }
);

Avatar.displayName = "Avatar";

export default Avatar;
