import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../config/Colors';
import {InputFeild} from '../../components/inputField';
import {Assets} from '../../assests';
import {labels} from '../../config/Lables';
import SmallButton from '../../components/SmallButton';
import styles from './Styles';

const Signup = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: colors.screenColor}}>
      <View style={{flex: 1, backgroundColor: colors.screenColor}}>
        <View>
          <Image
            resizeMode="cover"
            style={{
              width: '100%',
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

        <View
          style={{
            // marginTop: 122,
            justifyContent: 'center',
            marginHorizontal: 22,
          }}>
          <Image
            style={{alignSelf: 'center'}}
            resizeMode="cover"
            source={Assets.logo}
          />
          <View style={{marginTop: 10}} />
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: 'center',
            }}>
            <View style={{marginTop: 42}} />
            <Text style={[styles.textWelcome]}>{labels.welcomeBack}</Text>
            <View style={{marginTop: 10}} />
            <Text style={[styles.createYourAccount]}>
              {labels.createYourAccount}
            </Text>
            <View style={{marginTop: 42}} />
            <InputFeild
              // refValueCurrent={refenterpassword}
              returnKeyType={'next'}
              // imageInputField
              placeholder={labels.userName}
              leftIcon={Assets.user}
              // rightIcon={Assets.user}
              // value={email}
              // onChange={e => setEmail(e)}
            />
            <View style={{marginTop: 35}} />
            <InputFeild
              // refValueCurrent={refenterpassword}
              // returnKeyType={'next'}
              // imageInputField
              placeholder={labels.email}
              leftIcon={Assets.Email}
              // value={email}
              // onChange={e => setEmail(e)}
            />
            <View style={{marginTop: 35}} />
            <InputFeild
              // refValueCurrent={refenterpassword}
              // returnKeyType={'next'}
              // imageInputField
              placeholder={labels.password}
              leftIcon={Assets.Password}
              // value={email}
              // onChange={e => setEmail(e)}
            />
            <View style={{marginTop: 42}} />
            <SmallButton
              title={labels.signUp}
              onPress={() => {
                navigation.replace('HomeStack', {screen: 'Payment'});
              }}
            />
            <View style={{marginTop: 64}} />
          </ScrollView>
        </View>

        {/* <Image
          style={{position: 'absolute', right: 0, bottom: 0}}
          resizeMode="contain"
          source={Assets.footer}
        /> */}
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
