import Api from './Api';
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
  return async () => {
    await Api._post(
      `${EndPoints.register}`,
      data,
      success => {
        Toast.show(success?.message);
        console.log(success);
        // AsyncStorage.setItem('token', success?.detail?.token);
        // AsyncStorage.setItem('User', JSON.stringify(success?.detail?.user));
        // successCallBack();
      },
      error => {
        console.log(success);
        // failureCallBack();
        // Toast.show(error?.message);
      },
    );
  };
};
