import {Button, FlatList, SafeAreaView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {filterBreads, selectBread} from '../../store/actions/breads.actions';
import {useDispatch, useSelector} from 'react-redux';

import ProductItem from '../../components/ProductItem/ProductItem';
import styles from './style';

const ProductsScreen = ({navigation, route}) => {
  //cosas redux aca
  const dispatch = useDispatch();
  const categoryBreads = useSelector(state => state.breads.filteredBread);
  const category = useSelector(state => state.categories.selected);

  const handleSelectedProduct = item => {
    dispatch(selectBread(item.id));
    navigation.navigate('Product Detail', {
      name: item.name,
    });
  };
  const renderProductItem = ({item}) => {
    return <ProductItem item={item} onSelected={handleSelectedProduct} />;
  };

  useEffect(() => {
    dispatch(filterBreads(category.id));
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={categoryBreads}
          renderItem={renderProductItem}
          keyExtractor={item => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProductsScreen;
