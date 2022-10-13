import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {colors} from '../config/Colors';
const {width, height} = Dimensions.get('window');

const SmallButton = ({title = '', backgroundColor}) => {
  return (
    <>
      <TouchableOpacity style={[styles.main]}>
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
    fontSize: 14,
    color: colors.white,
  },
});

export default SmallButton;
