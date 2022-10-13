import {View, Text} from 'react-native';
import React from 'react';
import CustomHeader from '../../components/Header';
import {colors} from '../../config/Colors';
import {InputFeild} from '../../components/inputField';

const Login = () => {
  return (
    <View>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        centerTitle={'labels.home'}
        backgroundColor={colors.primary2}
      />
      <View style={{margin: 12}}>
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
