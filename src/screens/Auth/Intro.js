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
    navigation.replace("HomeStack",{screen:"HomeScreen"});
  };

  const slides = [
    {
      key: 's1',
      //   backgroundImage: Assets.cashBack,
      title: 'Cash Back!',
      description:
        'Lorem ipsum dolor sit amet, consectetur \n adipiscing elit, sed do eiusmod tempor incit \n ut labore et dolore magna aliqua. ',
      title2: 'Why',
    },
    {
      key: 's2',
      //   backgroundImage: Assets.cashBack,
      title: 'Cash Back!',
      description: 'eiusmod tempor incididunt ut labore',
      title2: 'Profiles',
    },
    {
      key: 's3',
      //   backgroundImage: Assets.cashBack,
      title: 'Cash Back!',
      description: 'eiusmod tempor incididunt ut labore',
      title2: 'Compliance',
    },
  ];

  const _renderItem = ({item}) => {
    const data = item;
    return (
      <View>
        <Text>hhhh</Text>
      </View>
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
        }}>
        <Text
        //   style={[
        //     styles.LatoSemibold(colors.primaryColor, 14),
        //     styles.textAlign('center'),
        //   ]}
        >
          {labels.nextCapital}
        </Text>
      </TouchableOpacity>
    );
  };

  const _renderItemSkip = () => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        // style={[
        //   styles.renderButtonSkip,
        //   styles.backgroundColor(colors.primaryColor),
        // ]}
        onPress={() => {
          continueToWelcome();
        }}>
        <Text
        //   style={[
        //     styles.LatoSemibold(colors.white, 14),
        //     styles.textAlign('center'),
        //   ]}
        >
          {labels.skip}
        </Text>
      </TouchableOpacity>
    );
  };
  const _renderItemDone = () => {
    return (
      <TouchableOpacity
        style={styles.renderButtonNext}
        activeOpacity={0.7}
        onPress={() => {
          continueToWelcome();
        }}>
        <Text
        //   style={[
        //     styles.LatoSemibold(colors.primaryColor, 14),
        //     styles.textAlign('center'),
        //   ]}
        >
          {'labels.done'}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar barStyle="light-content" backgroundColor={colors.linear1} />
      <ImageBackground
        resizeMode="contain"
        source={Assets.abstract}
        style={{flex: 1}}>
        <AppIntroSlider
          ref={refSwipe}
          renderItem={_renderItem}
          //   activeDotStyle={[styles.backgroundColor(colors.dots)]}
          //   dotStyle={[styles.backgroundColor(colors.white)]}
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
