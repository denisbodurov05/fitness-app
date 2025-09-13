import Header from "@/components/navigation/Header";
import TabBar from "@/components/navigation/TabBar";
import { useTheme } from "@/providers";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const { theme } = useTheme();

  const handleAvatarPress = () => {
    console.log("Avatar pressed");
  };

  const handleNotificationPress = () => {
    console.log("Notifications pressed");
  };

  const sharedHeaderOptions = {
    headerShown: true,
    header: () => (
      <Header
        userName="John Doe"
        onAvatarPress={handleAvatarPress}
        onNotificationPress={handleNotificationPress}
        hasUnreadNotifications={true} // Mock notification state
      />
    ),
  };

  return (
    <Tabs
      tabBar={(props) => <TabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          ...sharedHeaderOptions,
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
          ...sharedHeaderOptions,
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrition",
          ...sharedHeaderOptions,
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Statistics",
          ...sharedHeaderOptions,
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: "Achievements",
          ...sharedHeaderOptions,
        }}
      />
    </Tabs>
  );
}
