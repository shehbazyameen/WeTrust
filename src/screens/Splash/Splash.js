import {View, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import {Assets} from '../../assests';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({navigation}) => {
  setTimeout(() => {
     let Token = AsyncStorage.getItem('token');
     console.log(Token,"token CHECK")
     Token.then((response)=>{
      if(response!==null){
        navigation.navigate("HomeStack",{
          screen:"HomeScreen"
         })

      }
      else{
        navigation.navigate('Intro');
      }
     })
     
   
  }, 1000);

  return (
    <View style={[styles.Container]}>
      <Image source={Assets.splashLogo} />
    </View>
  );
};

export default Splash;
