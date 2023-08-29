import { Text, View, StyleSheet } from "react-native";

export default function CWM() {
    return (
        <View style={styles.container}>
          <Text style={{ fontSize: 24 }}>CWM Page</Text>
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