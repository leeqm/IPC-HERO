import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonTopic from './components/ButtonTopic';

const AllTopic = [
  {
    topic : 'Your 5 Moments for Hand Hygiene',
    imageSource : require ('./assets/AwarenessMaterial/hand1.jpg'),
    Icon : "hands-wash"
  },

  {
    topic : '7 Langkah Pencucian yang Efecktif',
    imageSource : require ('./assets/AwarenessMaterial/hand2.jpg'),
    Icon : "hands-wash"
  },

  {
    topic : 'How to Hand Rub?',
    imageSource : require ('./assets/AwarenessMaterial/hand3.jpg'),
    Icon : "hands-wash"
  },

  {
    topic : 'How to Hand Wash?',
    imageSource : require ('./assets/AwarenessMaterial/hand4.jpg'),
    Icon : "hands-wash"
  },

]

export default function HandHygiene() {
    return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>
          <ButtonTopic topic={AllTopic[0].topic} photo={AllTopic[0].imageSource} IconName={AllTopic[0].Icon}/>
          <ButtonTopic topic={AllTopic[1].topic} photo={AllTopic[1].imageSource} IconName={AllTopic[1].Icon}/>
          <ButtonTopic topic={AllTopic[2].topic} photo={AllTopic[2].imageSource} IconName={AllTopic[2].Icon}/>
          <ButtonTopic topic={AllTopic[3].topic} photo={AllTopic[3].imageSource} IconName={AllTopic[3].Icon}/>
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
  });