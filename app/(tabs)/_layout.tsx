import { Tabs } from 'expo-router';
import React from 'react';

import Icon, { IconLibrary, IconName } from '@/components/Icon';
import Colors from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';

// Flexible TabBarIcon using our new Icon component
function TabBarIcon<T extends IconLibrary>({ 
  library, 
  name, 
  color 
}: { 
  library: T; 
  name: IconName<T>; 
  color: string; 
}) {
  return (
    <Icon 
      library={library} 
      name={name} 
      size={28} 
      color={color} 
      style={{ marginBottom: -3 }} 
    />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: false, // We'll handle headers in individual stack navigators
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => (
            <TabBarIcon library="FontAwesome" name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="workout"
        options={{
          title: 'Workout',
          tabBarIcon: ({ color }) => (
            <TabBarIcon library="MaterialIcons" name="fitness-center" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="statistics"
        options={{
          title: 'Statistics',
          tabBarIcon: ({ color }) => (
            <TabBarIcon library="Ionicons" name="stats-chart" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="achievements"
        options={{
          title: 'Achievements',
          tabBarIcon: ({ color }) => (
            <TabBarIcon library="FontAwesome" name="trophy" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
