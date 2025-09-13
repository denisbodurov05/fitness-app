import { useTheme } from "@/providers";
import { Stack } from "expo-router";

export default function WorkoutLayout() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: theme.palette.secondary.lighter,
        },
        headerTintColor: theme.palette.secondary.darker,
        headerTitleStyle: {
          fontWeight: "bold",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Workout",
          headerShown: true,
        }}
      />
    </Stack>
  );
}
