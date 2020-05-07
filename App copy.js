import React,{useState} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {

  const[count,setCount] = useState(0);

  const onPress = () => setCount(count => count + 1);

  return (
    <View style={styles.container}>
      <View style={styles.counterText}>
        <Text> Tap Counter: {count} </Text>
     </View> 
      <TouchableOpacity
        style={styles.button}
        onPress={onPress}
        >
          <Text> Touch Me</Text>
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
    alignItems: "center",
    backgroundColor: "darkmagenta",
    padding: 10,
  },

  counterText: {
    alignItems: "center",
    padding: 10,
  }
});
