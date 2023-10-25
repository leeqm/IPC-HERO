import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonTopic from './components/ButtonTopic';

const AllTopic = [
  {
    topic : 'How to Close Sharps Waste Bins',
    imageSource : require ('./assets/AwarenessMaterial/waste1.png'),
    Icon : "hands-wash"
  },

  {
    topic : 'Do and dont',
    imageSource : require ('./assets/AwarenessMaterial/waste2.png'),
    Icon : "hands-wash"
  },
]

export default function CWM() {
    return (
      <View style={styles.container}>

        <Text style={styles.HeaderText}>🚨 Clinical Waste Management Alert! 🚨 </Text>
        <Text style={styles.HeaderText}>
        Improper waste management can lead to severe infection transmission risks. Your commitment to appropriate waste disposal is vital in safeguarding lives. Dispose responsibly, curb infections!🛡️
        </Text>
        <Text style={styles.headertext}> ⬇️ Click On Topic Below ⬇️ </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <ButtonTopic topic={AllTopic[0].topic} photo={AllTopic[0].imageSource} IconName={AllTopic[0].Icon}/>
          <ButtonTopic topic={AllTopic[1].topic} photo={AllTopic[1].imageSource} IconName={AllTopic[1].Icon}/>
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