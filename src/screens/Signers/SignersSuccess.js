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
import DocumentUpload from '../Documents/DocumentUpload';
import HomeScreen from '../Home/HomeScreen';

const SignersSuccess = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={Assets.halfScreen}>
      <View
        style={{
          flex: 0.53,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{height: width / 4, width: width / 4}}
          source={Assets.check}
          resizeMode="contain"
        />

        <Text
          style={{
            marginTop: 20,
            fontFamily: fonts.SitkaDisplay,
            textAlign: 'center',
            fontSize: 35,
            color: '#191C4C',
          }}>
          Thanks you for
        </Text>
        <Text
          style={{
            fontFamily: fonts.SitkaDisplay,
            textAlign: 'center',
            fontSize: 25,
            color: '#191C4C',
          }}>
          your order
        </Text>

        <Text
          style={{
            marginTop: 25,
            fontFamily: fonts.SitkaDisplay,
            textAlign: 'center',
            fontSize: 17,
            color: '#191C4C',
          }}>
          Thanks for your purchasing.
        </Text>
      </View>

      <View
        style={{
          flex: 0.47,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AppointMent')}
            style={{
              backgroundColor: '#AC872E',
              borderRadius: 6,

              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 18,
              paddingVertical: 12,
            }}>
            <Text
              style={{
                // marginHorizontal: 40,
                color: '#ffffff',
                // marginVertical: 12,
                fontFamily: fonts.SitkaDisplay,
                fontWeight: 'bold',
                fontSize: 14,
              }}>
              Book Appointment
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('HomeScreen')}
            style={{
              backgroundColor: '#AC872E',
              borderRadius: 6,
              marginTop: 30,
              justifyContent: 'center',
              alignItems: 'center',
              paddingHorizontal: 18,
              paddingVertical: 12,
            }}>
            <Text
              style={{
                color: '#ffffff',

                fontFamily: fonts.SitkaDisplay,
                fontWeight: 'bold',
                fontSize: 14,
              }}>
              Main Menu
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SignersSuccess;
