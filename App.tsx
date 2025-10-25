import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './components/LoginScreen';
import SignUpScreen from './components/SignUpScreen';
import OverviewScreen from './components/OverviewScreen';
import AllDataScreen from './components/AllDataScreen';
import StepsDetailScreen from './components/StepsDetailScreen';
import SleepDetailScreen from './components/SleepDetailScreen';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  Overview: undefined;
  AllData: undefined;
  StepsDetail: undefined;
  SleepDetail: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="Overview" component={OverviewScreen} />
        <Stack.Screen name="AllData" component={AllDataScreen} />
        <Stack.Screen name="StepsDetail" component={StepsDetailScreen} />
        <Stack.Screen name="SleepDetail" component={SleepDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
