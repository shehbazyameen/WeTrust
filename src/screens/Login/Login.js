import {
  View,
  Text,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import {colors} from '../../config/Colors';
import {InputFeild} from '../../components/inputField';
import {Assets} from '../../assests';
import {labels} from '../../config/Lables';
import SmallButton from '../../components/SmallButton';
import styles from './Styles';
import axios from 'react-native-axios';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading,setLoading]=useState(false);

  const login = () => {
    setLoading(true)
    let obj = {
      email,
      password,
    };

    if (email !== '' && password !== '') {
      axios
        .post(
          'https://customdevu11.onlinetestingserver.com/wetrust/public/api/login',
          obj,
        )
        .then(response => {
           AsyncStorage.setItem('token', response.data.access_token);
            Toast.show(response?.data?.message);
           setLoading(false)
          console.log(response,"response")
          if (response?.status == 200) {
            setTimeout(() => {
              setEmail('');
              setPassword('');
          
              navigation.navigate('HomeStack', {screen: 'HomeScreen'});
            }, 1000);
          }
        }).catch((error)=>{
           setLoading(false);
          Toast.show("Email or password incorrect")
        })
    } else {
      setLoading(false)
      Toast.show('All fields are required');
      
    }
  };

  //use ref
  const refenterEmail = useRef();
  const refenterNewPassword = useRef();

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
              position: 'absolute',
            }}
            source={Assets.headerImage}
          />
        </View>

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
              refValueCurrent={refenterNewPassword}
              returnKeyType={'next'}
              // imageInputField
              placeholder={labels.userName}
              leftIcon={Assets.user}
              // rightIcon={Assets.user}
              value={email}
              onChange={e => setEmail(e)}
            />
            <View style={{marginTop: 35}} />
            <InputFeild
              valueRef={refenterNewPassword}
              // imageInputField
              returnKeyType={'done'}
              placeholder={labels.password}
              leftIcon={Assets.Password}
              value={password}
              onChange={e => setPassword(e)}
            />
            <View style={{marginTop: 42}} />
            {loading ? (
              <MaterialIndicator color="#AC872E" />
            ) : (
              <SmallButton
                title={labels.signIn}
                onPress={() => {
                  // navigation.navigate('Signup');
                  login();
                }}
              />
            )}

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
