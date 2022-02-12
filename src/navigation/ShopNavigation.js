import Categories from '../screens/CategoriesScreen/CategoriesScreen';
import {NavigationContainer} from '@react-navigation/native';
import {Platform} from 'react-native';
import ProductDetails from '../screens/ProductDetailScreen/ProductDetailScreen';
import Products from '../screens/ProductsScreen/ProductsScreen';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {theme} from '../constants/colors';

const Stack = createNativeStackNavigator();

const ShopNavigation = () => {
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
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen
        name="Products"
        component={Products}
        options={({route}) => ({
          //title es el objeto de config que recibe la cabecera de la pantalla, es lo que se ve arriba de todo
          title: route.params.name,
          //aca le puedo seguir pasando styles dependiendo de los parametros que le haya pasado al momento de render (?)
          //headerStyle:{ backgroundColor:route.params.color}
        })}
      />
      <Stack.Screen
        name="Product Detail"
        component={ProductDetails}
        options={({route}) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default ShopNavigation;
