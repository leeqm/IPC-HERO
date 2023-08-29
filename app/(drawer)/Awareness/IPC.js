import { Text, View, StyleSheet } from "react-native";

export default function IPC() {
    return (
        <View style={styles.container}>
          <Text style={{ fontSize: 24 }}>IPC Page</Text>
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