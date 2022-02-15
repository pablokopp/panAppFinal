import CartNagivation from './CartNavigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import ShopNavigation from './ShopNavigation';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {theme} from '../constants/colors';

const BottomTab = createBottomTabNavigator();

const BottomTabNavigation = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="Shop"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: theme.colorPrimary,
        },
        tabBarActiveTintColor: '#FFF',
      }}>
      <BottomTab.Screen
        name="Shop"
        component={ShopNavigation}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="home-outline" size={20} color="#FFF" />;
          },
        }}
      />
      <BottomTab.Screen
        name="Carts"
        component={CartNagivation}
        options={{
          tabBarIcon: () => {
            return <Ionicons name="cart-outline" size={20} color="#FFF" />;
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigation;
