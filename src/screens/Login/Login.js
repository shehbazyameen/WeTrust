import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';
import {colors} from '../../config/Colors';
import {InputFeild} from '../../components/inputField';
import {Assets} from '../../assests';
import {labels} from '../../config/Lables';
import SmallButton from '../../components/SmallButton';

const Login = ({navigation}) => {
  return (
    <View style={{flex: 1, backgroundColor: colors.screenColor}}>
      <Image
        resizeMode="cover"
        style={{width: '100%', marginTop: -220, position: 'absolute', right: 8}}
        source={Assets.headerImage}
      />

      <View
        style={{
          marginTop: 122,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 22,
        }}>
        <Image resizeMode="cover" source={Assets.logo} />
        <View style={{marginTop: 52}} />

        <Text>{labels.welcomeBack}</Text>
        <View style={{marginTop: 10}} />
        <Text>{labels.loginToYourAccount}</Text>
        <View style={{marginTop: 42}} />

        <InputFeild
          // refValueCurrent={refenterpassword}
          // returnKeyType={'next'}
          // imageInputField
          placeholder={'labels.userName'}
          // leftIcon={Assets.userSolid}
          // value={email}
          // onChange={e => setEmail(e)}
        />
        <View style={{marginTop: 35}} />
        <InputFeild
          // refValueCurrent={refenterpassword}
          // returnKeyType={'next'}
          // imageInputField
          placeholder={'labels.userName'}
          // leftIcon={Assets.userSolid}
          // value={email}
          // onChange={e => setEmail(e)}
        />
        <View style={{marginTop: 42}} />

        <SmallButton title={labels.signIn} onPress={()=>{navigation.replace("HomeStack",{screen:"HomeScreen"});}} />
      </View>
    </View>
  );
};

export default Login;
