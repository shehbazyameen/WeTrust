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
import Toast from 'react-native-simple-toast';

const Signers = ({navigation, route}) => {
  console.log(route?.params, 'all data');
  const [progress, setProgres] = useState(0);
  const [showProgress, setShowProgress] = useState(false);
  const {width, height} = Dimensions.get('window');
  return (
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
      <View>
        <View style={{height: height / 5}}></View>
        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text
            style={{
              fontFamily: fonts.SitkaDisplay,
              fontSize: 24,
              color: '#191C4C',
            }}>
            Select a Signers
          </Text>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignersDetails', {
                signer: true,
                hasSigner: 1,
                hasWitness: 0,
                document: route?.params?.document,
                serviceId: route?.params?.serviceId,
              });
              Toast.show('$5 added as signer charges');
            }}
            style={{
              backgroundColor: '#A5822C',
              opacity: 1,
              height: width / 5,
              width: width / 2,
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 60,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 20,
                fontFamily: fonts.SitkaDisplay,
              }}>
              CO-SIGNER
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SignersDetails', {
                signer: false,
                hasSigner: 0,
                hasWitness: 1,
                document: route?.params?.document,
                serviceId: route?.params?.serviceId,
              });
               Toast.show('$5 added as signer charges');
            }}
            style={{
              backgroundColor: '#A5822C',
              opacity: 1,
              height: width / 5,
              width: width / 2,
              borderRadius: 4,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 110,
            }}>
            <Text
              style={{
                color: '#ffffff',
                fontSize: 20,
                fontFamily: fonts.SitkaDisplay,
              }}>
              WITNESS
            </Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={{flexDirection: 'row', marginTop: 110}}
              onPress={() =>{
                  navigation.navigate('SignerVerification', {
                    hasSigner: 0,
                    hasWitness: 0,
                    document: route?.params?.document,
                    serviceId: route?.params?.serviceId,
                    signerData: false,
                  });
                 
              }
              
              }>
              <Text
                style={{
                  color: '#191C4D',
                  fontFamily: fonts.SitkaDisplay,
                  fontSize: 15,
                  fontWeight: 'normal',
                }}>
                Click here to{' '}
              </Text>
              <Text
                style={{
                  color: '#AC872E',
                  fontFamily: fonts.SitkaDisplay,
                  fontSize: 15,
                  fontWeight: 'normal',
                  textDecorationLine: 'underline',
                }}>
                Skip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

export default Signers;
