import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
//import { useLocalNotification } from "./hooks/useLocalNotification"
import { Link, router } from 'expo-router';
import moment from 'moment';

export const StartGoalNotification = (Goal) => {

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
      });

      const linkToAwarenessPages = [
        {
          PageTopic : '🚨 Antimicrobial Resistance Alert! 🚨',
          bodyText : "\n Did you know that antimicrobial resistance is an urgent global public health threat and was associated with nearly 5 million deaths in 2019. Let's learn more about AMR and combat this critical issue together. Your awareness matters! \n \n Click to learn more!",
          urlPages : '/Awareness/AMR'
        },
        {
          PageTopic : '💡 Infection Control Tip!💡',
          bodyText : "\n Did you know that ventilator breathing circuits and tubing MUST NOT be routinely changed for infection control purposes. The best practice is to change the circuit only when it's visibly soiled (KKM, 2018). Stay informed, stay safe! \n \n Click to learn more!",
          urlPages : '/Awareness/Breathing%20Circuit'
        },
      ];


      async function scheduleAwarenessNotification() {
        
        for (let i = 1; i <=5; i++) { 
          
          //calculate next tuesday at 8am
          const notificationDate = moment()
          .day("Tuesday")
          .hour(8)
          .minute(0)
          .second(0) 
          .millisecond(0)
          .add(i - 1, 'weeks')
          .toDate();

          const notificationSeconds = moment().add(i + 5, 'seconds').toDate();
          
          //every next day from the set reminder date
          const ReminderDate = moment().add(i-1,'days').toDate();

          await Notifications.scheduleNotificationAsync({
            content: {
             title: '🚨 30 days challenge !! Today is Day '+ i + ',keep it up 💪',
              body: 'Your goal :' + Goal ,
              data:  { url: '/Daily%20Goal'},
            },
            trigger: {
               date: notificationSeconds,
            },
         });
        }
      };

      return(
        scheduleAwarenessNotification()
      );
}