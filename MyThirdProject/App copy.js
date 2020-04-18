import React from 'react';
import {Text, TextInput, View} from 'react-native';

function Student(props) {
  return (
    <View>
      <Text>Hey, my name is {props.name}, I am a CIS340 student!</Text>
    </View>
  );
}

export default function MultiComp(){
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text> Welcome to CIS340</Text>
      <Student name="Alice Smith"/>
      <Student name="Cassidy Burns"/>
      <Student name="Megan Morgan"/>
      <Student name="Jon Clark"/>
    </View>
  )
}
