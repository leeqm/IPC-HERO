import { Slot } from 'expo-router';
import { useRouterNotifications } from './login/Notification/routerNotification';

export default function Layout() {
  useRouterNotifications()
  // ...
  return <Slot />
}