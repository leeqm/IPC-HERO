import { Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { auth, db } from "../../login/firebase/firebase";
//import { doc, getDoc } from "../../login/firebase/firestore";
import Colors from "../../login/constants/Colors";
import { router } from 'expo-router';
export default function ProfilePage() {

  const handleSignout = async () => {
    await auth.signOut();
    router.replace('/login/loginStack')
  };

  const Modal = () => {
    Alert.alert("Alert", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "Logout", onPress: handleSignout },
    ]);
  };

  return (
      <View style={styles.container}>

        <Drawer.Screen
        options={{
          title: "Profile",             
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
        <Text style={{ fontSize: 24 }}>Profile Page</Text>
        <Text style={{ fontSize: 25 }}>Welcome Fam!</Text>
        <View>
        <TouchableOpacity style={styles.button} onPress={Modal}>
          <Text style={{ color: Colors.white, fontSize: 20 }}>Sign out</Text>
        </TouchableOpacity>
        </View>
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
  button: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 8,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    width: 200,
    marginTop: 30,
  },
});