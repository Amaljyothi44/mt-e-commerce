import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity } from '@/store/cartSlice';
import { FontAwesome } from '@expo/vector-icons';
import ProductImage from '@/assets/images/product.png';

const THEME_COLOR = '#78866B';

interface CartItemProps {
  name: string;
  price: number;
  quantity: number;
}

export const CartItem: React.FC<CartItemProps> = ({ name, price, quantity }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Image
        source={ProductImage}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Rs.{price}</Text>
        <View style={styles.quantityContainer}>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => dispatch(decrementQuantity(name))}
            activeOpacity={0.7}
          >
            <FontAwesome name="minus" size={16} color="white" />
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity
            style={styles.quantityButton}
            onPress={() => dispatch(incrementQuantity(name))}
            activeOpacity={0.7}
          >
            <FontAwesome name="plus" size={16} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  content: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
    color: '#1C1C1E',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: THEME_COLOR,
    marginBottom: 8,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: THEME_COLOR,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    marginHorizontal: 16,
    color: '#1C1C1E',
  },
}); 