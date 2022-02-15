import {FlatList, View} from 'react-native';
import {deleteOrder, getOrders} from '../../store/actions/order.action';
import {useDispatch, useSelector} from 'react-redux';

import OrderItem from '../../components/OrderItem/OrderItem';
import React from 'react';
import {styles} from './style';
import {useEffect} from 'react';

const OrderScreen = () => {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders);

  const handleDeleteOrder = id => {
    dispatch(deleteOrder(id));
  };

  const renderOrderItems = data => (
    <OrderItem item={data.item} onDelete={handleDeleteOrder} />
  );

  useEffect(() => {
    dispatch(getOrders());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={orders}
          renderItem={renderOrderItems}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default OrderScreen;
