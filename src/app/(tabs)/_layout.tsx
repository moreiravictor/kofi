import { ThemedView } from "@/src/components/ThemedView";
import { TopBar } from "@/src/components/TopBar";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <ThemedView
      style={{ flex: 1, flexDirection: "column", backgroundColor: "#28170A" }}
    >
      <TopBar></TopBar>
      <Tabs
        screenOptions={{
          tabBarStyle: { backgroundColor: "#33251C", borderTopWidth: 0 },
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons name="home-sharp" size={28} color="#E2D1C3" />
              ) : (
                <Ionicons name="home-outline" size={28} color="#E2D1C3" />
              ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <MaterialCommunityIcons
                  name="magnify-plus"
                  size={32}
                  color="#E2D1C3"
                />
              ) : (
                <MaterialCommunityIcons
                  name="magnify"
                  size={34}
                  color="#E2D1C3"
                />
              ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <AntDesign name="pluscircle" size={28} color="#E2D1C3" />
              ) : (
                <AntDesign name="pluscircleo" size={28} color="#E2D1C3" />
              ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ focused }) =>
              focused ? (
                <Ionicons
                  name="person-circle-sharp"
                  size={32}
                  color="#E2D1C3"
                />
              ) : (
                <Ionicons
                  name="person-circle-outline"
                  size={32}
                  color="#E2D1C3"
                />
              ),
          }}
        />
      </Tabs>
    </ThemedView>
  );
}
