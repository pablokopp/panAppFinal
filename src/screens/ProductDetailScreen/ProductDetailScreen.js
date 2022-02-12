import {Button, SafeAreaView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import React from 'react';
import {addItem} from '../../store/actions/cart.actions';
import styles from './style';

const ProductDetailScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const bread = useSelector(state => state.breads.selected);
  const handleAddItemCart = item => {
    dispatch(addItem(item));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerProd}>
        <Text style={styles.text1}>{bread.name}</Text>
        <Text style={styles.text3}>{bread.description}</Text>
        <View style={styles.container2}>
          <Text style={styles.text2}>{bread.weight}</Text>
          <Text style={styles.text2}>$ {bread.price}</Text>
        </View>
        <Button
          title="Agregar al carrito"
          onPress={() => handleAddItemCart(bread)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;
