import {View, Text, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';
import {colors} from '../../config/Colors';
import {InputFeild} from '../../components/inputField';
import {Assets} from '../../assests';
import {labels} from '../../config/Lables';

const Login = () => {
  return (
    <View style={{flex: 1}}>
      {/* <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        centerTitle={'labels.home'}
        backgroundColor={colors.primary2}
      /> */}
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

        <Text>{labels.welcomeBack}</Text>
        <Text>{labels.loginToYourAccount}</Text>

        <InputFeild
          // refValueCurrent={refenterpassword}
          // returnKeyType={'next'}
          // imageInputField
          placeholder={'labels.userName'}
          // leftIcon={Assets.userSolid}
          // value={email}
          // onChange={e => setEmail(e)}
        />
      </View>
    </View>
  );
};

export default Login;
