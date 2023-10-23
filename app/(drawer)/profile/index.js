import { Text, View, StyleSheet, Alert, TouchableOpacity } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { auth, db } from "../../login/firebase/firebase";
import { DocumentSnapshot, Firestore, doc, getDoc } from "firebase/firestore";
import Colors from "../../login/constants/Colors";
import { router } from 'expo-router';
import React, { useState, useEffect } from "react";


export default function ProfilePage() {

  const handleSignout = async () => {
    await auth.signOut();
    router.replace('/login/loginStack')
  };
  const [userData, setUserData] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const Modal = () => {
    Alert.alert("Alert", "Do you really want to logout", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
      },
      { text: "Logout", onPress: handleSignout },
    ]);
  };

  const user = auth.currentUser;

  if (user !== null) {
    const email = user.email;
    const uid = user.uid;
    console.log(" UID " + uid);

  }
  
   //get data from firestore
   const getData = async () => {
    const uid = user.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    console.log("getData UID " + uid);
    if (docSnap.exists()) {
      //const jsonToArrayData = JSON.parse(docSnap.data())
      const docSnapName = docSnap.data().Name;
      const docSnapEmail = docSnap.data().Email;
      console.log("Document data:" , docSnap.data());
      setUserName(docSnapName);
      setUserEmail(docSnapEmail);

    } else {
      console.log("No such document!");
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
      <View style={styles.container}>

        <Drawer.Screen
        options={{
          title: "Profile",             
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
        <Text style={{ fontSize: 24 }}>Welcome!!!</Text>
        <Text style={{ fontSize: 25 }}>{userName}</Text>
        <Text style={{ fontSize: 25 }}>{userEmail}</Text>

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