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

      const linkToPages = [
        {
          PageTopic : 'Ronald Reagan',
          bodyText : "\n 💭 We can't help everyone, but everyone can help someone",
          urlPages : '/Wellness'
        },
        {
          PageTopic : '🚨 Antimicrobial Resistance Alert! 🚨',
          bodyText : "\n Did you know that antimicrobial resistance is an urgent global public health threat and was associated with nearly 5 million deaths in 2019. Let's learn more about AMR and combat this critical issue together. Your awareness matters! \n \n Click to learn more!",
          urlPages : '/Awareness/AMR'
        },
        {
          PageTopic : 'Al-Ghazali',
          bodyText : "\n 💭 To get what you love, you must first be patient with what you hate.",
          urlPages : '/Wellness'
        },
        {
          PageTopic : '💡 Infection Control Tip!💡',
          bodyText : "\n Did you know that ventilator breathing circuits and tubing MUST NOT be routinely changed for infection control purposes. The best practice is to change the circuit only when it's visibly soiled (KKM, 2018). Stay informed, stay safe! \n \n Click to learn more!",
          urlPages : '/Awareness/Breathing%20Circuit'
        },
        {
          PageTopic : 'Muhammad Ali',
          bodyText : "\n 💭 You dont lose if you get knocked down; you lose if you stay down.",
          urlPages : '/Wellness'
        },
        {
          PageTopic : '💡 Did you know? 💡',
          bodyText : "\n There is NO NEED to routinely replace peripheral catheters within 72 to 96 hours, unless there are specific clinical reasons. This approach significantly reduces the risk of infection and phlebitis. Let's enhance patient outcomes and reduce unnecessary infections.\n\n Click to learn more!",
          urlPages : '/Awareness/Breathing%20Circuit'
        },
        {
          PageTopic : 'William J.Clinton',
          bodyText : "\n 💭 If you live long enough, you'll make mistakes. But if you learn from them, you'll be a better person. It's how you handle adversity, not know it affects you. The main thing is never quit, never quit, never quit.",
          urlPages : '/Wellness'
        },
        {
          PageTopic : '🚨 Clinical Waste Management Alert! 🚨',
          bodyText : "\n Improper waste management can lead to severe infection transmission risks. Your commitment to appropriate waste disposal is vital in safeguarding lives. Dispose responsibly, curb infections!🛡️ \n \n Click to learn more!",
          urlPages : '/Awareness/Clinical%20Waste Management'
        },
        {
          PageTopic : 'Rotan Tata',
          bodyText : "\n 💭 Ups and downs in life are very important to keep us going, because a straight line even in ECG means we are not alive.",
          urlPages : '/Wellness'
        },
        {
          PageTopic : '🦸 You are the IPC Hero! 🦸',
          bodyText : "\n Good infection prevention and control practices saves lives. Your efforts save lives every day. Be the hero your patients and loved ones need! 💪 \n \n Click to learn more!",
          urlPages : '/Awareness/IPC'
        },
        {
          PageTopic : 'T.S.Eliot',
          bodyText : "\n 💭 Every moment is a fresh beginning",
          urlPages : '/Wellness'
        },
        {
          PageTopic : '🦸 Have you wash your hands?🦸',
          bodyText : "\n Proper hand hygiene is your superpower. It’s the most important, simplest, and least expensive way of combat infections and save lives. \n \n Click to learn more!",
          urlPages : '/Awareness/Hand%20Hygiene'
        },
        {
          PageTopic : 'Eleanor Roosevelt',
          bodyText : "\n 💭 No one can make you feel inferior without you consent.",
          urlPages : '/Wellness'
        },
        {
          PageTopic : '💡 Fact Check 💡',
          bodyText : "\n Did you know urinary tract infection (UTI) is among the common types of healthcare-associated infection, and about 75% are linked to a urinary catheter? Stay informed, break the chain! 🧩. \n \n Click to learn more!",
          urlPages : '/Awareness/Urinary%20Cathether'
        },
        {
          PageTopic : 'Steve Jobs',
          bodyText : "\n 💭 Being the richest man in the cemetery doesn't matter to me...Going to bed at night saying we've done something wonderful...that's what matters to me.",
          urlPages : '/Wellness'
        },
        {
          PageTopic : '🚨  Critical Care Alert! 🚨',
          bodyText : "\n Ventilator patients face high risks, including ventilator-associated pneumonia (VAP), venous thromboembolism (VTE), and stress-induced gastrointestinal bleeding. Follow the 5-Element Ventilator Bundle to protect those in your care. \n \n Click to learn more!",
          urlPages : '/Awareness/Ventilator%20Care Bundle'
        },
        {
          PageTopic : 'Theodone Roosevelt',
          bodyText : "\n 💭 With self-discipline most anything is possible",
          urlPages : '/Wellness'
        },
        {
          PageTopic : 'Barack Obama',
          bodyText : "\n 💭 The best way to not feel hopeless is to get up and do something. Dont wait for good things to happen to you. If you go out and make some good things happen, you will fill the world with hope, you will fill yourself with hope.",
          urlPages : '/Wellness'
        },
        {
          PageTopic : 'Albert Einstein',
          bodyText : "\n 💭 In the middle of every difficulty lies opportunity.",
          urlPages : '/Wellness'
        },
        {
          PageTopic : 'Thomas A.Edison',
          bodyText : "\n 💭 I have not failed. I've just found 10,000 ways that won't work.",
          urlPages : '/Wellness'
        },
      ];

      async function scheduleAwarenessWellnessNotification() {
        
        for (let i = 0; i <=19; i++) { 
          
          
          const x = i * 2;
          //calculate next 2 days
          const notificationDate = moment()
          .hour(11)
          .minute(0)
          .second(0) 
          .millisecond(0)
          .add( x, 'days')
          .toDate();
        
          const notificationSeconds = moment().add(i + 5, 'seconds').toDate();

          await Notifications.scheduleNotificationAsync({
            content: {
             title: linkToPages[i].PageTopic,
              body: linkToPages[i].bodyText,
              data:  {url: linkToPages[i].urlPages },
            },
            trigger: {
               date: notificationDate,
            },
         });
        }
      };


      return(
        scheduleAwarenessWellnessNotification()
       
      );




}