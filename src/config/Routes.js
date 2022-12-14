import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Splash, HomeScreen, Intro, Login} from '../screens';
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
