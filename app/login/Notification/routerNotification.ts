import { useRouter } from 'expo-router';
import React from 'react';
import * as Notifications from 'expo-notifications';

export function useRouterNotifications() {
  const router = useRouter();

  React.useEffect(() => {
    let isMounted = true;

    function processUrl(url: string) {
      // In case you need to modify the URL to make it relative.
      return url;
    }

    // Handle URL from expo push notifications
    Notifications.getLastNotificationResponseAsync().then((response) => {
      if (!isMounted) {
        return;
      }
      const url = response?.notification.request.content.data.url;
      if (url) {
        router.push(processUrl(url));
      }
    });

    // Listen to expo push notifications
    const subscription = Notifications.addNotificationResponseReceivedListener(
      (response) => {
        const url = response.notification.request.content.data.url;
        router.push(processUrl(url));
      }
    );

    return () => {
      isMounted = false;
      subscription.remove();
    };
  }, []);
}