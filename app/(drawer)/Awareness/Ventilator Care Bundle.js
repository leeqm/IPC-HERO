import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonTopic from './components/ButtonTopic';

const AllTopic = [
  {
    topic : '4 Key Components',
    imageSource : require ('./assets/AwarenessMaterial/Ventilator.png'),
    Icon : "hands-wash"
  },

]


export default function Ventilator() {
    return (
        <View style={styles.container}>

        <Text style={styles.HeaderText}>💡 Fact Check💡  </Text>
        <Text style={styles.HeaderText}>
        Did you know urinary tract infection (UTI) is among the common types of healthcare-associated infection, and about 75% are linked to a urinary catheter? Stay informed, break the chain! 🧩.
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