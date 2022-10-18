import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import fonts from '../../assests/fonts';
import * as Progress from 'react-native-progress';
import DocumentPicker from 'react-native-document-picker';


const SignersSuccess = () => {
    const {width, height} = Dimensions.get('window');
  return (
    <View style={{flex: 1}}>
      <View style={{flex: 0.6, backgroundColor: 'blue'}}>
        <Text>ASASS</Text>
      </View>
   
        <ImageBackground
          style={{ flex:0.4,backgroundColor:'green'}}
          resizeMode="stretch"
          source={Assets.halfScreen}
        />
     
    </View>
  );
};

export default SignersSuccess;
