import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import fonts from '../../assests/fonts';
import * as Progress from 'react-native-progress';
import DocumentPicker from 'react-native-document-picker';
import {InputFeild} from '../../components/inputField';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
import axios from 'react-native-axios';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
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

const AppointMent = ({navigation}) => {
  //use ref
  const [token,setToken]=useState('');
   const {width, height} = Dimensions.get('window');
   const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [Phone, setPhone] = useState('');
   const [loading, setLoading] = useState(false);

  useEffect(()=>{
  AsyncStorage.getItem("token").then((response)=>{
  setToken(response)
  })

  },[])

  const useLastName = useRef();
  const refEmail = useRef();
  const refPhoneNo = useRef();

 
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);


  const bookAppointment = async () => {
    setLoading(true)
    let obj = {
      first_name: firstName,
      last_name:lastName,
      email:email,
      Phone:Phone
    };
    console.log(obj,"000")
    const config = {
      headers: {Authorization: `Bearer ${token}`},
    };
    if (firstName !== ''&& lastName!=="" && email !== '' && Phone !== '') {
      axios
        .post(
          'https://customdevu11.onlinetestingserver.com/wetrust/public/api/addAppointment',
          obj,
          config
        )
        .then(response => {
       
          if (response?.status == 200) {
            setLoading(false)
            setTimeout(() => {
              setFirstName('');
              setLastName('');
              setEmail('');
              setPhone('');

            navigation.navigate('AppointmentDetails',{date:date});
            }, 1000);
          }
        })
        .catch(error => {
          setLoading(false)
          Toast.show(error?.message);
        });
    } else {
      Toast.show('All fields are required');
    }
  };
  return (
    <View style={{flex: 1}}>
      <DatePicker
        modal
        open={open}
        date={date}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
          console.log(date, 'date');
        }}
        onCancel={() => {
          setOpen(false);
        }}
        mode="datetime"
      />
      <ImageBackground
        resizeMode="stretch"
        source={Assets.backHeaderFooter}
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 20,
          // alignItems: 'center',
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
        <Text
          style={{
            fontFamily: fonts.SitkaDisplay,
            fontSize: 24,
            color: '#191C4C',
            textAlign: 'center',
          }}>
          Book Appointment
        </Text>

        <ScrollView style={{paddingBottom: 100}}>
          <View
            style={{
              height: 50,
            }}
          />
          <InputFeild
            refValueCurrent={useLastName}
            returnKeyType={'next'}
            // imageInputField
            placeholder={'First Name'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.user}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            value={firstName}
            onChange={e => setFirstName(e)}
          />
          <View
            style={{
              height: 20,
            }}
          />
          <InputFeild
            valueRef={useLastName}
            refValueCurrent={refEmail}
            returnKeyType={'next'}
            // imageInputField
            placeholder={'Last Name'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.user}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            value={lastName}
            onChange={e => setLastName(e)}
          />
          <View
            style={{
              height: 20,
            }}
          />
          <InputFeild
            valueRef={refEmail}
            refValueCurrent={refPhoneNo}
            returnKeyType={'next'}
            // imageInputField
            placeholder={'Email'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.Email}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            value={email}
            onChange={e => setEmail(e)}
          />
          <View
            style={{
              height: 20,
            }}
          />

          <InputFeild
            valueRef={refPhoneNo}
            returnKeyType={'done'}
            // imageInputField
            placeholder={'Phone'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.user}
            paddingHorizontal={0}
            paddingHorizontalRight={22}
            value={Phone}
            onChange={e => setPhone(e)}
            keyboardType="numeric"
          />
          <View
            style={{
              height: 20,
            }}
          />

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
            ]}>
            <TouchableOpacity
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
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Text
                    style={{
                      fontFamily: fonts.SitkaDisplay,
                      fontSize: 16,
                      color: colors.primaryBlue70,
                    }}>
                    {date !== ''
                      ? moment(date).format('MMMM Do YYYY, h:mm:ss a')
                      : 'Date'}{' '}
                  </Text>
                </View>
                <View
                  style={{
                    position: 'absolute',
                    right: -6,
                  }}>
                  <Image
                    source={Assets.date}
                    style={{width: 22, height: 22}}
                    resizeMode={'contain'}
                  />
                </View>
              </View>
            </TouchableOpacity>
          </View>

          <View
            style={{
              height: height / 25,
            }}
          />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {loading ? (
              <MaterialIndicator color="#AC872E" />
            ) : (
              <TouchableOpacity
                onPress={() => bookAppointment()}
                style={{
                  backgroundColor: '#AC872E',
                  borderRadius: 6,
                  width: width / 2.2,

                  justifyContent: 'center',
                  alignItems: 'center',
                  paddingHorizontal: 18,
                  paddingVertical: 12,
                }}>
                <Text
                  style={{
                    // marginHorizontal: 40,
                    color: '#ffffff',
                    // marginVertical: 12,
                    fontFamily: fonts.SitkaDisplay,
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Book Appointment
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AppointMent;
