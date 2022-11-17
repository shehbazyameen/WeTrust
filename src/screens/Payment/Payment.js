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
  Alert,
} from 'react-native';
import React, {useState,useEffect} from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import {labels} from '../../config/Lables';
import styles from './Styles';
import {InputFeild} from '../../components/inputField';
import SmallButton from '../../components/SmallButton';
import SignersSuccess from '../Signers/SignersSuccess';
import Stripe from 'react-native-stripe-api';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import fonts from '../../assests/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'react-native-axios';
import Toast from 'react-native-simple-toast';
import {
  BallIndicator,
  BarIndicator,
  DotIndicator,
  MaterialIndicator,
  PacmanIndicator,
  PulseIndicator,
  SkypeIndicator,
  UIActivityIndicator,
  WaveIndicator,
} from 'react-native-indicators';

const {height, width} = Dimensions.get('window');

const Payment = ({navigation,route}) => {
  const [loading,setLoading]=useState(false);
  const [token, setToken] = useState('');
  const [stripeToken, setStripeToken] = useState();

  useEffect(() => {
  setStripeToken(stripeToken)
  setLast4(last4)
  }, [stripeToken,last4])
  

  const addPayment=(last4,stripe)=>{

     const config = {
       headers: {Authorization: `Bearer ${token}`},
      
     };
    
     let obj = {
       service_id: route?.params?.serviceId,
       cardholder_name: cardHolder,
       date: cardHolderExp.toString(),
       last_4_digit: last4,
       stripe_token: stripe,
       document_id: route?.params?.formId,
     };
     console.log(obj,"obj check");
     let cardForm = new FormData()
     cardForm.append('service_id', route?.params?.serviceId);
     cardForm.append('cardholder_name', cardHolderNumber);
     cardForm.append('date',cardHolderExp);
     cardForm.append('last_4_digit', last4);
     cardForm.append('stripe_token', stripeToken);
     cardForm.append('document_id', route?.params?.formId);
      
        axios
          .post(
            'https://customdevu11.onlinetestingserver.com/wetrust/public/api/payment',
            obj,
            config,
          )
          .then(response => {
            setLoading(false)
            console.log(response, 'response1');

            // Toast.show(response?.data?.message);
            if (response?.status == 200) {
              console.log(response, 'PAYMENT');
              
              setcardHolder("")
              setcardHolderNumber("")
              setcardHolderExp("")
             setcardHolderCvc("")
              navigation.navigate('SignersSuccess');
            }
          })
          .catch(error => {
            setLoading(false)
             Toast.show(error?.messages);
          });

  }

   React.useEffect(() => {
     const unsubscribe = navigation.addListener('focus', () => {
       AsyncStorage.getItem('token').then(response => {
        setToken(response);
       });
      
     });

     // Return the function to unsubscribe from the event so it gets removed on unmount
     return unsubscribe;
   }, [navigation]);

  const [date, setDate] = useState(new Date());
  const [last4,setLast4]=useState('');
  const [open, setOpen] = useState(false);
  const [cardHolder, setcardHolder] = useState('');
  const [cardHolderNumber, setcardHolderNumber] = useState('');
  const [cardHolderExp, setcardHolderExp] = useState([]);
  const [cardHolderCvc, setcardHolderCvc] = useState('');

  const Secret_key =
    'pk_live_51LcDmNH2NicKN5GQVyhBXuD6MXu0cFq7MlLaA3yG9Wms39QMHbwgKMCpv5Afg7lKahUp8qD3t9lcr2IFzf0cDRMl00Ck26CC0a';

  

  //Validation on fields
  const Submit = () => {
    
    setLoading(true)
    var client = new Stripe(Secret_key);
    const obj = {
      number: cardHolderNumber,
      exp_month: cardHolderExp[0],
      exp_year: cardHolderExp[1],
      cvc: cardHolderCvc,
    };
   
    try {
      const token = client.createToken(obj);
      console.log(token,"00000")
      token.then(e => {
        console.log(e,"token1");
        if(e.error){
          setLoading(false)
          return Toast.show(e?.error?.message)
        }
        setStripeToken(e)
        setLast4(e?.card?.last4);
        
       
           addPayment(e?.card?.last4,e?.id);
        
      
      })
    } catch (e) {
      setLoading(false)
       Toast.show(e?.code)
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      style={{flex: 1, backgroundColor: colors.screenColor}}>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          setcardHolderExp([
            moment(date).format('MM'),
            moment(date).format('YYYY'),
          ]);
          console.log(date, 'date');
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="date"
        minimumDate={new Date()}
      />
      <ImageBackground
        resizeMode="stretch"
        source={Assets.backHeaderFooter}
        style={{
          flex: 1,
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            position: 'absolute',
            top: 80,
            paddingHorizontal: 32,
            height: 30,
            width: 30,
            left: 0,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            style={{alignSelf: 'center'}}
            resizeMode="contain"
            source={Assets.backArrowHeader}
          />
        </TouchableOpacity>
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
                <Text style={[styles.textSignWith]}>
                  ${route?.params?.additionalPrice}
                </Text>
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
                <Text style={[styles.textSignWith]}>Signer Charges</Text>
                <Text style={[styles.textSignWith]}>
                  ${route?.params?.signerCharges}.0
                </Text>
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
                <Text style={[styles.textSignWith]}>Total</Text>
                <Text style={[styles.textSignWith]}>
                  $
                  {route?.params?.additionalPrice +
                    route?.params?.signerCharges}
                </Text>
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
                value={cardHolder}
                onChange={e => setcardHolder(e)}
                paddingHorizontal={0}
                paddingHorizontalRight={22}
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
                keyboardType={'number-pad'}
                maxLength={16}
                value={cardHolderNumber}
                onChange={e => setcardHolderNumber(e)}
                paddingHorizontal={0}
                paddingHorizontalRight={22}
              />
            </View>
            <View style={{marginTop: 17}} />

            <View style={{flexDirection: 'row'}}>
              <View
                style={[
                  {
                    backgroundColor: colors.inputFieldBorderColor,
                    padding: 4,
                    borderRadius: 6,
                    borderRightWidth: 0.8,
                    borderBottomWidth: 0.8,
                    borderColor: colors.white,
                  },
                  {width: '52%'},
                ]}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    // setDatePickerVisibility(true);
                    setOpen(true);
                  }}
                  style={{
                    backgroundColor: colors.white,
                    paddingHorizontal: 22,
                    paddingVertical: 20,
                    borderRadius: 6,
                    borderColor: colors.inputFieldBorderColor,
                    shadow: {
                      shadowColor: '#000',
                      shadowOffset: {
                        width: 0,
                        height: 1,
                      },
                      shadowOpacity: 0.2,
                      shadowRadius: 1.41,
                      elevation: 2,
                    },

                    // alignSelf: 'center',
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <View>
                      <Text
                        style={{
                          fontFamily: fonts.SitkaDisplay,
                          fontSize: 16,
                          color: colors.primaryBlueOpacity50,
                        }}>
                        {cardHolderExp?.length
                          ? `${cardHolderExp[0]}/${cardHolderExp[1]}`
                          : 'Date'}{' '}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>

              <View style={{width: '8%'}} />
              <View style={{width: '40%'}}>
                <InputFeild
                  // refValueCurrent={refenterpassword}
                  returnKeyType={'next'}
                  // imageInputField
                  placeholder={'CVC'}
                  // leftIcon={Assets.user}
                  // rightIcon={Assets.user}
                  keyboardType={'number-pad'}
                  maxLength={3}
                  value={cardHolderCvc}
                  onChange={e => setcardHolderCvc(e)}
                  paddingHorizontal={0}
                  paddingHorizontalRight={22}
                />
              </View>
            </View>
            <View style={{marginTop: 24}} />
            <View style={{alignSelf: 'center', flexDirection: 'row'}}>
              {loading ? (
                <MaterialIndicator color="#AC872E" />
              ) : (
                <SmallButton
                  title={'Pay Now'}
                  onPress={() => {
                    // navigation.navigate('SignersSuccess');
                    if (
                      cardHolder !== '' &&
                      cardHolderNumber !== '' &&
                      cardHolderExp !== '' &&
                      cardHolderCvc
                    ) {
                      if (cardHolderNumber?.length >= 16) {
                        Submit();
                      } else {
                        Toast.show(
                          'minimum length of card number should be 16',
                        );
                      }
                    } else {
                      Toast.show('All Fields related to payment are required');
                    }
                  }}
                />
              )}
            </View>
            <View style={{marginTop: 64}} />
          </View>
        </ScrollView>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Payment;
