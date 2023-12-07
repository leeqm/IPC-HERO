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

      async function scheduleAwarenessNotification() {
        
        for (let i = 1; i <=30; i++) { 
          
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
               date: ReminderDate,
            },
         });
        }
      };

      return(
        scheduleAwarenessNotification()
      );
}