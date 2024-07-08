import { ThemedView } from "@/components/ThemedView";
import { TopBar } from "@/components/TopBar";
import { EvilIcons, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  // const colorScheme = useColorScheme();

  return (
    <ThemedView
      style={{ flex: 1, flexDirection: "column", backgroundColor: "#5B371D" }}
    >
      <TopBar></TopBar>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "white",
          headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome size={32} name="home" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarIcon: ({ color }) => (
              <EvilIcons name="plus" size={38} color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="person-circle-outline" size={32} color={color} />
            ),
          }}
        />
      </Tabs>
    </ThemedView>
  );
}
