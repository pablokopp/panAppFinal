import {FlatList, SafeAreaView, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CategoryItem from '../../components/CategoryItem/CategoryItem';
import React from 'react';
import {selectCategory} from '../../store/actions/category.action';
import styles from './style';

const CategoriesScreen = ({navigation}) => {
  const handleSelectedCategory = item => {
    dispatch(selectCategory(item.id));
    navigation.navigate('Products', {
      name: item.title,
    });
  };
  const renderCategoryItem = ({item}) => {
    return <CategoryItem item={item} onSelected={handleSelectedCategory} />;
  };

  //redux aca
  const dispatch = useDispatch();
  const categories = useSelector(state => state.categories.categories);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <FlatList
          data={categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};
{
  /* <Button
          title="go to products"
          onPress={() => navigation.navigate('Products')}
          color={theme.colorPrimary}
        /> */
}
export default CategoriesScreen;
