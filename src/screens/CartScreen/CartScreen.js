import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import {confirmCart, removeItem} from '../../store/actions/cart.actions';
import {useDispatch, useSelector} from 'react-redux';

import CartItem from '../../components/CartItem/CartItem';
import React from 'react';
import {styles} from './style';

const CartScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const total = useSelector(state => state.cart.total);

  console.warn(total);

  const handleConfirm = () => {
    dispatch(confirmCart(items, total));

    navigation.navigate('Orders');
  };
  const handleDelete = id => {
    dispatch(removeItem(id));
  };
  const renderCartItems = data => (
    <CartItem item={data.item} onDelete={handleDelete} />
  );
  return (
    <View style={styles.containerMain}>
      <View style={styles.container}>
        <FlatList
          data={items}
          renderItem={renderCartItems}
          keyExtractor={item => item.id}
        />
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => handleConfirm()}
          style={styles.btnConfirm}>
          <Text style={styles.text1}>Confirmar Compra</Text>
          <Text style={styles.text2}>Total: ${total}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;
