import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, } from 'react-native';
import * as ImagePicker from 'expo-image-picker'

export default function App() {

  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if (permissionResult.granted === false){

      alert("Permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();
    console.log(pickerResult);
  }
 //end of the code

  return (
    <View style={styles.container}>
      <View style={styles.counterText}>
       <Image source={{uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/rams.png'}}
       style={styles.logo}/>
        <Text style={styles.instructions}>
          Press the Button below to select an image on your phone.   
        </Text>
     </View> 
      <TouchableOpacity
        style={styles.button}
        onPress={openImagePickerAsync}
        >
          <Text style={styles.buttonText}> Pick Image</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: "aqua",
  },

  button: {
    borderRadius: 5,
    backgroundColor: "darkmagenta",
    padding: 20,
  },

  instructions: {
    fontSize: 18,
    color: "limegreen",
    marginHorizontal: 15,
    marginBottom: 10,
  },

  logo: {
    width: 350,
    height: 200,
    marginBottom: 20,
  },

  buttonText: {
    fontSize: 20,
    color: "lightpink"
  }
});
