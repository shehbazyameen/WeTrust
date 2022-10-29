import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {colors} from '../../config/Colors';
import {Assets} from '../../assests';
import fonts from '../../assests/fonts';
import * as Progress from 'react-native-progress';
import DocumentPicker from 'react-native-document-picker';

const DocumentUpload = ({navigation,route}) => {
  let serviceId =route?.params?.serviceId
  console.log(serviceId,"serviceId");
  const [progress, setProgres] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const [fileResponse,setFileResponse]=useState({});
  const selectDocument = async () => {
    setShowProgress(false);
    setProgres(0);

    try {
      const res = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
        mode: 'import',
        copyTo: 'documentDirectory',
      });
      
      console.log(res, 'response');
    
      let formData = new FormData();
      formData.append('document', {
        uri: res.uri,
        type: res.type, // mime type
        name: res.name,
        fileCopyUri: res.fileCopyUri,
      });
      console.log(formData, 'formData');
        setFileResponse(formData);
        setTimeout(() => {
          setProgres(1);
        }, 300);
        setTimeout(() => {
          setShowProgress(true);
        }, 500);
      // let muiltipleFileNames = '';
      // res.map((r, i) => {
      //   muiltipleFileNames += `${r.name}, `;
      // });

      let request = [];
      // request = res?.map((res1, i) => {
      //   // let formData = new FormData();
      //   // formData.append('file', {
      //   //   uri: res1.uri,
      //   //   type: res1.type, // mime type
      //   //   name: res1.name,
      //   //   fileCopyUri : res1.fileCopyUri,
      //   // });
      //   // console.log('gggg', request);

      //   let obj = {
      //     name: res1.name,
      //     type: res1.type,
      //   };

      //   // Get_File_Url_Method(formData, value => {
      //   //   getUrlMethod(value, fieldId, label, obj);
      //   // });
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

  // useEffect(()=>{
  //   setProgres(0.1)
  //   setTimeout(()=>{
  //     setProgres(1)
  //   },1000)
  // },[])
  const {width, height} = Dimensions.get('window');
  return (
    <>
      <ImageBackground
        resizeMode="stretch"
        source={Assets.backHeaderFooter}
        style={{
          flex: 1,
          // justifyContent: 'center',
          alignItems: 'center',
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
        <View>
          {/* <View style={{height: height / 6}}></View> */}
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            {/* <Text
          style={{
            fontSize: 24,
            fontFamily: fonts.SitkaDisplay,
            color: '#191C4C',
          }}>
          ID Verification
        </Text> */}
            <TouchableOpacity
              style={{marginTop: 40}}
              onPress={() => selectDocument()}>
              <Image
                source={
                  showProgress ? Assets.docUploadActive : Assets.docUpload
                }
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
            <View style={{height: height / 5}}></View>
            <View>
              {showProgress && (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('Signers',{serviceId:serviceId,document:fileResponse})
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
                    Get Started
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      </ImageBackground>
    </>
  );
};

export default DocumentUpload;
