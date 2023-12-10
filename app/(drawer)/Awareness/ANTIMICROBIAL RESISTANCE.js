import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonTopic from './components/ButtonTopic';

const AllTopic = [
  {
    topic : 'What is Antimicrobial resistance (AMR)?',
    imageSource : require ('./assets/AwarenessMaterial/AMR1.jpg'),
    Icon : "hands-wash"
  },
  {
    topic : 'What can you do to reduce AMR?',
    imageSource : require ('./assets/AwarenessMaterial/AMR2.jpg'),
    Icon : "shield-virus"
  },
]

export default function AMR() {
    return (
      <View style={styles.container}>

        <Text style={styles.HeaderText}>🚨 Antimicrobial Resistance Alert! 🚨</Text>
        <Text style={styles.HeaderText}>
          Did you know that antimicrobial resistance is an urgent global public health threat and was associated with nearly 5 million deaths in 2019. Let's learn more about AMR and combat this critical issue together. Your awareness matters!"
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
      fontSize: 17,
    },
    headertext:{
      fontSize: 15,
      marginTop: 30,
      color: "white",
    },
  });