import { Text, View, StyleSheet } from "react-native";

export default function CPC() {
    return (
        <View style={styles.container}>
          <Text style={{ fontSize: 24 }}>CPC Page</Text>
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