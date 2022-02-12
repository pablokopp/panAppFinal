import {Text, TouchableOpacity, View} from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';
import React from 'react';
import styles from './style';

const CartItem = ({item, onDelete}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text1}>{item.name}</Text>
      </View>
      <View>
        <Text style={styles.text2}>Cantidad: {item.quantity}</Text>
        <Text style={styles.text2}>$ {item.price}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons
          name="trash-outline"
          size={22}
          onPress={() => onDelete(item.id)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default CartItem;
