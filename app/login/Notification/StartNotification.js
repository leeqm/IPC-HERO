import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import * as Notifications from 'expo-notifications';
//import { useLocalNotification } from "./hooks/useLocalNotification"
import { Link, router } from 'expo-router';
import moment from 'moment';

export const StartNotification = () => {

    Notifications.setNotificationHandler({
        handleNotification: async () => ({
          shouldShowAlert: true,
          shouldPlaySound: true,
          shouldSetBadge: false,
        }),
      });

      const linkToDifferentPages = [
        {
          Page : 'Details 1',
          bodyText : "This will links to Details 1. Please click here.",
          urlPages : '/Awareness/AMR'
        },
        {
          Page : 'Details 2',
          bodyText : "This will links to Details 2. Please click here.",
          urlPages : '/Awareness/Breathing Circuit'
        },
      ]

      async function schedulePushNotification() {
        
        for (let i = 0; i <=2; i++) { 
          
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

          await Notifications.scheduleNotificationAsync({
            content: {
             title: "You've got mail! 📬",
              body: linkToDifferentPages[i].bodyText,
              data:  {url: linkToDifferentPages[i].urlPages },
            },
            trigger: {
               date: notificationSeconds,
            },
         });
        }
      };


      return(
        schedulePushNotification()
      );




}