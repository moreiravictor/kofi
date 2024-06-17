import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import SignInScreen from '..';
import { Slot, Stack, Tabs } from 'expo-router';
import Home from './home';
import { AntDesign, EvilIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { TopBar } from '@/components/TopBar';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemedView style={{flex: 1, flexDirection: "column", backgroundColor: "#5B371D"}}>
      <TopBar></TopBar>
      <Tabs screenOptions={{ tabBarActiveTintColor: 'white', headerShown: false, tabBarShowLabel: false }}>
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => <FontAwesome size={32} name="home" color={color} />,
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color }) => <EvilIcons name="plus" size={38} color={color} />,
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => <Ionicons name="person-circle-outline" size={32} color={color} />,
          }}
        />
      </Tabs>
    </ThemedView>
  );
}
