import AuthNavigation from './AuthNavigation';
import BottomTabNavigation from './BottomTabNavigation';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {useSelector} from 'react-redux';

const AppNavigation = () => {
  const isAuth = useSelector(state => state.auth.userId);
  return (
    <NavigationContainer>
      {isAuth ? <BottomTabNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
