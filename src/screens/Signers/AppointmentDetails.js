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
  const {width, height} = Dimensions.get('window');
const AppointmentDetails = ({navigation}) => {
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
              Thanks you for your appointment
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
            <Text
              style={{
                color: '#FFFFFF',
                textAlign: 'center',
                fontFamily: fonts.SitkaDisplay,
                fontSize: 15,
              }}>
              Appointment Details:{' '}
            </Text>
            <View>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: fonts.SitkaDisplay,
                  fontSize: 15,
                }}>
                Time: 9:30 am{' '}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: fonts.SitkaDisplay,
                  fontSize: 15,
                }}>
                Day: Monday
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: '#FFFFFF',
                  textAlign: 'center',
                  fontFamily: fonts.SitkaDisplay,
                  fontSize: 15,
                }}>
                Date: 26th September 2022
              </Text>
            </View>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('SignerVerification')}
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
        </View>
      </ImageBackground>
    </View>
  );
}

export default AppointmentDetails