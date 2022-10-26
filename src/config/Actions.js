import Api from '../../config/Api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';
import {EndPoints} from './endPoints';

//Registration User Actions
export const RegistrationAction = (
  data,
  navigate,
  successCallBack,
  failureCallBack,
) => {
  return async dispatch => {
    await Api._post(
      `${EndPoints.register}`,
      data,
      success => {
        Toast.show(success?.message);
        AsyncStorage.setItem('token', success?.detail?.token);
        AsyncStorage.setItem('User', JSON.stringify(success?.detail?.user));

        successCallBack();
      },
      error => {
        failureCallBack();
        Toast.show(error?.message);
      },
    );
  };
};
