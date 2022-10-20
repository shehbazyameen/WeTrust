import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import fonts from '../../assests/fonts';
import * as Progress from 'react-native-progress';
import DocumentPicker from 'react-native-document-picker';

const SignerVerification = ({navigation}) => {
  const data = [
    {
      id: 1,
      details: 'State-issued drivers license',
    },
    {
      id: 2,
      details: 'State-issued identification card',
    },
    {
      id: 3,
      details:
        'U.S. passport issued by the U.S. Department of State U.S. military ID State,',
    },
    {
      id: 4,
      details: 'U.S. military ID',
    },
    {
      id: 5,
      details: 'State, county and local government IDs',
    },
    {
      id: 6,
      details:
        'Permanent resident card, or "green card," issued by the U.S. Citizenship and Immigration Services*',
    },
    {
      id: 7,
      details: 'Foreign passport*',
    },
    {
      id: 8,
      details: 'Drivers license officially issued in Mexico or Canada*',
    },
    {
      id: 9,
      details: 'Digital drivers license*',
    },
    {
      id: 10,
      details: 'ID deemed acceptable to the U.S.',
    },
    {
      id: 11,
      details: 'Department of Homeland Security*',
    },
    {
      id: 12,
      details:
        'Inmate ID issued by the State Department of Corrections or Federal Bureau of Prisons, ',
    },
  ];
  const [progress, setProgres] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const selectDocument = async () => {
    setShowProgress(false);
    setProgres(0);

    try {
      const res = await DocumentPicker.pickMultiple({
        type: [DocumentPicker.types.allFiles],
      });
      console.log(res, 'response');
      let muiltipleFileNames = '';
      res.map((r, i) => {
        muiltipleFileNames += `${r.name}, `;
      });
      let request = [];
      request = res?.map((res1, i) => {
        let formData = new FormData();
        formData.append('file', {
          uri: res1.uri,
          type: res1.type, // mime type
          name: res1.name,
        });
        console.log('gggg', formData);
        let obj = {
          name: res1.name,
          type: res1.type,
        };
        setTimeout(() => {
          setProgres(1);
        }, 300);
        setTimeout(() => {
          setShowProgress(true);
        }, 500);
        // Get_File_Url_Method(formData, value => {
        //   getUrlMethod(value, fieldId, label, obj);
        // });
      });
      // Get_File_Url_Method(formData, value => {
      //   setSingleDocument('Doc is Selected');
      //   props.updatedFieldValue(value, fieldId);
      // });
    } catch (err) {
      if (DocumentPicker.isCancel(err)) {
      }
    }
  };

  const {width, height} = Dimensions.get('window');
  return (
    <View style={{flex: 1, backgroundColor: colors.screenColor}}>
      <View>
        <Image
          resizeMode="cover"
          style={{
            width: '100%',
            marginTop: 0,
            position: 'absolute',
            right: 8,
          }}
          source={Assets.headerImage}
        />
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
      </View>

      <ScrollView>
        <View style={{alignItems: 'center', justifyContent: 'center',paddingHorizontal:20}}>
          <Text
            style={{
              fontSize: 24,
              fontFamily: fonts.SitkaDisplay,
              color: '#191C4C',
            }}>
            ID Verification
          </Text>
          <TouchableOpacity
            style={{marginTop: 40}}
            onPress={() => selectDocument()}>
            <Image
              source={showProgress ? Assets.docUploadActive : Assets.docUpload}
            />
          </TouchableOpacity>
          <Text
            style={{
              marginTop: 25,
              fontSize: 24,
              fontFamily: fonts.SitkaDisplay,
              color: '#191C4C',
            }}>
            Upload Document
          </Text>
          <View style={{marginTop: 50}}>
            <Progress.Bar
              progress={progress}
              indeterminateAnimationDuration={10000}
              color="#73CDC2"
              borderColor="#ffffff"
              width={width / 2}
            />
          </View>
          {showProgress && (
            <Text
              style={{
                marginTop: 25,
                color: '#191C4C',
                fontFamily: fonts.SitkaDisplay,
                fontSize: 14,
              }}>
              100% Uploading Complete
            </Text>
          )}
          <View
            style={{
              shadowColor: colors.dots,
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              margin: 20,
              // height: height / 1.8,
              //   backgroundColor: 'red',
              backgroundColor: colors.backgroundColor,
             
              borderRadius: 6,
              paddingHorizontal: 15,
              padding:5,
            }}>
            <Text
              style={{
                marginTop: 15,
                textAlign: 'center',
                fontFamily: fonts.SitkaDisplay,
                fontSize: 18,
                fontWeight: 'bold',
                color: '#191C4D',
              }}>
              Acceptable Forms of Identification for Notary Services
            </Text>

            <View style={{marginTop: 20}}>
              {data.map((item, index) => {
                return (
                  <View key={item?.id} style={{flexDirection: 'row'}}>
                    <View
                      style={{
                        height: 8,
                        margin: 7,
                        width: 8,
                        borderRadius: 10,
                        backgroundColor: '#AC872E',
                      }}
                    />
                    <Text
                      style={{
                        paddingHorizontal: 10,
                        fontFamily: fonts.SEGOEUI,
                        color: '#707070',
                      }}>
                      {item?.details}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={{paddingVertical: 20, paddingBottom: 30}}>
            {showProgress && (
              <TouchableOpacity
                onPress={() => navigation.navigate('Payment')}
                style={{backgroundColor: '#AC872E', borderRadius: 6}}>
                <Text
                  style={{
                    marginHorizontal: 40,
                    color: '#ffffff',
                    marginVertical: 12,
                    fontFamily: fonts.SitkaDisplay,
                    fontWeight: 'bold',
                    fontSize: 14,
                  }}>
                  Pay Now
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignerVerification;
