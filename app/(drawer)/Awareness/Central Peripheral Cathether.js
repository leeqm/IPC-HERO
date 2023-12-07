import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonTopic from './components/ButtonTopic';

const AllTopic = [
  {
    topic : 'Central Peripheral Cathether',
    imageSource : require ('./assets/AwarenessMaterial/Peripheral.png'),
    Icon : "hands-wash"
  },
]

export default function CPC() {
    return (
        <View style={styles.container}>

        <Text Text style={styles.HeaderText}>💡 Did you know?💡</Text>
        <Text style={styles.HeaderText}>
        There is NO NEED to routinely replace peripheral catheters within 72 to 96 hours, unless there are specific clinical reasons. This approach significantly reduces the risk of infection and phlebitis. Let's enhance patient outcomes and reduce unnecessary infections.

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
      fontSize: 17,
    },
    headertext:{
      fontSize: 15,
      marginTop: 30,
      color: "white",
    },
  });