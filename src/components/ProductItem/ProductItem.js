import {Text, TouchableOpacity, View} from 'react-native';

import React from 'react';
import styles from './style';

const ProductItem = ({onSelected, item}) => {
  //falta darle estilos
  return (
    <TouchableOpacity style={styles.container} onPress={() => onSelected(item)}>
      <View>
        <Text style={styles.text1}>{item.name}</Text>
      </View>
      <View style={styles.container2}>
        <Text style={styles.text2}>{item.weight}</Text>
        <Text style={styles.text2}>$ {item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ProductItem;
