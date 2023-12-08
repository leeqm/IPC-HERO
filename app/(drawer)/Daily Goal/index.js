import { Text, View, StyleSheet, ScrollView, Image, TextInput, Button, Modal, Pressable} from "react-native";
import React, { useState, useEffect } from 'react';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { StartGoalNotification } from "../../login/Notification/StartDailyGoalNotification";
import CountDown from 'react-native-countdown-component';
import { auth, db } from "../../login/firebase/firebase";
import { DocumentSnapshot, Firestore, doc, getDoc, setDoc } from "firebase/firestore";
import moment, { Moment } from "moment";

export default function GoalPage() {

  const [reminderText, setReminderText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [counterRunning, setCounterRunning] = useState(false);
  const [userGoal, setUserGoal] = useState('');
  const [goalStartTime, setGoalStartTime] = useState(''); 
  const [goalCreateTime, setGoalCreateTime] = useState(''); 
  const [countdownInSeconds, setCountdownInSeconds] = useState('');

  const user = auth.currentUser;

  const UploadUserGoal = () => {
    const uid = user.uid;
    setDoc(doc(db, "users", uid), {
      Goal: reminderText,
    }, {merge:true} );
  };

  const UploadGoalStartTime = (time) => {
    const uid = user.uid;
    //console.log("goalStartTime",goalStartTime);
    setDoc(doc(db, "users", uid), {
      GoalStartTime: time,
    }, {merge:true} );
    
  };

  const GoalText = reminderText;

  const handleNotification = async() => {
    if (reminderText) {
      StartGoalNotification (GoalText); // start local push notification with user's goal
      console.log(reminderText);
      setModalVisible(false);                    // close text input modal
      UploadUserGoal();                         // upload goal to firestore
      //doAtStartTime();                            // get current time as goalStartTime
      //setCounterRunning(true);                   // start count down
    }};


  const getUserGoalStartTime = async () => {
    const uid = user.uid;
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);

    console.log("getData UID " + uid);

    if (docSnap.exists()) {
      const UserGoal = docSnap.data().Goal;
      const StartTime = docSnap.data().GoalStartTime;
      console.log("Document data:" , docSnap.data()); 
      setGoalCreateTime(StartTime);
      setUserGoal(UserGoal);
      setReminderText(UserGoal);
    } else {
      console.log("No such document!");
    }
  };

  const getCountDownSeconds =()=> {
    const nowTime =  moment().format('YYYY-MM-DD HH:mm:ss');
    const endTime = moment(goalCreateTime).add(30, 'days');
    const secondsDifference =  endTime.diff(nowTime, 'seconds');
    setCountdownInSeconds(secondsDifference);
    console.log("Count down seconds",countdownInSeconds);
    console.log('goalStartTime', goalCreateTime);
    console.log('nowTime', nowTime);
    console.log('endtime', endTime);
  };

  const getStartTime = ()=> {
    const StartTime = moment().format('YYYY-MM-DD HH:mm:ss');
    setGoalStartTime(StartTime);
    //UploadGoalStartTime(StartTime);
    console.log("start time",StartTime);
    console.log("goalStartTime",goalStartTime);
  };

  const doAtStartTime =() => {
    const StartTime = moment().format('YYYY-MM-DD HH:mm:ss');
    UploadGoalStartTime(StartTime);
    const endTime = moment().add(30, 'days');
    const secondsDifference =  endTime('seconds');
    setCountdownInSeconds(secondsDifference);
    console.log('nowTime', nowTime);
  }

  useEffect(() => {
    getUserGoalStartTime();
    //UploadGoalStartTime();
    //if(!goalStartTime===""){setCounterRunning(true)};
  }, []);


    return (
        <View style={styles.container}>
  
          <Drawer.Screen
          options={{
            title: "Daily Goal",            
            headerShown: true,
            headerLeft: () => <DrawerToggleButton tintColor="white"/>,
          }}
          />

          {/* Header Words Intro */}
          <View style={styles.IntroContainer} > 
            <Image 
              style={styles.Image}
              source={require("../home/assets/dailygoal.png")}
            />
            <Text style={{ fontSize: 25, color: "white", fontWeight:"bold" }}>30 days to form a new habit</Text>
          </View>

          {/* Your Daily Goal: */}
          <View style={styles.SetGoalContainer} > 
            <Text style={{ flex:1,color: "black", fontSize: 20, fontWeight:"bold", paddingHorizontal: 10, paddingVertical:5 }}>Your Daily Goal :</Text>
            <Text style={{ flex:2.5,color: "black",paddingHorizontal: 20, paddingVertical: 10 }}> {reminderText} </Text>
            <Pressable style={styles.button} onPress={() => setModalVisible(true)}>
              <Text style={styles.buttonText}>Set your goal</Text>
            </Pressable>
          </View>

          {/* Set Your Goal Modal*/}
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

      

          {/* Countdown Progress Bar 
          <View style={styles.countDownContainer}>
            <Text style={{ color: "black", fontWeight:"bold", fontSize: 20, marginVertical:5 }}> Days Left From 30 Days : </Text>
            <Text>{countdownInSeconds}</Text>
            <CountDown
              until={countdownInSeconds}
              onFinish={counterFinish()}
              digitStyle={{backgroundColor: '#1979EB'}}
              //onPress={() => alert('hello')}
              size={30}
              timeToShow={['D','H','M']}
              running = {counterRunning}
            />

          </View>*/}
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    //justifyContent: "center",
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
  },
  IntroContainer:{
    flex: 1,
    marginBottom: 15,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent:"center"
  },
  SetGoalContainer:{
    flex: 1,
    width: "90%",
    backgroundColor: '#D9D9D9', 
    marginBottom: 15,
    marginTop: 10,
    marginHorizontal: 10,
    borderRadius: 10, 
    alignContent: "center",
    alignItems: "center"
  },
  countDownContainer: {
    flex:1,
    width: "90%",
    backgroundColor: '#D9D9D9', 
    borderRadius: 10, 
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  Image:{
    width:250,
    height:300,
    resizeMode:"contain"
  },
  button:{
    flex:1,
    width: "50%",
    backgroundColor: '#1979EB', 
    borderRadius: 10, 
    paddingVertical: 8,
    paddingHorizontal: 20,
    margin: 10,
    justifyContent: "center",
    alignItems:"center"
  },
  buttonText:{
    fontWeight: 'bold',
    fontSize: 15,
    //marginBottom: 1
}}
);