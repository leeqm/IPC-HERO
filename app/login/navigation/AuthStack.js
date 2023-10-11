import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { router } from 'expo-router';

import Dashboard from "../screens/Dashboard";
import GoToHomePage from "../screens/GoToHomePage";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (

    
    <Stack.Navigator>
      {/*
      <Stack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          headerShown: false,
        }}
      />
      */}
      <Stack.Screen
        name="GoToHomePage"
        component={GoToHomePage}
        options={{
          headerShown: false,
        }}
      />
      
    </Stack.Navigator>
  
  );
}
