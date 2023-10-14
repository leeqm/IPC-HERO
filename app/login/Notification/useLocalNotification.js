import { useState, useEffect, useRef } from "react";
import * as Notifications from "expo-notifications";
import { Link, router } from 'expo-router';
import { registerForPushNotificationsAsync } from "./handle-local-notifications";

export const useLocalNotification = () => {
  const [expoPushToken, setExpoPushToken] = useState("");
  const [notification, setNotification] = useState({});
  const notificationListener = useRef();
  const responseListener = useRef();
  
  const navi = () => {
    router.push("/details")
  } 

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => {
      setExpoPushToken(token || "");
    });

    notificationListener.current =
      Notifications.addNotificationReceivedListener(notification => {
        setNotification(notification);
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(response => {
        setNotification(response.notification);
        navi();
      });

    return () => {
      if (notificationListener.current?.remove) {
        notificationListener.current.remove();
      }
      if (responseListener.current?.remove) {
        responseListener.current.remove();
      }
    };
  }, []);

  return { expoPushToken, notification };
};