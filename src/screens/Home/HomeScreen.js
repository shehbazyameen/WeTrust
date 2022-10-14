import {
  View,
  Text,
  TouchableOpacity,
  Alert,
  ImageBackground,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Styles from './Styles';
import ButtonLarge from '../../components/ButtonLarge';
import CustomHeader from '../../components/Header';
import {Assets} from '../../assests';
import fonts from '../../assests/fonts';

const HomeScreen = ({navigation}) => {
  console.log("first")
  console.log('first');
  const {width, height} = Dimensions.get('window');
  const [activeColor, setActiveColor] = useState(false);
  const [activeElementId,setActiveElementId]=useState('');
  const data = [
    {
      id: 1,
      name: 'ATTORNEYS',
      price: 200,
    },
    {
      id: 2,
      name: 'CAR DEALERSHIP',
      price: 250,
    },
    {
      id: 3,
      name: 'REAL ESTATE',
      price: 300,
    },
    {
      id: 4,
      name: 'AUTOMOBILE',
      price: 500,
    },
    {
      id: 5,
      name: 'INDIVIDUAL',
      price: 200,
    },
    {
      id: 6,
      name: 'BUSINESS',
      price: 200,
    },
  ];
  return (
    <ImageBackground
      style={{flex: 1}}
      source={Assets?.homeCover}
      resizeMode="cover">
      <View
        style={{flex: 1, backgroundColor: '#191C4D60', alignItems: 'center'}}>
        <Image source={Assets?.logo} style={{marginTop: 118}}></Image>
        <Text
          style={{
            color: '#ffffff',
            fontFamily: fonts.SitkaDisplay,
            fontSize: 30,
            marginTop: 42,
          }}>
          Solutions for
        </Text>
        <View style={{height: height / 2}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              marginTop: 25,
              paddingTop: 12,
            }}>
            {data.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    setActiveColor(true);
                    setActiveElementId(item?.id);
                  }}
                  style={{
                    backgroundColor:
                      activeColor && activeElementId == item?.id
                        ? '#191C4D'
                        : '#AC872E',
                    opacity: 1,
                    height: width / 5,
                    width: width / 2,
                    borderRadius: 4,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 42,
                  }}>
                  <Text
                    style={{
                      color:
                        activeColor && activeElementId == item?.id
                          ? '#ffffff'
                          : '#ffffff',
                      fontSize: 20,
                      fontFamily: fonts.SitkaDisplay,
                    }}>
                    {item?.name}
                  </Text>
                  {activeColor && activeElementId == item?.id && (
                    <Text
                      style={{
                        paddingTop: 12,
                        color: activeColor ? '#ffffff' : '#000000',
                      }}>
                      ${item?.price}
                    </Text>
                  )}
                </TouchableOpacity>
              );
            })}

            <View style={{height: 30}}></View>
          </ScrollView>
        </View>
        {activeElementId !== '' && (
          <TouchableOpacity
            onPress={() =>{navigation.navigate("HomeStack",{
              screen:"DocumentUpload"
            })}}
            style={{
              backgroundColor: '#AC872E',
              opacity: 1,
              height: width / 8,
              width: width / 3,
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 32,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontFamily: fonts.SitkaDisplay,
                fontSize: 14,
              }}>
              Continue
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
