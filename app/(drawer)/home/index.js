import { Text, View, StyleSheet, Button } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { router } from 'expo-router';
import { StartNotification } from "../../login/Notification/StartNotification";

export default function HomePage() {

  const navi = () => {
    router.push("/Awareness")
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
        <Button title='Router to awareness' onPress={navi}/>
        <Button title='noti to awareness' onPress={StartNotification}/>
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