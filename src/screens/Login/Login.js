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

const Login = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: colors.screenColor}}>
      <View style={{flex: 1, backgroundColor: colors.screenColor}}>
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

        <View
          style={{
            marginTop: 122,
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
            <Text style={[styles.textLoginYourAccount]}>
              {labels.loginToYourAccount}
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
              placeholder={labels.password}
              leftIcon={Assets.Password}
              // value={email}
              // onChange={e => setEmail(e)}
            />
            <View style={{marginTop: 42}} />
            <SmallButton
              title={labels.signIn}
              onPress={() => {
                navigation.replace('HomeStack', {screen: 'HomeScreen'});
              }}
            />
            <View style={{marginTop: 53}} />
            <Text style={[styles.textSignWith]}>{labels.orSignWth}</Text>
            <View style={{marginTop: 16}} />
            <View
              style={{
                flexDirection: 'row',
              }}>
              <TouchableOpacity activeOpacity={0.7}>
                <Image resizeMode="contain" source={Assets.twitter} />
              </TouchableOpacity>
              <View style={{width: 16}} />

              <TouchableOpacity activeOpacity={0.7}>
                <Image resizeMode="contain" source={Assets.google} />
              </TouchableOpacity>
              <View style={{width: 16}} />
              <TouchableOpacity activeOpacity={0.7}>
                <Image resizeMode="contain" source={Assets.facebook} />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 64}} />
            <View
              style={{
                flexDirection: 'row',
              }}>
              <Text style={[styles.textSignWith]}>{labels.dontAccount}</Text>
              <TouchableOpacity
                style={{}}
                onPress={() => {
                  navigation.navigate('Signup');
                }}>
                <Text style={[styles.textSignhere]}>{labels.signUpHere}</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 64}} />
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
