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
  });