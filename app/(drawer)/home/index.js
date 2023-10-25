import { Text, View, StyleSheet, Button } from "react-native";
import React, { useState, useEffect } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { router } from 'expo-router';
import { auth, db } from "../../login/firebase/firebase";
import { DocumentSnapshot, Firestore, doc, getDoc } from "firebase/firestore";

export default function HomePage() {

  const naviToAwareness = () => {router.push("/Awareness")};
  const naviToWellness = () => {router.push("/Wellness")};
  const naviToGoal = () => {router.push("/Daily%20Goal")};
  const [userName, setUserName] = useState(null);

  const user = auth.currentUser;

  const getData = async () => {
    const uid = user.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    console.log("getData UID " + uid);
    if (docSnap.exists()) {
      const docSnapName = docSnap.data().Name;
      //const docSnapEmail = docSnap.data().Email;
      console.log("Document data:" , docSnap.data());
      setUserName(docSnapName);
      //setUserEmail(docSnapEmail);

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
          title: "Home",            
          headerShown: true,
          headerLeft: () => <DrawerToggleButton tintColor="white" />,
        }}
      />

        {/* welcome back user */}
        <View style={styles.WelcomeContainer}>
          <Text style={{ fontSize: 40, color: "white"}}>Hello {userName} </Text>
          <Text style={{ fontSize: 40, color: "white" }}>Welcome back !!! </Text>
        </View>

        <View style={styles.DailyGoalContainer}>
          <Text style={{ fontSize: 40, color: "white"}}> Daily Goal Progress </Text>
          <Text style={styles.Words}> (OTW building) </Text>
        </View>

        <Text style={{ fontSize: 40, color: "white", paddingTop: 100}}> Categories </Text>

        <View style={styles.ButtonContainer}>
          <Button title='Awareness' onPress={naviToAwareness}/>
          <Button title='Wellness' onPress={naviToWellness}/>
          <Button title='Daily Goal' onPress={naviToGoal}/>
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    //justifyContent: "center",
  },
  WelcomeContainer: {
    alignItems: "center",
    marginBottom: 30,
    marginTop: 30,
    justifyContent: "center",
  },
  ButtonContainer: {
    alignItems: "center",
    marginTop: 20,
    justifyContent: "center",
    marginBottom: 10,
  },
  DailyGoalContainer: {
    alignItems: "center",
    //marginTop: 1,
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "grey"
  },
  Words:{
    color: "white",
    justifyContent: "center",
    //alignItems: "center",
    fontSize: 40,

  }
});