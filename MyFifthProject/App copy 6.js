import React from 'react';
import { View } from 'react-native';

export default function App() {
  return (
   <View style={{flex: 1, 
   flexDirection: 'column', 
   justifyContent: 'center',
   alignItems: 'stretch'}}>
     <View style={{width: 50, height: 50, backgroundColor: 'pink'}} />
     <View style={{width: 50, height: 50, backgroundColor: 'yellow'}}/>
     <View style={{width: 50, height: 50, backgroundColor: 'blue'}}/> 
   </View>
  );
}
