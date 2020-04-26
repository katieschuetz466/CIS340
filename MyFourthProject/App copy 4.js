import React from 'react';
import { Text,View, FlatList } from 'react-native';



export default StatesApp = () => {
  return (
    <View style={{flex: 1, paddingTop: 40}}>
      <FlatList
      data={[
        {key: 'Alabama'},
        {key:'Alaska'},
        {key:'Arizona'},
        {key:'Arkansas'},
        {key:'California'},
        {key:'Colorado'},
        {key:'Delaware'},
        {key:'Florida'},
        {key:'Georgia'},
        {key:'Hawaii'},
        {key:'Idaho'},
        {key:'Illinois'},
        {key:'Indiana'},
        {key:'Iowa'},
        {key:'Kansas'},
        {key:'Kentucky'},
        {key:'Tenessee'},
        {key:'Maine'},
        {key:'Maryland'},
        {key:'Minnesota'},
        {key:'Michigan'}

      ]}
      renderItem={({item}) => <Text style= {{padding: 10, frontSize: 20, height: 44}}>{item.key} </Text>}
      />
    </View>  
  );
  }


