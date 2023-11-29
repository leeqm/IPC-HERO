import { Text, View, StyleSheet, Pressable, ScrollView, Image } from "react-native";
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
          headerLeft: () => <DrawerToggleButton tintColor="white" />,
        }}
      />

      <View style={styles.headerContainer}>
        <Image
          style={styles.topImage}
          source={require('./assets/AwarenessImportant.jpg')}
        />
      </View>
      <View style={styles.topicContainer}>
      <Text style={styles.headertext}> ⬇️ Click On Topic Below ⬇️ </Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.ScrollContainer} >

        <View style={styles.topic}>
        <Link href={"/Awareness/ANTIMICROBIAL%20RESISTANCE"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>ANTIMICROBIAL RESISTANCE (AMR)</Text>

          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Breathing%20Circuit"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>BREATHING CIRCUIT</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Central%20Peripheral Cathether"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>CENTRAL PERIPHERAL CATHETHER</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Clinical%20Waste Management"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>CLINICAL WASTE MANAGEMENT</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/IPC"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>INFECTION PREVENTION AND CONTROL (IPC)</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Hand%20Hygiene"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>HAND HYGIENE</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Urinary%20Cathether"} asChild>
          <Pressable style={styles.button}>
            <Text style={styles.textStyle}>URINARY CATHETER</Text>
          </Pressable>
        </Link>
        </View>

        <View style={styles.topic}>
        <Link href={"/Awareness/Ventilator%20Care Bundle"} asChild>
          <Pressable style={styles.button} >
            <Text style={styles.textStyle}>VENTILATOR CARE BUNDLE</Text>
          </Pressable>
        </Link>
        </View>

      </ScrollView>
      </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    //borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal:30,
    //elevation: 2,
    borderRadius: 20,
    width: 350,
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
  },
  headertext:{
    fontSize: 15,
    marginTop: 30,
    color: "white"
  },
  ScrollContainer:{

  },
  topImage:{
    width:400,
    height:350,
  },
  headerContainer: {
    flex: 1,
    justifyContent:"center",
    alignItems: "center"
  },
  topicContainer:{
    flex:1,
    justifyContent:"center",
    alignItems: "center"
  }
});