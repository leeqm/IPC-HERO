import { Text, View, StyleSheet, Pressable, ScrollView } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Link } from "expo-router";

export default function AwarenessPage() {
  return (
      <View style={styles.container}>

        <Drawer.Screen
        options={{
          title: "Awareness",            
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />

<ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.topic}>
        <Link href={"/Awareness/AMR"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>AMR</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Breathing%20Circuit"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>Breathing Circuit</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Central%20Peripheral Cathether"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>Central Peripheral Cathether</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Clinical%20Waste Management"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>Clinical Waste Management</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/IPC"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>IPC</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Hand%20Hygiene"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>Hand Hygiene</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Urinary%20Cathether"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>Unrinary Cathether</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Ventilator%20Care Bundle"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>Ventilator Care Bundle</Text>
          </Pressable>
        </Link>
        </View>

        </ScrollView>

      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    //borderRadius: 20,
    padding: 10,
    //elevation: 2,
    borderRadius: 20,
    width: 280,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: "#27104e"
  },

  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20,
  },

  topic: {
    padding: 10,
  }
});