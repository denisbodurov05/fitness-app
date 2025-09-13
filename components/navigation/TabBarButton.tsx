import { useTheme } from "@/providers";
import React from "react";
import { Pressable } from "react-native";
import AnimatedTabBarIcon from "./AnimatedTabBarIcon";

interface TabBarButtonProps {
  onPress: () => void;
  onLongPress: () => void;
  isFocused: boolean;
  routeName: string;
}

const TabBarButton = ({
  onPress,
  onLongPress,
  isFocused,
  routeName,
}: TabBarButtonProps) => {
  const { theme } = useTheme();
  const color = isFocused
    ? theme.palette.primary.main
    : theme.palette.secondary[400];

  const renderIcon = () => {
    switch (routeName) {
      case "home":
        return (
          <AnimatedTabBarIcon
            library="Octicons"
            name="home-fill"
            color={color}
            focused={isFocused}
          />
        );
      case "workout":
        return (
          <AnimatedTabBarIcon
            library="MaterialIcons"
            name="fitness-center"
            color={color}
            focused={isFocused}
          />
        );
      case "nutrition":
        return (
          <AnimatedTabBarIcon
            library="MaterialCommunityIcons"
            name="food-apple"
            color={color}
            focused={isFocused}
          />
        );
      case "statistics":
        return (
          <AnimatedTabBarIcon
            library="FontAwesome6"
            name="chart-simple"
            color={color}
            focused={isFocused}
          />
        );
      case "achievements":
        return (
          <AnimatedTabBarIcon
            library="FontAwesome6"
            name="medal"
            color={color}
            focused={isFocused}
          />
        );
      default:
        return (
          <AnimatedTabBarIcon
            library="Octicons"
            name="home-fill"
            color={color}
            focused={isFocused}
          />
        );
    }
  };

  return (
    <Pressable
      onPress={onPress}
      onLongPress={onLongPress}
      style={{
        flex: 1,
        height: 70,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {renderIcon()}
    </Pressable>
  );
};

export default TabBarButton;
