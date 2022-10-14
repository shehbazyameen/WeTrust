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

const HomeScreen = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  const [activeColor, setActiveColor] = useState(false);
  const [activeElementId,setActiveElementId]=useState('');
  const data = [
    {
      id: 1,
      name: 'Attorney',
      price: 200,
    },
    {
      id: 2,
      name: 'Attorney',
      price: 250,
    },
    {
      id: 3,
      name: 'Attorney',
      price: 300,
    },
    {
      id: 4,
      name: 'Attorney',
      price: 500,
    },
    {
      id: 5,
      name: 'Attorney',
      price: 200,
    },
    {
      id: 6,
      name: 'Attorney',
      price: 200,
    },
    {
      id: 7,
      name: 'Attorney',
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
        <Text style={{color: '#ffffff', fontSize: 30, marginTop: 42}}>
          Solutions for
        </Text>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            marginTop: 42,
            paddingTop: 12,
            height: '40%',
          }}>
             {
             data.map((item,index)=>{
              return (
                <TouchableOpacity
                  onPress={() => {
                    setActiveColor(true);
                    setActiveElementId(item?.id);
                  }}
                  style={{
                    backgroundColor:
                      activeColor && activeElementId == item?.id
                        ? 'blue'
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
                          : '#000000',
                    }}>
                    {item?.name}
                  </Text>
                  {activeColor && (
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
             })
            }
          
        
          <View style={{height: 50}}></View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
