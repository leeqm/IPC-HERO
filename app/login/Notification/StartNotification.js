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
          PageTopic : '🚨 Antimicrobial Resistance Alert! 🚨',
          bodyText : "\n Did you know that antimicrobial resistance is an urgent global public health threat and was associated with nearly 5 million deaths in 2019. Let's learn more about AMR and combat this critical issue together. Your awareness matters! \n \n Click to learn more!",
          urlPages : '/Awareness/AMR'
        },
        {
          PageTopic : '💡 Infection Control Tip!💡',
          bodyText : "\n Did you know that ventilator breathing circuits and tubing MUST NOT be routinely changed for infection control purposes. The best practice is to change the circuit only when it's visibly soiled (KKM, 2018). Stay informed, stay safe! \n \n Click to learn more!",
          urlPages : '/Awareness/Breathing%20Circuit'
        },
        {
          PageTopic : '💡 Did you know? 💡',
          bodyText : "\n There is NO NEED to routinely replace peripheral catheters within 72 to 96 hours, unless there are specific clinical reasons. This approach significantly reduces the risk of infection and phlebitis. Let's enhance patient outcomes and reduce unnecessary infections.\n\n Click to learn more!",
          urlPages : '/Awareness/Breathing%20Circuit'
        },
        {
          PageTopic : '🚨 Clinical Waste Management Alert! 🚨',
          bodyText : "\n Improper waste management can lead to severe infection transmission risks. Your commitment to appropriate waste disposal is vital in safeguarding lives. Dispose responsibly, curb infections!🛡️ \n \n Click to learn more!",
          urlPages : '/Awareness/Clinical%20Waste Management'
        },
        {
          PageTopic : '🦸 You are the IPC Hero! 🦸',
          bodyText : "\n Good infection prevention and control practices saves lives. Your efforts save lives every day. Be the hero your patients and loved ones need! 💪 \n \n Click to learn more!",
          urlPages : '/Awareness/IPC'
        },
        {
          PageTopic : '🦸 Have you wash your hands?🦸',
          bodyText : "\n Proper hand hygiene is your superpower. It’s the most important, simplest, and least expensive way of combat infections and save lives. \n \n Click to learn more!",
          urlPages : '/Awareness/Hand%20Hygiene'
        },
        {
          PageTopic : '💡 Fact Check 💡',
          bodyText : "\n Did you know urinary tract infection (UTI) is among the common types of healthcare-associated infection, and about 75% are linked to a urinary catheter? Stay informed, break the chain! 🧩. \n \n Click to learn more!",
          urlPages : '/Awareness/Urinary%20Cathether'
        },
        {
          PageTopic : '🚨  Critical Care Alert! 🚨',
          bodyText : "\n Ventilator patients face high risks, including ventilator-associated pneumonia (VAP), venous thromboembolism (VTE), and stress-induced gastrointestinal bleeding. Follow the 5-Element Ventilator Bundle to protect those in your care. \n \n Click to learn more!",
          urlPages : '/Awareness/Ventilator%20Care Bundle'
        },
      ]

      async function schedulePushNotification() {
        
        for (let i = 0; i <=8; i++) { 
          
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
             title: linkToDifferentPages[i].PageTopic,
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