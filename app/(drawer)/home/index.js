import { Text, View, StyleSheet, Button, Pressable, Image, StatusBar, ScrollView, Dimensions } from "react-native";
import React, { useState, useEffect, useFo } from "react";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { router, Link } from 'expo-router';
import { auth, db } from "../../login/firebase/firebase";
import { DocumentSnapshot, Firestore, doc, getDoc } from "firebase/firestore";
import { Card} from 'react-native-paper';

const { w, h } = Dimensions.get("window");

export default function HomePage() {

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
      <StatusBar 
        hidden = {true}
        backgroundColor="white"
      />

        {/* welcome back user */}
        <View style={styles.WelcomeContainer}>
          <Text style={{ fontSize: 30, color: "white", fontWeight:"bold"}}>Hello {userName} </Text>
          <Text style={{ fontSize: 30, color: "white", fontWeight:"bold"}}>Welcome back !!! </Text>
        </View>

        <View style={styles.DailyGoalContainer}>
          <Text style={{ fontSize: 20, color: "white"}}> Your daily goal: </Text>
          <View style={styles.roundContainer}>
            {/*<Text style={styles.Words}> i wiwl jsjdf jfddfk skdkf kdfkdfk dkfkd kfff frfrfr rg </Text>*/}
            <Text style={styles.Words}> {userGoal} </Text>
          </View>
        </View>


        {/* create card for link to  4 pages */}

        <View style={styles.ButtonContainer}>
        <Text style={{ fontSize: 20, color: "white", marginTop:10}}> Overview </Text>

        <ScrollView style={styles.ScrollContainer} horizontal>

        <Card style={styles.card} mode="elevated" onPress={()=>alert("Go to Menu ≡ at upper left corner to start explore!!")}>
          <Card.Cover style={styles.CardImage} source={require("./assets/awareness_card.png")} />
          <Card.Title title="Awareness"  />
          <Card.Content>
            <Text >Equip yourself with the basics of infection prevention & control</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card} mode="elevated" onPress={()=>alert("Go to Menu ≡ at upper left corner to start explore!!")}>
          <Card.Cover style={styles.CardImage} source={require("./assets/wellness.png")} />
          <Card.Title title="Wellness"  />
          <Card.Content>
            <Text >Life is full of ups and downs, fuel yourself with positive words</Text>
          </Card.Content>
        </Card>

        <Card style={styles.card} mode="elevated" onPress={()=>alert("Go to Menu ≡ at upper left corner to start explore!!")}>
          <Card.Cover style={styles.CardImage} source={require("./assets/goal_card.png")} />
          <Card.Title title="Daily Goal"  />
          <Card.Content>
            <Text >Set your goal and take up the 30-day challenge to improve IPC</Text>
          </Card.Content>
        </Card>

        </ScrollView>
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
    flex: 0.8,
    //alignItems: "center",
    marginBottom: 20,
    justifyContent: "center",
  },
  ButtonContainer: {
    flex: 1.8,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginLeft:10
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
    //paddingTop: 13
  },  
  Image: {
    width: "100%",
    height:"100%",
    resizeMode:"contain"
  },
  ButtonRow:{
    height: "40%",
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
  },
  ScrollContainer:{
    
  },
  CardImage:{
    //width: 100,
    aspectRatio:1.5,
    height: 100,
  },
  card: {
    //marginTop: 10,
    width: 200,
    marginHorizontal: 5,
    marginVertical: 5,
  },
  cardImage:{
    width: 100,
    height: 100,
  }
});