import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  Splash,
  HomeScreen,
  Intro,
  Login,
  DocumentUpload,
  Signers,
  SignersDetails,
  Signup,
  Payment,
  SignerVerification,
  SignersSuccess,
  AppointMent,
  AppointmentDetails
} from '../screens';
const AuthStack = createNativeStackNavigator();
const AppStack = createNativeStackNavigator();
const RootStack = createNativeStackNavigator();

const HomeStack = ({props}) => {
  return (
    <AppStack.Navigator initialRouteName={'HomeScreen'}>
      <AppStack.Screen
        options={{headerShown: false}}
        name="HomeScreen"
        component={HomeScreen}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="DocumentUpload"
        component={DocumentUpload}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="Signers"
        component={Signers}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="SignersDetails"
        component={SignersDetails}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="Payment"
        component={Payment}
      />

      <AppStack.Screen
        options={{headerShown: false}}
        name="SignerVerification"
        component={SignerVerification}
      />

      <AppStack.Screen
        options={{headerShown: false}}
        name="SignersSuccess"
        component={SignersSuccess}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="AppointMent"
        component={AppointMent}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="AppointmentDetails"
        component={AppointmentDetails}
      />
    </AppStack.Navigator>
  );
};

const AuthenticationStack = () => {
  return (
    <AuthStack.Navigator initialRouteName={Splash}>
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Splash"
        component={Splash}
      />

      <AuthStack.Screen
        options={{headerShown: false}}
        name="Intro"
        component={Intro}
      />
      <AuthStack.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
      <AppStack.Screen
        options={{headerShown: false}}
        name="AppointMent"
        component={AppointMent}
      />
    </AuthStack.Navigator>
  );
};

const RootNavigator = () => {
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        options={{headerShown: false}}
        name="AuthenticationStack"
        component={AuthenticationStack}
      />
      <RootStack.Screen
        options={{headerShown: false}}
        name="HomeStack"
        component={HomeStack}
      />
    </RootStack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
};

export {AppNavigator};
