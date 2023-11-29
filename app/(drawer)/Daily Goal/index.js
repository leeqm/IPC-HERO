import { Text, View, StyleSheet, ScrollView, TextInput, Button, Modal, Pressable} from "react-native";
import React, { useState } from 'react';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { StartGoalNotification } from "../../login/Notification/StartDailyGoalNotification";
import CountDown from 'react-native-countdown-component';
import { auth, db } from "../../login/firebase/firebase";
import { DocumentSnapshot, Firestore, doc, getDoc, setDoc } from "firebase/firestore";

export default function GoalPage() {

  const [reminderText, setReminderText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [counterRunning, setCounterRunning] = useState(false);


  const user = auth.currentUser;

  const UploadUserGoal = () => {
    const uid = user.uid;
    setDoc(doc(db, "users", uid), {
      Goal: reminderText,
    }, {merge:true} );

  }

  const GoalText = reminderText;

  const handleNotification = () => {
    if (reminderText) {
      //setNotification(reminderText);
      //const GoalText = reminderText;
      StartGoalNotification (GoalText);
      console.log(reminderText);
      setCounterRunning(true);
      setModalVisible(false);
      UploadUserGoal();
    } 
  }

  const counterFinish = () => {
    
  }

    return (
        <View style={styles.container}>
  
          <Drawer.Screen
          options={{
            title: "Daily Goal",            
            headerShown: true,
            headerLeft: () => <DrawerToggleButton tintColor="white"/>,
          }}
          />

          <ScrollView>
          {/* Header Words Intro */}
          <View style={{ backgroundColor: "grey", marginVertical: 30, marginHorizontal: 10}} > 
            <Text style={{ color: "black", fontSize: 20, padding: 50 }}>30 days to form a new habits</Text>
          </View>

          {/* Your Daily Goal: */}
          <View style={{ backgroundColor: "grey", marginVertical: 10, marginHorizontal: 10}} > 
            <Text style={{ color: "black", fontSize: 40, paddingHorizontal: 20, paddingVertical: 20 }}>Your Daily Goal :</Text>
            <Text style={{ color: "black", fontSize: 20,paddingHorizontal: 20, paddingVertical: 20 }}> {reminderText} </Text>
            <Button title="Set your goal" onPress={() => setModalVisible(true)}/>
          </View>

          {/* Set Your Goal */}
            <View style={{paddingHorizontal:70, paddingVertical: 30}}>

              <Modal visible={modalVisible} transparent={true}> 
              <View style={styles.modal}>
                <Text style={{ color: "black", fontSize: 30 }}>Your Daily Goal: </Text>
                <TextInput
                  style={{ height: 40, borderColor: 'grey', borderWidth: 1,color: 'black', marginVertical: 20, paddingHorizontal: 40 }}
                  onChangeText={text => setReminderText(text)}
                  value={reminderText}
                  placeholder="Enter your daily goal"
                  placeholderTextColor= "grey"
                  multiline= {true}
               />
                <View style={{ paddingVertical: 10}}>
                <Button title="Start 30 days journey" style={{  }} onPress={handleNotification}/>
                </View>
                <Button title="Close" onPress={() => setModalVisible(false)}/>
              </View>
             </Modal> 
            </View>
      

          {/* Countdown Progress Bar */}
          <View> 
            <Text style={{ color: "white", fontSize: 30, marginTop: 50}}> Days Left From 30 Days :  </Text>
  
          </View>
          <View style={styles.DailyGoalContainer}>
            <CountDown
              until={60*60*24*30}
              onFinish={counterFinish()}
              //onPress={() => alert('hello')}
              size={40}
              timeToShow={['D','H','M','S']}
              running = {counterRunning}
            />

          </View>
        </ScrollView>
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
  DailyGoalContainer: {
    alignItems: "center",
    //marginTop: 1,
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "grey",
    marginVertical: 20,
  },
  modal:{
    margin: 20,
    height: 600,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  }
});