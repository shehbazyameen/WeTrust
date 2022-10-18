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
      <ImageBackground
        style={{flex: 1}}
        resizeMode="stretch"
        source={Assets.halfScreen}>
        <View style={{height: height / 2}}>
          <View
            style={{
              marginTop: height / 6.5,
              alignItems: 'center',
              justifyContent: 'center',
              paddingHorizontal: 70,
            }}>
            <TouchableOpacity>
              <Image
                style={{height: 100, width: 100}}
                source={Assets.check}></Image>
            </TouchableOpacity>
            <Text
              style={{
                marginTop: 25,
                fontFamily: fonts.SitkaDisplay,
                textAlign: 'center',
                fontSize: 35,
                color: '#191C4C',
              }}>
              Thanks you for your order
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
        </View>

        <View
          style={{
            height: height / 2,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('SignerVerification')}
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
              onPress={() => navigation.navigate('SignerVerification')}
              style={{
                backgroundColor: '#AC872E',
                borderRadius: 6,

                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 18,
                paddingVertical: 12,
                marginTop:30
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
    </View>
  );
};

export default SignersSuccess;
