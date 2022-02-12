import CartScreen from '../screens/CartScreen/CartScreen';
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import {Platform} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../constants/colors';

const Stack = createNativeStackNavigator();

const CartNagivation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor:
            Platform.OS === 'android' ? theme.colorPrimary : '#FFFFFF',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: '700',
        },
      }}>
      <Stack.Screen name="Cart" component={CartScreen} />
      <Stack.Screen name="Orders" component={OrderScreen} />
    </Stack.Navigator>
  );
};

export default CartNagivation;
