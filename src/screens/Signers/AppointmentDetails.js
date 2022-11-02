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
import moment from 'moment/moment';


const {width, height} = Dimensions.get('window');
const AppointmentDetails = ({navigation,route}) => {
 
  let day = moment(route?.params?.date).format('dddd');
  let time = moment(route?.params?.date).format('hh:mm A');
  let date = moment(route?.params?.date).format('dddd,MM,YY');
  
  return (
    <ImageBackground
      style={{flex: 1}}
      resizeMode="stretch"
      source={Assets.halfScreen}>
      <View
        style={{
          flex: 0.52,
          alignItems: 'center',
          justifyContent: 'center',
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
          Thanks you for
        </Text>
        <Text
          style={{
            fontFamily: fonts.SitkaDisplay,
            textAlign: 'center',
            fontSize: 35,
            color: '#191C4C',
          }}>
          your appointment
        </Text>
      </View>

      <View
        style={{
          flex: 0.48,
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
              Time: {time}
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
              Day: {day}
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
              Date: {date}
            </Text>
          </View>
          <View>
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
      </View>
    </ImageBackground>
  );
};

export default AppointmentDetails;
