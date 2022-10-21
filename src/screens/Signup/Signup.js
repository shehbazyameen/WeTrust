import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from '../../config/Colors';
import {InputFeild} from '../../components/inputField';
import {Assets} from '../../assests';
import {labels} from '../../config/Lables';
import SmallButton from '../../components/SmallButton';
import styles from './Styles';

const Signup = ({navigation}) => {
  //use ref
  const userNameRef = useRef();
  const refenterEmail = useRef();
  const refenterNewPassword = useRef();

  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: colors.screenColor}}>
      <View style={{flex: 1, backgroundColor: colors.screenColor}}>
        <ImageBackground
          resizeMode="stretch"
          source={Assets.backHeaderFooter}
          style={{
            flex: 1,
            justifyContent: 'center',
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
          <View
            style={{
              marginTop: 90,
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
                refValueCurrent={userNameRef}
                returnKeyType={'next'}
                // imageInputField
                placeholder={labels.userName}
                leftIcon={Assets.user}
                // rightIcon={Assets.user}
                value={userName}
                onChange={e => setUserName(e)}
              />
              <View style={{marginTop: 35}} />
              <InputFeild
                valueRef={userNameRef}
                refValueCurrent={refenterEmail}
                returnKeyType={'next'}
                // imageInputField
                placeholder={labels.email}
                leftIcon={Assets.Email}
                value={email}
                onChange={e => setEmail(e)}
              />
              <View style={{marginTop: 35}} />
              <InputFeild
                valueRef={refenterEmail}
                returnKeyType={'done'}
                // imageInputField
                placeholder={labels.password}
                leftIcon={Assets.Password}
                value={password}
                secureTextEntry={true}
                password={true}
                onChange={e => setPassword(e)}
              />
              <View style={{marginTop: 42}} />
              <SmallButton
                title={labels.signUp}
                onPress={() => {
                  navigation.replace('HomeStack', {screen: 'HomeScreen'});
                }}
              />
              <View style={{marginTop: 64}} />
            </ScrollView>
          </View>
        </ImageBackground>

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
