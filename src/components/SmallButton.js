import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import fonts from '../assests/fonts';
import {colors} from '../config/Colors';
const {width, height} = Dimensions.get('window');

const SmallButton = ({title = '', backgroundColor, onPress = () => {}}) => {
  return (
    <>
      <TouchableOpacity style={[styles.main]} onPress={onPress}>
        <Text style={[styles.text]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: colors.btnColor1,
    height: 37,
    width: 147,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.SitkaDisplay,
    fontSize: 14,
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default SmallButton;
