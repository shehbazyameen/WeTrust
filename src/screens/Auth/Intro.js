import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
  Animated,
} from 'react-native';
import {Assets} from '../../assests/index';
import {colors} from '../../config/Colors';
import {labels} from '../../config/Lables';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import styles from './Styles';

const {height, width} = Dimensions.get('window');

const Intro = ({navigation}) => {
   const fadeAnim = useRef(new Animated.Value(0)).current;
   const animate=()=>{
     Animated.timing(fadeAnim, {
       toValue: 80,
       duration: 300,
     }).start();
   }
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
        resizeMode="stretch"
        source={item.backgroundImage}
        style={{paddingBottom: 0, height: height, width: width}}>
        <TouchableOpacity
          style={styles.skipTouch}
          onPress={() => {
            continueToWelcome();
          }}>
          <Text style={styles.textskip}>{labels.skip}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.slideTouch}
          onPress={() => {
            setTimeout(() => {
              continueToWelcome();
            },500);
            animate()
          }}>
          <Animated.View style={{marginRight:fadeAnim}}>
            <Text style={styles.textslide}>{labels.slideHowWork}</Text>
          </Animated.View>
          <View style={{width: 20}} />
          <Image source={Assets.forwardArrow} />
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
          activeDotStyle={{backgroundColor: colors.btnColor1, marginTop: 14}}
          dotStyle={{backgroundColor: colors.dots, marginTop: 14}}
          data={slides}
          renderNextButton={_renderNext}
          renderDoneButton={_renderItemDone}
          renderSkipButton={_renderItemSkip}
          showSkipButton={true}
          dotClickEnabled={true}
        />
      </ImageBackground>
    </View>
  );
};

export default Intro;
