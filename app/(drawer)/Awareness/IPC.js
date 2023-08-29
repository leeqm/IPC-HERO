import { Text, View, StyleSheet, ScrollView } from "react-native";
import ButtonTopic from './components/ButtonTopic';

const AllTopic = [
  {
    topic : 'IPC Practices',
    imageSource : require ('./assets/AwarenessMaterial/IPC1.png'),
    Icon : "hands-wash"
  },

  {
    topic : 'Personal Protective Equipment (PPE)',
    imageSource : require ('./assets/AwarenessMaterial/IPC2.png'),
    Icon : "hands-wash"
  },

  {
    topic : 'Safe Injection Practices',
    imageSource : require ('./assets/AwarenessMaterial/IPC3.png'),
    Icon : "hands-wash"
  },

  {
    topic : 'Infection Prevention and You',
    imageSource : require ('./assets/AwarenessMaterial/IPC4.jpg'),
    Icon : "hands-wash"
  },

  {
    topic : 'IPC Save Lives',
    imageSource : require ('./assets/AwarenessMaterial/IPC5.png'),
    Icon : "hands-wash"
  },
]

export default function IPC() {
    return (
      <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <ButtonTopic topic={AllTopic[0].topic} photo={AllTopic[0].imageSource} IconName={AllTopic[0].Icon}/>
          <ButtonTopic topic={AllTopic[1].topic} photo={AllTopic[1].imageSource} IconName={AllTopic[1].Icon}/>
          <ButtonTopic topic={AllTopic[2].topic} photo={AllTopic[2].imageSource} IconName={AllTopic[2].Icon}/>
          <ButtonTopic topic={AllTopic[3].topic} photo={AllTopic[3].imageSource} IconName={AllTopic[3].Icon}/>
          <ButtonTopic topic={AllTopic[4].topic} photo={AllTopic[4].imageSource} IconName={AllTopic[4].Icon}/>
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