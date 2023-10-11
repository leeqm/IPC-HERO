import React, {useState} from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Modal, Image, Pressable } from 'react-native';
import { ReactNativeZoomableView } from '@openspacelabs/react-native-zoomable-view';
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

export default function ButtonTopic ({topic, photo, IconName }) {

    const [modalVisible, setModalVisible] = useState(false);

    return(
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <ReactNativeZoomableView
              maxZoom={10.0}
              minZoom={1.0}
              zoomStep={0.5}
              initialZoom={1}
              bindToBorders={true}
              onZoomAfter={this.logOutZoomState}
              style={{
                padding: 10,
                backgroundColor: 'white',
              }}
            >
              <Image style={styles.image} source={photo} resizeMode='contain'/>
             </ReactNativeZoomableView>

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)} 
      
      >

        <FontAwesome5
                name= {IconName}
                size={25}
                color="#25292e"
                style={styles.buttonIcon}
              />
        <Text style={styles.textStyle}>{topic}</Text>
      </Pressable>
    </View>

    
    );
  };

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      //borderRadius: 20,
      //padding: 10,
      //elevation: 2,
      borderRadius: 20,
      width: 280,
      height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
    },
    buttonIcon: {
      paddingRight: 10,
      justifyContent: 'center',
    },
    buttonOpen: {
      backgroundColor: '#95adbe',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
      width: 100,
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
    },
 
    image: {
      width: 350,
      height: 400,
    },
  });
  