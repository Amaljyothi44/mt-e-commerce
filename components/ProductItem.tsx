import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToCart } from '@/store/cartSlice';
import { FontAwesome } from '@expo/vector-icons';
import ProductImage from '@/assets/images/product.png';

const THEME_COLOR = '#78866B';

interface ProductItemProps {
  name: string;
  price: number;
}

export const ProductItem: React.FC<ProductItemProps> = ({ name, price }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ name, price }));
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={ProductImage}
          style={styles.image}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.price}>Rs.{price}</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={handleAddToCart}
          activeOpacity={0.7}
        >
          <FontAwesome name="plus" size={16} color="white" style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Add to Cart</Text>
        </TouchableOpacity>
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
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#f5f5f5',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 16,
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#1C1C1E',
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: THEME_COLOR,
    marginBottom: 16,
  },
  button: {
    backgroundColor: THEME_COLOR,
    padding: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonIcon: {
    marginRight: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
}); 