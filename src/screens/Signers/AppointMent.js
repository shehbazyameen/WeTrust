import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import fonts from '../../assests/fonts';
import * as Progress from 'react-native-progress';
import DocumentPicker from 'react-native-document-picker';
import {InputFeild} from '../../components/inputField';
import DatePicker from 'react-native-date-picker';
import moment from 'moment/moment';
const AppointMent = ({navigation}) => {
         const {width, height} = Dimensions.get('window');
         const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

          const showDatePicker = () => {
           setDatePickerVisibility(true);
         };

          const hideDatePicker = () => {
           setDatePickerVisibility(false);
         };
     const [date, setDate] = useState(
       new Date(),
     );
     const [open, setOpen] = useState(false);
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
        maximumDate={new Date()}
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
        <View style={{height: height / 6}} />
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
            // refValueCurrent={refenterpassword}
            returnKeyType={'next'}
            // imageInputField
            placeholder={'First Name'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.user}
            // value={email}
            // onChange={e => setEmail(e)}
          />
          <View
            style={{
              height: 20,
            }}
          />
          <InputFeild
            // refValueCurrent={refenterpassword}
            returnKeyType={'next'}
            // imageInputField
            placeholder={'Last Name'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.user}
            // value={email}
            // onChange={e => setEmail(e)}
          />
          <View
            style={{
              height: 20,
            }}
          />
          <InputFeild
            // refValueCurrent={refenterpassword}
            returnKeyType={'next'}
            // imageInputField
            placeholder={'Email'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.Email}
            // value={email}
            // onChange={e => setEmail(e)}
          />
          <View
            style={{
              height: 20,
            }}
          />

          <InputFeild
            // refValueCurrent={refenterpassword}
            returnKeyType={'next'}
            // imageInputField
            placeholder={'Phone'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.user}
            // value={email}
            // onChange={e => setEmail(e)}
          />
          <View
            style={{
              height: 20,
            }}
          />

          {/* <InputFeild
            onFocus={showDatePicker}
            // refValueCurrent={refenterpassword}
            returnKeyType={'next'}
            // imageInputField
            placeholder={'Date'}
            // leftIcon={Assets.Password}
            rightIcon={Assets.user}
            // value={email}
            // onChange={e => setEmail(e)}
          /> */}
          <TouchableOpacity
            onPress={() => {
              // setDatePickerVisibility(true);
              setOpen(true);
            }}
            style={{
              backgroundColor: colors.white,
              paddingHorizontal: 30,
              paddingVertical: 20,

              borderRadius: 6,
              // borderRightWidth: 0.8,
              // borderBottomWidth: 0.8,
              borderColor: colors.inputFieldBorderColor,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 1,
              },
              shadowOpacity: 0.2,
              shadowRadius: 1.41,
              elevation: 2,
              borderWidth: 3,

              // alignSelf: 'center',
            }}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <View>
                <Text>
                  {date !== ''
                    ? moment(date).format('MMMM Do YYYY, h:mm:ss a')
                    : 'Date'}{' '}
                </Text>
              </View>
              <View style={{justifyContent: 'flex-end'}}>
                <Image source={Assets.user} />
              </View>
            </View>
          </TouchableOpacity>

          <View style={{marginHorizontal: 90, marginVertical: 30}}>
            <TouchableOpacity
              onPress={() => navigation.navigate('AppointmentDetails')}
              style={{
                backgroundColor: '#AC872E',
                borderRadius: 6,

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
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default AppointMent;
