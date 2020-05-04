import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View style={{flex: 1, flexDirection: 'row'}}>
     <View style={{width: 50, height: 50, backgroundColor: 'pink'}} />
     <View style={{width: 50, height: 50, backgroundColor: 'white'}}/>
     <View style={{width: 50, height: 50, backgroundColor: 'blue'}}/> 
   </View>
  );
}
