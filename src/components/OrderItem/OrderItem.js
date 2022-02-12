import {Text, View} from 'react-native';

import React from 'react';

const OrderItem = ({item}) => {
  const orderDate = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  return (
    <View>
      <View>
        <Text>{orderDate(item.date)}</Text>
        <Text>$ {item.total}</Text>
      </View>
    </View>
  );
};

export default OrderItem;
