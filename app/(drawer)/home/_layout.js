import { Stack } from "expo-router";

export default function HomeLayout() {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: 'red',
      height: 10
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  />;
}