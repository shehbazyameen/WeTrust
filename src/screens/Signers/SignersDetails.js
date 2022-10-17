import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import fonts from '../../assests/fonts';
import {InputFeild} from '../../components/inputField';

const SignersDetails = ({navigation}) => {
  const {width, height} = Dimensions.get('window');
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{flex: 1, backgroundColor: colors.screenColor}}>
        <View style={{flex: 1, backgroundColor: colors.screenColor}}>
          <View>
            <Image
              resizeMode="cover"
              style={{
                width: '100%',
                marginTop: 0,
                position: 'absolute',
                right: 8,
              }}
              source={Assets.headerImage}
            />
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              activeOpacity={0.7}
              style={{padding: 2}}>
              <Image
                style={{
                  position: 'absolute',
                  bottom: 20,
                  left: 40,
                }}
                resizeMode="cover"
                source={Assets.backArrowHeader}
              />
            </TouchableOpacity>
          </View>
          <View style={{height: height / 5}}></View>
          <View
            style={{
              // justifyContent: 'center',
              // alignItems: 'center',
              paddingHorizontal: 50,
            }}>
            <Text
              style={{
                fontFamily: fonts.SitkaDisplay,
                textAlign: 'center',
                fontSize: 24,
                color: '#191C4C',
              }}>
              Witness Details
            </Text>
            {/* <TouchableOpacity
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
        </TouchableOpacity> */}
            <ScrollView style={{paddingBottom: 100}}>
              <View
                style={{
                  height: 50,
                }}
              />
              <InputFeild
                // refValueCurrent={refenterpassword}
                returnKeyType={'next'}
                // imageInputField
                placeholder={'First Name'}
                // leftIcon={Assets.Password}
                rightIcon={Assets.user}
                // value={email}
                // onChange={e => setEmail(e)}
              />
              <View
                style={{
                  height: 20,
                }}
              />
              <InputFeild
                // refValueCurrent={refenterpassword}
                returnKeyType={'next'}
                // imageInputField
                placeholder={'Last Name'}
                // leftIcon={Assets.Password}
                rightIcon={Assets.user}
                // value={email}
                // onChange={e => setEmail(e)}
              />
              <View
                style={{
                  height: 20,
                }}
              />
              <InputFeild
                // refValueCurrent={refenterpassword}
                returnKeyType={'next'}
                // imageInputField
                placeholder={'Email'}
                // leftIcon={Assets.Password}
                rightIcon={Assets.Email}
                // value={email}
                // onChange={e => setEmail(e)}
              />
              <View
                style={{
                  height: 20,
                }}
              />

              <InputFeild
                // refValueCurrent={refenterpassword}
                returnKeyType={'next'}
                // imageInputField
                placeholder={'Phone'}
                // leftIcon={Assets.Password}
                rightIcon={Assets.user}
                // value={email}
                // onChange={e => setEmail(e)}
              />
              <View style={{marginHorizontal: 40, marginVertical: 25}}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('HomeStack', {screen: 'Signers'})
                  }
                  style={{
                    backgroundColor: '#AC872E',
                    borderRadius: 6,

                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingHorizontal: 40,
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
                    Continue
                  </Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </View>
      </KeyboardAvoidingView>
      <View style={{height: 100}}></View>
      <Image
        style={{position: 'absolute', right: 0, bottom: 0}}
        resizeMode="contain"
        source={Assets.footer}
      />
    </>
  );
};

export default SignersDetails;
