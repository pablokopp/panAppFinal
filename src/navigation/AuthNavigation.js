import AuthScreen from '../screens/AuthScreen/AuthScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Auth"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
