import Axios from 'react-native-axios/lib/core/Axios';
// import * as axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-simple-toast';

import {labels} from './Lables';
class Api {
  constructor() {
    this.baseUrl =
      'https://customdevu11.onlinetestingserver.com/wetrust/public/api/';
  }

  async _post(endPoint, payload, success, failure) {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
    if (token === null) {
      this.instance = axios.create({
        baseURL: this.baseUrl,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    } else {
      this.instance = axios.create({
        baseURL: this.baseUrl,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
    }
    return this.instance
      .post(endPoint, payload)
      .then(res => {
        console.log(res, 'response');
        if (res?.data?.status) {
          // setTimeout(() => {
          //   success(res?.data?.response);
          // }, 1500);
          success(res?.data?.response);
        }
      })
      .catch(error => {
        console.log('error in post', error?.response);
        failure(error?.response?.data?.error);
        if (error?.message === 'Network Error') {
          Toast.show(labels.netWrokError);
        } else if (error?.response?.status === 401) {
          AsyncStorage.removeItem('token');
          AsyncStorage.removeItem('User');
          changeStack('AuthenticationStack');
          Toast.show('Session Expired');
        } else if (error?.response?.status === 422) {
          // Toast.show(error?.response?.data?.message);
        } else {
          let checkType = typeof error?.response?.data?.error?.message;
          // console.log('checkType', checkType);
          if (checkType === 'object') {
            Toast.show('Oops! Something went wrong');
          }
        }
      });
  }

  async _get(endPoint, success, failure) {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);

    if (token === null) {
      this.instance = axios.create({
        baseURL: this.baseUrl,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    } else {
      this.instance = axios.create({
        baseURL: this.baseUrl,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
    }
    return this.instance
      .get(endPoint)
      .then(res => {
        console.log(res, 'response');
        if (res?.data?.status) {
          // Toast.show(res?.data?.response?.message);
          success(res?.data?.response);
        }
      })
      .catch(error => {
        console.log('error in get', error);
        failure(error?.response?.data?.error);
        if (error?.message === 'Network Error') {
          Toast.show(labels.netWrokError);
        } else if (error?.response?.status === 401) {
          AsyncStorage.removeItem('token');
          AsyncStorage.removeItem('User');
          changeStack('AuthenticationStack');
          Toast.show('Session Expired');
        } else if (error?.response?.status === 422) {
          Toast.show(error?.response?.data?.error?.message);
        } else {
          let checkType = typeof error?.data?.error?.message;
          console.log('checkType', checkType);
          if (checkType === 'object') {
            Toast.show('Oops! Something went wrong');
          }
        }
      });
  }

  async _patch(endPoint, payload, success, failure) {
    const token = await AsyncStorage.getItem('token');
    console.log('token', token);
    if (token === null) {
      this.instance = axios.create({
        baseURL: this.baseUrl,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
    } else {
      this.instance = axios.create({
        baseURL: this.baseUrl,
        headers: {
          'Content-Type': 'application/json',
          Authorization: 'Bearer ' + token,
        },
      });
    }
    return this.instance
      .patch(endPoint, payload)
      .then(res => {
        console.log(res, 'response');
        if (res?.data?.status) {
          // Toast.show(res?.data?.response?.message);
          success(res?.data?.response);
        } else {
          Toast.show(res?.data?.error?.message);
          failure(res?.data?.error);
        }
      })
      .catch(error => {
        console.log('error in patch', error);
        failure(error?.response?.data?.error);
        if (error?.message === 'Network Error') {
          Toast.show(labels.netWrokError);
        } else if (error?.response?.status === 401) {
          AsyncStorage.removeItem('token');
          AsyncStorage.removeItem('User');
          changeStack('AuthenticationStack');
          Toast.show('Session Expired');
        } else if (error?.response?.status === 422) {
          Toast.show(error?.response?.data?.error?.message);
        } else {
          let checkType = typeof error?.data?.error?.message;
          console.log('checkType', checkType);
          if (checkType === 'object') {
            Toast.show('Oops! Something went wrong');
          }
        }
      });
  }
}

export default new Api();
