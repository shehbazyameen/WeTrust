import {View, Text, TouchableOpacity, Alert,ImageBackground,Image,Dimensions, ScrollView} from 'react-native';
import React from 'react';
import Styles from './Styles';
import ButtonLarge from '../../components/ButtonLarge';
import CustomHeader from '../../components/Header';
import { Assets } from '../../assests';


const HomeScreen = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  console.log("first")
  return (
   
    <ImageBackground  style={{flex:1}} source={Assets?.homeCover} resizeMode="cover">
    <View style={{flex:1,backgroundColor:"#191C4D60",alignItems:"center"}}>

      <Image source={Assets?.logo}
      style={{marginTop:118}}
      ></Image>
      <Text style={{color:"#ffffff", fontSize:30,marginTop:42,}}>
        Solutions for 
      </Text>
      <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ marginTop:42,paddingTop:12, flex:1}}>
      <ButtonLarge style={{marginTop:42}}  title='Attorneys' price="200"></ButtonLarge>
        <ButtonLarge style={{marginTop:42}}  title='Attorneys' price="200"></ButtonLarge>
         <ButtonLarge style={{marginTop:42}}  title='Attorneys' price="200"></ButtonLarge>
          <ButtonLarge style={{marginTop:42}}  title='Attorneys' price="200"></ButtonLarge>
            <ButtonLarge style={{marginTop:42}}  title='Attorneys' price="200"></ButtonLarge>

            <View style={{height:50}}></View>
          

        
      </ScrollView>
     

    

    </View>

    </ImageBackground>
    
  );

};

export default HomeScreen;
