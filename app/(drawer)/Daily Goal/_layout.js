import { Stack } from "expo-router";

export default function GoalLayout() {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: '#64379f',
      height: 10
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  />;
}