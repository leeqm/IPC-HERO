import { Text, View, StyleSheet } from "react-native";
import { Stack } from 'expo-router';

export default function Ventilator() {
    return (
        <View style={styles.container}>
          <Text style={{ fontSize: 24 }}>Ventilator Page</Text>
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
  });