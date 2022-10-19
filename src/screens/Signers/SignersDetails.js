import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import fonts from '../../assests/fonts';
import {InputFeild} from '../../components/inputField';

const SignersDetails = ({navigation}) => {
  const [isKeyboardVisible, setKeyboardVisible] = useState(false);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setKeyboardVisible(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setKeyboardVisible(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);
  const {width, height} = Dimensions.get('window');
  return (
    <ImageBackground
      resizeMode="stretch"
      source={Assets.backHeaderFooter}
      style={{
        flex: 1,
        justifyContent: 'center',
        padding: 40,
        // alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          position: 'absolute',
          top: 80,
          paddingHorizontal: 32,
          height: 30,
          width: 30,
          left: 0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{alignSelf: 'center'}}
          resizeMode="contain"
          source={Assets.backArrowHeader}
        />
      </TouchableOpacity>
      <View style={{marginTop: 100}} />
      <Text
        style={{
          fontFamily: fonts.SitkaDisplay,
          fontSize: 24,
          color: '#191C4C',
          textAlign: 'center',
        }}>
        Witness Details
      </Text>
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
        <View
          style={{
            height: 20,
          }}
        />

        {/* <InputFeild
            onFocus={showDatePicker}
            // refValueCurrent={refenterpassword}
            returnKeyType={'next'}
            // imageInputField
            placeholder={'Date'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.user}
            // value={email}
            // onChange={e => setEmail(e)}
          /> */}

        <View style={{marginHorizontal: 40, marginVertical: 25}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignerVerification')}
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
    </ImageBackground>
  );
};

export default SignersDetails;
