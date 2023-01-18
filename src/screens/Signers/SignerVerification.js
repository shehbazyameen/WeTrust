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

const SignerVerification = ({navigation, route}) => {
  // const {hasSigner,hasWitness}=route?.params;
  console.log(route?.params, '000');
  const [idVerificationDocuments, setIdVerificationDocuments] = useState({});
  const [loading, setLoading] = useState(false);
  const [token, setToken] = useState('');
  // const {
  //   Phone,
  //   document,
  //   email,
  //   firstName,
  //   lastName,
  //   serviceId,
  //   hasSigner,
  //   hasWitness,
  // } = route?.params?.allData;
   useEffect(() => {
     AsyncStorage.getItem('token').then(response => {
       setToken(response);
     });
      
   }, []);

  //submit documents

  const docsSubmit = async () => {
    setLoading(true);
 
   
    let obj = {
      phone: route?.params?.allData?.Phone,
      document: route?.params?.allData?.document?._parts?.[0][1],
      email: route?.params?.allData?.email,
      first_name: route?.param?.allData?.firstName,
      last_name: route?.params?.allData?.lastName,
      service_id: route?.params?.allData?.serviceId,
      has_signer: route?.params?.allData?.hasSigner,
      has_witness: route?.params?.allData?.hasWitness,
      id_verification_document: idVerificationDocuments?._parts?.[0][1],
    };
  //  console.log(route?.params?.allData, '000 route params');
  //   console.log(obj,"obj check")

    //  const form = new FormData();
    //  Object.keys(obj).forEach(key => {
    //    formData.append(key,form[key]);
    //  });
    //  console.log(form,"form check")
     let phoneData = new FormData();
     phoneData.append('phone',route?.params?.signerData==true?route?.params?.allData?.Phone:null);

     phoneData.append('document',route?.params?.signerData==true ? route?.params?.allData?.document?._parts?.[0][1]:route?.params?.document?._parts?.[0][1]);

     phoneData.append('email',route?.params?.signerData==true? route?.params?.allData?.email:null);

     phoneData.append('first_name',route?.params?.signerData==true?route?.params?.allData?.firstName:null);

     phoneData.append('last_name',route?.params?.signerData==true? route?.params?.allData?.lastName:null);

     phoneData.append(
       'service_id',
       route?.params?.signerData == true
         ? route?.params?.allData?.serviceId
         : route?.params?.serviceId,
     );

     phoneData.append('has_signer',route?.params?.signerData==true ? route?.params?.allData?.hasSigner: route?.params?.hasSigner);
      // phoneData.append('has_signer', 0);

     phoneData.append('has_witness',route?.params?.signerData==true ? route?.params?.allData?.hasWitness:route?.params?.hasWitness);
    // phoneData.append('has_witness', 0);

     phoneData.append(
       'id_verification_document',
      idVerificationDocuments?._parts?.[0][1]
     );
    // phoneData.append('email', 'abc@ymail.com');
   
     console.log(
       phoneData,
       //  documentData,
       //  emailData,
       //  firstNameData,
       //  LastNameData,
       //  ServicesData,
       //  hasSignerData,
       //  hasWitnessData,
       //  idVerificationDocuments,
       'all form data check',
     );

      
        // let formData = new FormData();
      

        // let id_verificationDocumentData =new FormData()
        // id_verificationDocumentData.append(idVerificationDocuments);

       

       
      
     const config = {
       headers: {Authorization: `Bearer ${token}`,
         'content-type': 'multipart/form-data',
         'Accept':'multipart/form-data',
        
        },
     }; 

    //  alert(JSON.stringify(phoneData?._parts));
if(true){
  
   axios
     .post(
       'https://customdevu11.onlinetestingserver.com/wetrust/public/api/addDocument',
       phoneData,
       config,
     )
     .then(response => {
       console.log(response, 'response');
       setLoading(false);

       // Toast.show(response?.data?.message);
       if (response?.status == 200) {
        
         setTimeout(() => {
           navigation.navigate('Payment', {
             serviceId:
               route?.params?.signerData == true
                 ? route?.params?.allData?.serviceId
                 : route?.params?.serviceId,
             document: route?.params?.allData?.document?._parts?.[0]?.[1],
             additionalPrice: response?.data?.price,
             formId: response?.data?.form_id,
             signerCharges: route?.params?.signerData == true?5:0
           });
         }, 1000);
       }
     })
     .catch(error => {
       setLoading(false);
     
       console.log(error.config,"error object")
       //  Toast.show(error?.messages);
     });
}
   
  };
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
      const res = await DocumentPicker.pick({
        type: [DocumentPicker.types.allFiles],
        mode: 'import',
        copyTo: 'documentDirectory',
        allowMultiSelection:true
      });
      
      console.log(res, 'response');
     
    
      
        let formData = new FormData();
        formData.append('id_verification_document', {
          uri: res[0].fileCopyUri,
          type: res[0].type, // mime type
          name: res[0].name,
          fileCopyUri: res[0].fileCopyUri,
        });
        
        setIdVerificationDocuments(formData);
        console.log('gggg', formData);
        // let obj = {
        //   name: res1.name,
        //   type: res1.type,
        // };
        setTimeout(() => {
          setProgres(1);
        }, 300);
        setTimeout(() => {
          setShowProgress(true);
        }, 500);
        // Get_File_Url_Method(formData, value => {
        //   getUrlMethod(value, fieldId, label, obj);
        // });
   
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
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingHorizontal: 20,
          }}>
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
              padding: 5,
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
          {loading ? (
            <MaterialIndicator color="#AC872E" />
          ) : (
            <View style={{paddingVertical: 20, paddingBottom: 30}}>
              {showProgress && (
                <TouchableOpacity
                  onPress={() =>
                    // navigation.navigate('Payment')
                    docsSubmit()
                  }
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
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default SignerVerification;
