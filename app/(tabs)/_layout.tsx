import { Tabs } from "expo-router";
import React from "react";

import TabBar from "@/components/navigation/TabBar";

export default function TabLayout() {
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
