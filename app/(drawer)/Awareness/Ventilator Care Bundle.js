import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonTopic from './components/ButtonTopic';

const AllTopic = [
  {
    topic : '5 Tips to Prevent Ventilator-Associated Pneumonia',
    imageSource : require ('./assets/AwarenessMaterial/Ventilator.png'),
    Icon : "hands-wash"
  },

]


export default function Ventilator() {
    return (
        <View style={styles.container}>

        <Text style={styles.HeaderText}>🚨  Critical Care Alert! 🚨   </Text>
        <Text style={styles.HeaderText}>
        Ventilator patients face high risks, including ventilator-associated pneumonia (VAP), venous thromboembolism (VTE), and stress-induced gastrointestinal bleeding. Follow the 5-Element Ventilator Bundle to protect those in your care.  
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