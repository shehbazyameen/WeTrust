import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {Assets} from '../../assests/index';
import {colors} from '../../config/Colors';
import {labels} from '../../config/Lables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './Styles';

const Intro = ({navigation}) => {
  // Declare state variables
  const [index, setIndex] = useState(0);

  // Declare input reference field
  const refSwipe = useRef();

  const continueToWelcome = async () => {
    await AsyncStorage.setItem('intro', JSON.stringify(true));
    // navigation.replace('HomeStack', {screen: 'HomeScreen'});
    navigation.replace('Login');
  };

  const slides = [
    {
      key: 's1',
      backgroundImage: Assets.intro1,
    },
    {
      key: 's2',
      backgroundImage: Assets.intro2,
    },
    {
      key: 's3',
      backgroundImage: Assets.intro3,
    },
  ];

  const _renderItem = ({item}) => {
    return (
      <ImageBackground
        resizeMode="cover"
        source={item.backgroundImage}
        style={{paddingBottom: 0, height: '100%', width: '100%'}}>
        <TouchableOpacity
          style={{position: 'absolute', right: 0, padding: 32}}
          onPress={() => {
            continueToWelcome();
          }}>
          <Text>Skip </Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  };

  const _renderNext = () => {
    return (
      <TouchableOpacity
        style={styles.renderButtonNext}
        activeOpacity={0.7}
        onPress={() => {
          refSwipe.current.goToSlide(index + 1);
          setIndex(index + 1);
        }}></TouchableOpacity>
    );
  };

  const _renderItemSkip = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => {
          continueToWelcome();
        }}></TouchableOpacity>
    );
  };
  const _renderItemDone = () => {
    return (
      <TouchableOpacity
        style={styles.renderButtonNext}
        activeOpacity={0.7}
        onPress={() => {
          continueToWelcome();
        }}></TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent={true}
      />
      <ImageBackground
        resizeMode="contain"
        source={Assets.abstract}
        style={{flex: 1}}>
        <AppIntroSlider
          ref={refSwipe}
          renderItem={_renderItem}
          activeDotStyle={{backgroundColor: colors.btnColor1, marginTop: 40}}
          dotStyle={{backgroundColor: colors.dots, marginTop: 40}}
          data={slides}
          renderNextButton={_renderNext}
          renderDoneButton={_renderItemDone}
          renderSkipButton={_renderItemSkip}
          showSkipButton={true}
          dotClickEnabled={true}
          //   onSlideChange={index => setIndex(index)}
          // onDone={_onDone}
        />
      </ImageBackground>
    </View>
  );
};

export default Intro;
