import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './Styles';

const Splash = ({navigation}) => {
  setTimeout(() => {
    navigation.navigate('Intro');
  }, 1000);

  return (
    <View style={[styles.Container]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('HomeStack');
        }}>
        <Text>Splash</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Splash;
