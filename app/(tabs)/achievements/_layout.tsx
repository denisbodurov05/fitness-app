import { useTheme } from "@/providers";
import { Stack } from "expo-router";

export default function AchievementsLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.secondary.lighter,
        },
        headerTintColor: theme.secondary.darker,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Achievements",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
