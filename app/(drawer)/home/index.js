import { Text, View, StyleSheet, Button } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { router } from 'expo-router';

export default function HomePage() {

  const navi = () => {
    router.push("/profile")
  } 

  return (
      <View style={styles.container}>

        <Drawer.Screen
        options={{
          title: "Home",            
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
        <Text style={{ fontSize: 24 }}>Index page of Home Drawer</Text>
        <Button title='Router to details' onPress={navi}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});