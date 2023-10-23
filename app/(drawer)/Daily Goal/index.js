import { Text, View, StyleSheet, ScrollView, TextInput, Button } from "react-native";
import React, { useState } from 'react';
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";

export default function GoalPage() {

  const [reminderText, setReminderText] = useState('');
  
  const handleNotification = () => {
    if (reminderText) {
      setNotification(reminderText);
    }
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

          {/* Header Words Intro */}
          <View style={{ backgroundColor: "grey", marginVertical: 30, marginHorizontal: 10}} > 
            <Text style={{ color: "black", fontSize: 20, padding: 50 }}>30 days to form a new habits</Text>
          </View>

          {/* Your Daily Goal: */}
          <View style={{ backgroundColor: '#303030', marginVertical: 15, marginHorizontal: 10,}}>
            <View style={{paddingHorizontal:70, paddingVertical: 30}}>
              <Text style={{ color: "white", fontSize: 30 }}>Your Daily Goal: </Text>

              <TextInput
                style={{ height: 40, borderColor: 'grey', borderWidth: 1,color: 'white', marginVertical: 20, paddingHorizontal: 40 }}
                onChangeText={text => setReminderText(text)}
                value={reminderText}
                placeholder="Enter your daily goal"
                placeholderTextColor= "grey"
              />

              <Button title="Start 30 days journey" onPress={handleNotification}/>
            </View>
          </View>

          {/* Countdown Progress Bar */}
          <View> 
            <Text style={{ color: "white", fontSize: 30, marginTop: 50 }}> Progress Bar </Text>
            
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    //justifyContent: "center",
  },
});