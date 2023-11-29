import { Stack } from "expo-router";

export default function WellnessLayout() {
  return <Stack 
  screenOptions={{
    headerStyle: {
      backgroundColor: '#121212',
      height: 10
    },
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}
  />;
}