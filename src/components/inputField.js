import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View} from 'react-native';
import {colors} from '../config/Colors';
import {Input} from '@rneui/themed';

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
}) => {
  return (
    <View
      style={[
        {
          backgroundColor: 'lightgray',
          padding: 6,
          borderRadius: 6,
          borderRightWidth: 0.5,
          borderBottomWidth: 0.5,
          borderColor: 'red',
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
            <Text>hi</Text>
          </>
        }
        rightIcon={
          <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => rightIconOnPress()}>
            <Image
              // style={[styles.height_width(22, 22)]}
              source={rightIcon}
              resizeMode={'contain'}
            />

            <Text>hi</Text>
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
          },
        ]}
        inputStyle={[
          // styles.LatoRegular(colors.black, textSize),
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
    left: 8,
  },
  inputFeildStyle: {
    paddingHorizontal: 22,
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
