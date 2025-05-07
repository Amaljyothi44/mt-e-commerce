import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { ProductItem } from '@/components/ProductItem';
import { LayoutScreen } from '@/components/LayoutScreen/LayoutScreen';

const products = [
  { name: "Product 1", price: 199 },
  { name: "Product 2", price: 299 },
  { name: "Product 3", price: 399 },
];

export default function ProductsScreen() {
  return (
    <LayoutScreen style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <ProductItem name={item.name} price={item.price} />
        )}
        contentContainerStyle={styles.list}
      />
    </LayoutScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  list: {
    paddingVertical: 16,
  },
}); 