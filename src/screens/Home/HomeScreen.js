import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Styles from './Styles';
import ButtonLarge from '../../components/Buton';
import CustomHeader from '../../components/Header';

const HomeScreen = ({navigation}) => {
  return (
    <View style={[Styles.Container]}>
      <CustomHeader
        barStyle="light-content"
        statusBarProps={{backgroundColor: 'transparent', translucent: true}}
        centerTitle={'labels.home'}
        backgroundColor={colors.primary2}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('AuthenticationStack');
        }}>
        <Text>HomeScreen</Text>
        <ButtonLarge title="ATTORNEYS" price="Fees 25" />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
