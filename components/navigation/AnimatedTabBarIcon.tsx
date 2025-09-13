import Icon, { IconLibrary, IconName } from "@/components/Icon";
import Colors from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import React, { useEffect } from "react";
import { View } from "react-native";
import Animated, {
  Easing,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

interface AnimatedTabBarIconProps<T extends IconLibrary> {
  library: T;
  name: IconName<T>;
  color: string;
  focused: boolean;
}

export default function AnimatedTabBarIcon<T extends IconLibrary>({
  library,
  name,
  color,
  focused,
}: AnimatedTabBarIconProps<T>) {
  const colorScheme = useColorScheme();
  const scale = useSharedValue(0);
  const iconScale = useSharedValue(1);

  useEffect(() => {
    if (focused) {
      scale.value = withTiming(1, {
        duration: 200,
        easing: Easing.out(Easing.cubic),
      });
      iconScale.value = withTiming(1.2, {
        duration: 200,
        easing: Easing.out(Easing.cubic),
      });
    } else {
      scale.value = withTiming(0, {
        duration: 200,
        easing: Easing.out(Easing.cubic),
      });
      iconScale.value = withTiming(1, {
        duration: 200,
        easing: Easing.out(Easing.cubic),
      });
    }
  }, [focused]);

  const animatedBackgroundStyle = useAnimatedStyle(() => {
    const backgroundColor = Colors[colorScheme ?? "light"].tint; // TODO change this color when theme is implemented
    const scaleX = interpolate(scale.value, [0, 1], [0, 1.3]);
    const scaleY = interpolate(scale.value, [0, 1], [0, 1.2]);

    return {
      transform: [{ scaleX }, { scaleY }],
      backgroundColor: backgroundColor + "25", // TODO change this color when theme is implemented
      opacity: interpolate(scale.value, [0, 1], [0, 1]),
    };
  });

  const animatedIconStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: iconScale.value }],
    };
  });

  return (
    <View
      style={{ alignItems: "center", justifyContent: "center", height: 50 }}
    >
      <View
        style={{
          position: "relative",
          alignItems: "center",
          justifyContent: "center",
          height: 50,
          width: 50,
        }}
      >
        {/* Animated Background */}
        <Animated.View
          style={[
            {
              position: "absolute",
              width: 50,
              height: 50,
              borderRadius: 20,
              zIndex: 0,
            },
            animatedBackgroundStyle,
          ]}
        />

        {/* Animated Icon */}
        <Animated.View
          style={[
            {
              zIndex: 1,
            },
            animatedIconStyle,
          ]}
        >
          <Icon
            library={library}
            name={name}
            size={28}
            color={focused ? Colors[colorScheme ?? "light"].tint : color}
          />
        </Animated.View>
      </View>
    </View>
  );
}
