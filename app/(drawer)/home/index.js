import { Text, View, StyleSheet, Button, Pressable, Image } from "react-native";
import React, { useState, useEffect } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { router, Link } from 'expo-router';
import { auth, db } from "../../login/firebase/firebase";
import { DocumentSnapshot, Firestore, doc, getDoc } from "firebase/firestore";




export default function HomePage() {

  const naviToAwareness = () => {router.push("/Awareness")};
  const naviToWellness = () => {router.push("/Wellness")};
  const naviToGoal = () => {router.push("/Daily%20Goal")};
  const naviToProfile = () => {router.push("/profile")};
  const [userName, setUserName] = useState(null);
  const [userGoal, setUserGoal] = useState("");

  const user = auth.currentUser;

  const getData = async () => {
    const uid = user.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    console.log("getData UID " + uid);
    if (docSnap.exists()) {
      const docSnapName = docSnap.data().Name;
      const UserGoal = docSnap.data().Goal;
      //const docSnapEmail = docSnap.data().Email;
      console.log("Document data:" , docSnap.data());
      setUserName(docSnapName);
      setUserGoal(UserGoal);
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
          <Text style={{ fontSize: 40, color: "white", fontWeight:"bold"}}>Hello {userName} </Text>
          <Text style={{ fontSize: 40, color: "white", fontWeight:"bold"}}>Welcome back !!! </Text>
        </View>

        <View style={styles.DailyGoalContainer}>
          <Text style={{ fontSize: 30, color: "white"}}> Your daily goal: </Text>
          <View style={styles.roundContainer}>
            {/*<Text style={styles.Words}> i wiwl jsjdf jfddfk skdkf kdfkdfk dkfkd kfff frfrfr rg </Text>*/}
            <Text style={styles.Words}> {userGoal} </Text>
          </View>
        </View>


        {/* create card for link to  4 pages */}

        <View style={styles.ButtonContainer}>
        <Text style={{ fontSize: 30, color: "white"}}> Categories </Text>
          <View style={styles.ButtonRow}>
            <Pressable style={styles.button} onPress={naviToAwareness}>
            <Image 
              style={styles.Image}
              source={require("./assets/awareness_card.png")}
            />
            <Text style={styles.buttonText}>Awareness</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={naviToWellness}>
            <Image 
              style={styles.Image}
              source={require("./assets/wellness.png")}
            />
            <Text style={styles.buttonText}>Wellness</Text>
            </Pressable>
          </View>

          <View style={styles.ButtonRow}>
            <Pressable style={styles.button} onPress={naviToGoal}>
            <Image 
              style={styles.Image}
              source={require("./assets/goal_card.png")}
            />
            <Text style={styles.buttonText}>Daily Goal</Text>
            </Pressable>

            <Pressable style={styles.button} onPress={naviToProfile}>
            <Image 
              style={styles.Image}
              source={require("./assets/profile.png")}
            />
            <Text style={styles.buttonText}>Profile</Text>
            </Pressable>
            </View>
        
        </View>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width:"100%",
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    //justifyContent: "center",
  },
  WelcomeContainer: {
    flex: 1,
    //alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
  },
  ButtonContainer: {
    flex: 3.5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  DailyGoalContainer: {
    width:"100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  Words:{
    color: "black",
    justifyContent: "center",
    //alignItems: "center",
    fontSize: 16,
    alignItems: "center"
  },
  NaviCard:{
    color: "white",
  },
  button: {
    width: "40%",
    backgroundColor: '#D9D9D9', 
    borderRadius: 10, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
    justifyContent: "center",
    alignItems:"center"
  },
  buttonText: {
    color: 'black', // You can customize the text color
    fontSize: 16,
    fontWeight: "bold",
    paddingTop: 13
  },  
  Image: {
    width:70,
    height:90,
  },
  ButtonRow:{
    flexDirection:"row",
    justifyContent: "center",
    //alignContent: "center",
    alignItems: "center"
  },
  roundContainer:{
    backgroundColor: '#D9D9D9', 
    borderRadius: 10, 
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    width: "90%",
    height: "100%",
    alignItems:"center",
    justifyContent: "center"

  }
});