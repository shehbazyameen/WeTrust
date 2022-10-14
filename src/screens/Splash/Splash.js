import {View, Image} from 'react-native';
import React from 'react';
import styles from './Styles';
import {Assets} from '../../assests';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Intro');
  }, 1000);

  return (
    <View style={[styles.Container]}>
      <Image source={Assets.splashLogo} />
    </View>
  );
};

export default Splash;
