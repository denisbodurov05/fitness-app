import HomeHeader from "@/components/navigation/HomeHeader";
import TabBar from "@/components/navigation/TabBar";
import { Tabs } from "expo-router";
import React from "react";

export default function TabLayout() {
  const handleAvatarPress = () => {
    console.log("Avatar pressed");
  };

  const handleNotificationPress = () => {
    console.log("Notifications pressed");
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
          headerShown: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: "transparent",
          },
          header: () => (
            <HomeHeader
              userName="John Doe"
              onAvatarPress={handleAvatarPress}
              onNotificationPress={handleNotificationPress}
              hasUnreadNotifications={true}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: "Workout",
        }}
      />
      <Tabs.Screen
        name="nutrition"
        options={{
          title: "Nutrition",
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: "Statistics",
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: "Achievements",
        }}
      />
    </Tabs>
  );
}
