import {Text, TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';

const OrderItem = ({item, onDelete}) => {
  const orderDate = time => {
    const date = new Date(time);
    return date.toLocaleDateString();
  };
  return (
    <View>
      <View>
        <Text>{orderDate(item.date)}</Text>
        <Text>$ {item.total}</Text>
        <TouchableOpacity>
          <Ionicons
            name="trash-outline"
            size={22}
            onPress={() => onDelete(item.id)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OrderItem;
