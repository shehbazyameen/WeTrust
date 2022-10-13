import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {Header} from 'react-native-elements';
import {Header} from '@rneui/themed';
import {colors} from '../config/Colors';
import fonts from '../assests/fonts';
const {width, height} = Dimensions.get('window');

const CustomHeader = ({
  navigation,
  leftRoute = () => {},
  rightIcon1Onpress = () => {},
  rightIcon2Onpress = () => {},
  barStyle,
  statusBarProps,
  rightIcon1,
  rightIcon2,
  centerTitle = false,
  headerWhite = false,
  leftIcon = false,
  centergreyColor = false,
  backgroundColor = false,
  centerTitleColor = colors.white,
}) => {
  return (
    <Header
      barStyle={barStyle}
      statusBarProps={statusBarProps}
      containerStyle={[
        styless.headerContainer,
        // styles.backgroundColor(backgroundColor),
      ]}
      leftComponent={
        <View
        // style={[styles.headerLeftStyle]}
        >
          <TouchableOpacity
            onPress={() => leftRoute()}
            // hitSlop={styles.hitSlop}
          >
            <Image
              source={leftIcon}
              //   style={[styles.mL(10)]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      }
      centerComponent={
        <View
        // style={[styles.headerLeftStyle]}
        >
          <Text
          // style={[
          //   centergreyColor
          //     ? styles.LatoSemibold(centerTitleColor, 18)
          //     : styles.LatoSemibold(centerTitleColor, 18),
          // ]}
          >
            {centerTitle}
          </Text>
        </View>
      }
      rightComponent={
        <View
        // style={[styles.headerLeftStyle, styles.flexDirection('row')]}
        >
          <TouchableOpacity onPress={() => rightIcon1Onpress()}>
            <Image
              source={rightIcon1}
              //   style={[styles.mR(20)]}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => rightIcon2Onpress()}>
            <Image
              source={rightIcon2}
              //   style={[styles.mR(10)]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      }
    />
  );
};

const styless = StyleSheet.create({
  headerContainer: {
    borderBottomColor: 'transparent',
    justifyContent: 'space-around',

    ...Platform.select({
      ios: {
        marginTop: 0,
        height: width / 4,
      },
      android: {
        marginTop: 0,
        height: width / 4,
      },
    }),
  },
  headerLeftText: color => ({
    flex: 1,
    minWidth: width / 1.8,
    // fontFamily: fonts.WorkSansBold,
    fontSize: 16,
    color: color,
    ...Platform.select({
      ios: {
        marginTop: 5,
        marginLeft: 5,
      },
      android: {
        marginTop: 2,
        marginLeft: 5,
      },
    }),
  }),
});

export default CustomHeader;
