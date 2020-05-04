import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class TouchableButton extends Component {
  _onPressButton(){
    alert('You tapped a button')
  }
  render(){
  return (
    <View style={styles.container}>
     
    <View style={styles.containerButton}>
      <Button 
      onPress={this._onPressButton}
      title="Press Button 1"
      />
    </View>

    <View style={styles.containerLayoutButton}>

    
    <Button 
      onPress={this._onPressButton}
      title="Press Button 2"
      />
  
    <Button 
      onPress={this._onPressButton
      }
      title="Great!"
      color='green'
      />
      </View>

      <View style={styles.containerButton}>
      <Button 
      onPress={() => {
        alert('You tapped button Click ME!');
      }}
      title="Tap Me!"
      
      />
      </View>
    </View>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  containerButton:{
    margin: 25,
  },

  containerLayoutButton:{
    margin: 25,
    flexDirection: "row",
    justifyContent: "space-between",
  }
});
