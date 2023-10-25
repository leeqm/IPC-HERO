import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonTopic from './components/ButtonTopic';

const AllTopic = [
  {
    topic : 'Breathing Circuit',
    imageSource : require ('./assets/AwarenessMaterial/Breathing.png'),
    Icon : "hands-wash"
  },
]

export default function Breath() {
    return (
        <View style={styles.container}>
  
        <Text Text style={styles.HeaderText}>💡 Infection Control Tip!💡</Text>
        <Text style={styles.HeaderText}>
            Did you know tDid you know that ventilator breathing circuits and tubing MUST NOT be routinely changed for infection control purposes. The best practice is to change the circuit only when it's visibly soiled (KKM, 2018). Stay informed, stay safe!

        </Text>
        <Text style={styles.headertext}> ⬇️ Click On Topic Below ⬇️ </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ButtonTopic topic={AllTopic[0].topic} photo={AllTopic[0].imageSource} IconName={AllTopic[0].Icon}/>
        </ScrollView>

        </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black",
      alignItems: "center",
      justifyContent: "center",
    },
    HeaderText:{
      color: "white",
      alignContent: "center",
      justifyContent: "center",
      marginVertical: 10,
      marginHorizontal: 13,
      fontSize: 20,
    },
    headertext:{
      fontSize: 15,
      marginTop: 30,
      color: "white",
    },
  });