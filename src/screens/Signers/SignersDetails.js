import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import fonts from '../../assests/fonts';

const SignersDetails = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={{flex: 1, backgroundColor: colors.screenColor}}>
      <View>
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            marginTop: -220,
            position: 'absolute',
            right: 8,
          }}
          source={Assets.headerImage}
        />
        <TouchableOpacity style={{}}>
          <Image
            style={{position: 'absolute', top: 90, marginLeft: 30}}
            source={Assets.forwardArrow}></Image>
        </TouchableOpacity>
      </View>
      <View style={{height: height / 5}}></View>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <Text
          style={{
            fontFamily: fonts.SitkaDisplay,
            fontSize: 24,
            color: '#191C4C',
          }}>
          Witness Details
        </Text>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: '#A5822C',
            opacity: 1,
            height: width / 5,
            width: width / 2,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 60,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 20,
              fontFamily: fonts.SitkaDisplay,
            }}>
            CO-SIGNER
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {}}
          style={{
            backgroundColor: '#A5822C',
            opacity: 1,
            height: width / 5,
            width: width / 2,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 110,
          }}>
          <Text
            style={{
              color: '#ffffff',
              fontSize: 20,
              fontFamily: fonts.SitkaDisplay,
            }}>
            WITNESS
          </Text>
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={{flexDirection: 'row', marginTop: 110}}>
            <Text style={{color: '#191C4D'}}>Click here to </Text>
            <Text style={{color: '#AC872E', textDecorationLine: 'underline'}}>
              Skip
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SignersDetails;
