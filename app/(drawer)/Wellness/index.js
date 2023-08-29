import { Text, View, StyleSheet, ScrollView } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
//import { ScrollView } from "react-native-gesture-handler";
import ButtonTopic from './components/ButtonTopic';

const AllTopic = [
  {
    topic : 'William J. Clinton',
    imageSource : require ('./assets/WellnessMaterial/wellness1.jpg'),
    Icon : "hands-wash"
  },
  {
    topic : 'Rotan Tata',
    imageSource : require ('./assets/WellnessMaterial/wellness2.jpg'),
    Icon : "shield-virus"
  },
  {
    topic : 'T.S Eliot',
    imageSource : require ('./assets/WellnessMaterial/wellness3.jpg'),
    Icon : "shield-virus"
  },
  {
    topic : 'Eleanor Roosevelt',
    imageSource : require ('./assets/WellnessMaterial/wellness4.jpg'),
    Icon : "shield-virus"
  },
  {
    topic : 'Steve Jobs',
    imageSource : require ('./assets/WellnessMaterial/wellness5.jpg'),
    Icon : "shield-virus"
  },
  {
    topic : 'Theodone Roosevelt',
    imageSource : require ('./assets/WellnessMaterial/wellness6.jpg'),
    Icon : "shield-virus"
  },
  {
    topic : 'Barack Obama',
    imageSource : require ('./assets/WellnessMaterial/wellness7.jpg'),
    Icon : "shield-virus"
  },
  {
    topic : 'Albert Einstein',
    imageSource : require ('./assets/WellnessMaterial/wellness8.jpg'),
    Icon : "shield-virus"
  },
  {
    topic : 'Thomas A. Edison',
    imageSource : require ('./assets/WellnessMaterial/wellness9.jpg'),
    Icon : "shield-virus"
  },
  {
    topic : 'Ronald Reagan',
    imageSource : require ('./assets/WellnessMaterial/wellness10.jpg'),
    Icon : "shield-virus"
  },
]


export default function WellnessPage() {
  return (
      <View style={styles.container}>

        <Drawer.Screen
        options={{
          title: "Wellness",            
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
        
    <ScrollView showsVerticalScrollIndicator={false}>
      <ButtonTopic topic={AllTopic[0].topic} photo={AllTopic[0].imageSource} IconName={AllTopic[0].Icon}/>
      <ButtonTopic topic={AllTopic[1].topic} photo={AllTopic[1].imageSource} IconName={AllTopic[1].Icon}/>
      <ButtonTopic topic={AllTopic[2].topic} photo={AllTopic[2].imageSource} IconName={AllTopic[2].Icon}/>
      <ButtonTopic topic={AllTopic[3].topic} photo={AllTopic[3].imageSource} IconName={AllTopic[3].Icon}/>
      <ButtonTopic topic={AllTopic[4].topic} photo={AllTopic[4].imageSource} IconName={AllTopic[4].Icon}/>
      <ButtonTopic topic={AllTopic[5].topic} photo={AllTopic[5].imageSource} IconName={AllTopic[5].Icon}/>
      <ButtonTopic topic={AllTopic[6].topic} photo={AllTopic[6].imageSource} IconName={AllTopic[6].Icon}/>
      <ButtonTopic topic={AllTopic[7].topic} photo={AllTopic[7].imageSource} IconName={AllTopic[7].Icon}/>
      <ButtonTopic topic={AllTopic[8].topic} photo={AllTopic[8].imageSource} IconName={AllTopic[8].Icon}/>
      <ButtonTopic topic={AllTopic[9].topic} photo={AllTopic[9].imageSource} IconName={AllTopic[9].Icon}/>
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