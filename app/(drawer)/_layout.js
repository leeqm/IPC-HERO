import { Drawer } from "expo-router/drawer";
import Ionicons from "@expo/vector-icons/Ionicons"

export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{ headerShown: false, swipeEdgeWidth : 0}}
    >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon : ({size, color}) => {
          return <Ionicons name="md-home" size={size} color={color} />
          },
        }}
      />

      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          title: "Profile",
        }}
      />

      <Drawer.Screen
        name="Awareness"
        options={{
          drawerLabel: "Awareness",
          title: "Awareness",
        }}
      />

      <Drawer.Screen
        name="Wellness"
        options={{
          drawerLabel: "Wellness",
          title: "Wellness",
        }}
      />

      <Drawer.Screen
        name="Daily Goal"
        options={{
          drawerLabel: "Daily Goal",
          title: "Daily Goal",
        }}
      />
    </Drawer>
  );
}