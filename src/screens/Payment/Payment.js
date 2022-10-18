import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import {labels} from '../../config/Lables';
import styles from './Styles';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';

const {height, width} = Dimensions.get('window');
const Payment = ({navigation}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: colors.screenColor}}>
      <ImageBackground
        resizeMode="stretch"
        source={Assets.backHeaderFooter}
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <View style={{padding: 22}}>
          <View
            style={{
              height: width / 2.2,
              backgroundColor: colors.screenColor,
              padding: 22,
              borderRadius: 12,

              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 3,
              },
              shadowOpacity: 0.27,
              shadowRadius: 4.65,
              elevation: 6,
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 12,
              }}>
              <Text style={[styles.textSignWith]}>Notary Fees</Text>
              <Text style={[styles.textSignWith]}>$1000.00</Text>
            </View>
            <View
              style={{
                height: 0.7,
                backgroundColor: colors.primaryBlueOpacity50,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 12,
              }}>
              <Text style={[styles.textSignWith]}>Notary Fees</Text>
              <Text style={[styles.textSignWith]}>$1000.00</Text>
            </View>

            <View
              style={{
                height: 0.7,
                backgroundColor: colors.primaryBlueOpacity50,
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 12,
              }}>
              <Text style={[styles.textSignWith]}>Notary Fees</Text>
              <Text style={[styles.textSignWith]}>$1000.00</Text>
            </View>
          </View>

          <CreditCardInput />
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Payment;
