import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

const ButtonLarge = ({title = '', price = false, backgroundColor}) => {
  return (
    <>
      <TouchableOpacity style={[styles.main]}>
        <Text>{title}</Text>
        <Text style={{paddingTop: 12}}>{price}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#AC872E',
    opacity:1,
    height: width / 5,
    width: width / 2,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonLarge;
