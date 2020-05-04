import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View style={{flex: 1}}>
     <View style={{flex: 1, backgroundColor: 'pink'}} />
     <View style={{flex: 1, backgroundColor: 'white'}}/>
     <View style={{flex: 1, backgroundColor: 'blue'}}/> 
   </View>
  );
}
