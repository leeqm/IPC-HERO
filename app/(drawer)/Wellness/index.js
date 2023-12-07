import { Text, View, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { Drawer } from "expo-router/drawer";
import { Avatar, Button, Card } from 'react-native-paper';
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
  {
    topic : 'Al-Ghazali',
    imageSource : require ('./assets/WellnessMaterial/wellness11.jpg'),
    Icon : "shield-virus"
  },
  {
    topic : 'Muhammad Ali',
    imageSource : require ('./assets/WellnessMaterial/wellness12.jpg'),
    Icon : "shield-virus"
  },
]

const { width, height } = Dimensions.get("window");

const CardView =({topic, imageSource}) =>{
return (
  <View>
    <Card style={styles.card} mode="elevated">
        <Card.Cover
          source={imageSource}
          //style={{ width:width}}
        />
        <Card.Title title={topic} />
          
    </Card>
  </View>
);
};

export default function WellnessPage() {
  return (
    <View style={styles.container}>

        <Drawer.Screen
          options={{
          title: "Wellness",            
          headerShown: true,
          headerLeft: () => <DrawerToggleButton tintColor="white"/>,
          }}
        />

      
      <Image
        style={styles.topImage}
        source={require('./assets/positiveVibe.jpg')}
      />

      <Text style={styles.text}> ⬇️ Swipe for more quotes ⬇️ </Text>

    <ScrollView style={styles.CardContainer} >
          <CardView topic={AllTopic[10].topic} imageSource={AllTopic[10].imageSource} />
          <CardView topic={AllTopic[11].topic} imageSource={AllTopic[11].imageSource} />
          <CardView topic={AllTopic[0].topic} imageSource={AllTopic[0].imageSource} />
          <CardView topic={AllTopic[1].topic} imageSource={AllTopic[1].imageSource} />
          <CardView topic={AllTopic[2].topic} imageSource={AllTopic[2].imageSource} />
          <CardView topic={AllTopic[3].topic} imageSource={AllTopic[3].imageSource} />
          <CardView topic={AllTopic[4].topic} imageSource={AllTopic[4].imageSource} />
          <CardView topic={AllTopic[5].topic} imageSource={AllTopic[5].imageSource} />
          <CardView topic={AllTopic[6].topic} imageSource={AllTopic[6].imageSource} />
          <CardView topic={AllTopic[7].topic} imageSource={AllTopic[7].imageSource} />
          <CardView topic={AllTopic[8].topic} imageSource={AllTopic[8].imageSource} />
          <CardView topic={AllTopic[9].topic} imageSource={AllTopic[9].imageSource} />
    </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    alignItems: "center",
    //justifyContent: "center",
  },
  topImage: {
    //marginTop: 10,
    marginBottom: 10,
    //marginHorizontal: 10,
    width:"100%",
    height: 200,
  },
  words: {
    marginVertical: 10,
    color: "white",
    fontSize: 20,
  },
  button:{
    backgroundColor: "#212121"
  },
  card: {
    //marginTop: 10,
    width: width*0.95,
    marginHorizontal: 10,
    marginVertical: 5,
  },
  CardContainer:{
    width:"100%",
    marginHorizontal:20
  
  },
  text:{
    color: "white",
    marginTop:10,
    marginBottom:10,
    fontSize: 15,
  }
});