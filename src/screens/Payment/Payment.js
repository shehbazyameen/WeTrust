import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ImageBackground,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import {labels} from '../../config/Lables';
import styles from './Styles';
import {InputFeild} from '../../components/inputField';
import SmallButton from '../../components/SmallButton';
import SignersSuccess from '../Signers/SignersSuccess';

const {height, width} = Dimensions.get('window');
const Payment = ({navigation}) => {
   const {width, height} = Dimensions.get('window');
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: colors.screenColor}}>
      <TouchableOpacity
        style={{
          position: 'absolute',
          top: 80,
          paddingHorizontal: 32,
        }}>
        <Image
          style={{alignSelf: 'center'}}
          resizeMode="contain"
          source={Assets.backArrowHeader}
        />
      </TouchableOpacity>

      <ImageBackground
        resizeMode="stretch"
        source={Assets.backHeaderFooter}
        style={{
          flex:1,
          justifyContent: 'center',
        }}>
        <View style={{marginTop: 100}} />
        <ScrollView>
          <View style={{padding: 22}}>
            <Text style={[styles.textWelcome]}>{'Payment Summary'}</Text>
            <View style={{marginTop: 15}} />
            <Image
              style={{alignSelf: 'center'}}
              resizeMode="cover"
              source={Assets.buyIcon}
            />
            <View style={{marginTop: 16}} />

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
            <View style={{marginTop: 22}} />
            <View>
              <InputFeild
                // refValueCurrent={refenterpassword}
                returnKeyType={'next'}
                // imageInputField
                placeholder={'Card Holder Name'}
                // leftIcon={Assets.user}
                // rightIcon={Assets.user}
                // value={email}
                // onChange={e => setEmail(e)}
              />
            </View>
            <View style={{marginTop: 17}} />
            <View>
              <InputFeild
                // refValueCurrent={refenterpassword}
                returnKeyType={'next'}
                // imageInputField
                placeholder={'Card Number'}
                // leftIcon={Assets.user}
                // rightIcon={Assets.user}
                // value={email}
                // onChange={e => setEmail(e)}
              />
            </View>
            <View style={{marginTop: 17}} />

            <View style={{flexDirection: 'row'}}>
              <View style={{width: '60%'}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  returnKeyType={'next'}
                  // imageInputField
                  placeholder={'Exp Date'}
                  // leftIcon={Assets.user}
                  // rightIcon={Assets.user}
                  // value={email}
                  // onChange={e => setEmail(e)}
                />
              </View>

              <View style={{width: '40%'}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  returnKeyType={'next'}
                  // imageInputField
                  placeholder={'CVC'}
                  // leftIcon={Assets.user}
                  // rightIcon={Assets.user}
                  // value={email}
                  // onChange={e => setEmail(e)}
                />
              </View>
            </View>
            <View style={{marginTop: 24}} />
            <View style={{alignSelf: 'center'}}>
              <SmallButton
                title={'Pay Now'}
                onPress={() => {
                   navigation.navigate('SignersSuccess');
                }}
              />
            </View>

            <View style={{marginTop: 64}} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Payment;
