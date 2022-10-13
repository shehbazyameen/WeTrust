import {View, Text, TouchableOpacity, Alert} from 'react-native';
import React from 'react';
import Styles from './Styles';
import ButtonLarge from '../../components/Buton';

const HomeScreen = ({navigation}) => {
  return (
    <View style={[Styles.Container]}>
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
