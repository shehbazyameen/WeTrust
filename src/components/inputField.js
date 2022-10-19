import React from 'react';
import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import {colors} from '../config/Colors';
import {Input} from '@rneui/themed';
import fonts from '../assests/fonts';

export const InputFeild = ({
  value = '',
  placeholder = '',
  onChange = () => {},
  secure = false,
  onBlur = () => {},
  onFocus = () => {},
  rightIconOnPress = () => {},
  editable = true,
  returnKeyType = '',
  refValueCurrent,
  valueRef,
  bg = 'white',
  leftIcon = false,
  rightIcon = false,
  height = 60,
  keyboardType = 'default',
  maxLength = 100,
  autoFocus = false,
  autoCapitalize = 'none',
  placeholderTextColor,
  textSize = 16,
  disabled,
  paddingHorizontal = 22,
  paddingHorizontalRight = 0,
}) => {
  return (
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
      <Input
        disabled={disabled}
        blurOnSubmit={false}
        placeholderTextColor={placeholderTextColor}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        leftIcon={
          <>
            <Image
              style={styles.searchIconInInputField}
              source={leftIcon}
              resizeMode="contain"
            />
          </>
        }
        rightIcon={
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => rightIconOnPress()}>
            <Image
              // style={[styles.height_width(22, 22)]}
              style={{paddingHorizontal: paddingHorizontalRight}}
              source={rightIcon}
              resizeMode={'contain'}
            />
          </TouchableOpacity>
        }
        inputContainerStyle={[
          styles.borderBottomWidth,
          {backgroundColor: bg, height: height},
        ]}
        value={value}
        placeholder={placeholder}
        secureTextEntry={secure}
        onBlur={onBlur}
        onFocus={onFocus}
        onChangeText={onChange}
        editable={editable}
        keyboardType={keyboardType}
        maxLength={maxLength}
        containerStyle={[
          styles.inputFeildStyle,
          {
            height: height,
            backgroundColor: bg,
            paddingHorizontal: paddingHorizontal,
          },
        ]}
        inputStyle={[
          styles.textInput,
          // leftIcon && styles.mL(22),
          {marginLeft: 12},
        ]}
        onSubmitEditing={() =>
          refValueCurrent ? refValueCurrent.current.focus() : ''
        }
        returnKeyType={returnKeyType}
        ref={valueRef}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchIconInInputField: {
    position: 'absolute',
    // right: 18,
  },
  textInput: {
    fontFamily: fonts.SitkaDisplay,
    fontSize: 14,
    color: colors.primaryBlueOpacity50,
  },
  inputFeildStyle: {
    alignItems: 'center',
    borderRadius: 6,
  },
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
  borderBottomWidth: {
    borderBottomWidth: 0,
    alignSelf: 'center',
  },
});
