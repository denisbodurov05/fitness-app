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
  const renderIcon = () => {
    switch (routeName) {
      case "home":
        return (
          <AnimatedTabBarIcon
            library="Octicons"
            name="home-fill"
            focused={isFocused}
          />
        );
      case "workout":
        return (
          <AnimatedTabBarIcon
            library="MaterialIcons"
            name="fitness-center"
            focused={isFocused}
          />
        );
      case "nutrition":
        return (
          <AnimatedTabBarIcon
            library="MaterialCommunityIcons"
            name="food-apple"
            focused={isFocused}
          />
        );
      case "statistics":
        return (
          <AnimatedTabBarIcon
            library="FontAwesome6"
            name="chart-simple"
            focused={isFocused}
          />
        );
      case "achievements":
        return (
          <AnimatedTabBarIcon
            library="FontAwesome6"
            name="medal"
            focused={isFocused}
          />
        );
      default:
        return (
          <AnimatedTabBarIcon
            library="Octicons"
            name="home-fill"
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
