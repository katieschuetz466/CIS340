import React from 'react';
import { Text, Image, ScrollView } from 'react-native';

const dog = {
  uri: 'https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/dog2.png',
  width: 64,
  height: 64
};

export default MyScrollViewApp = () => (


    <ScrollView style ={{padding: 40}}>
      <Text style= {{fontSize: 80}}>
        Try to Scroll Down
      </Text>
      <Image source= {require('./assets/dog2.png/')} style={{ width: 64,
        height: 64}}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Text style= {{fontSize: 80}}>
        Try to Scroll Down Again.
      </Text>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Text style= {{fontSize: 80}}>
        Try to Scroll Down one more time.
      </Text>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Text style= {{fontSize: 80}}>
        Try to Scroll Down Again, yay!
      </Text>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Text style= {{fontSize: 80}}>
        Try to Scroll Down Again.
      </Text>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
      <Image source= {dog}/>
    </ScrollView>
);


