import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/store';
import { CartItem } from '@/components/CartItem';
import { FontAwesome } from '@expo/vector-icons';

const THEME_COLOR = '#78866B';

export default function CartScreen() {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <FontAwesome name="shopping-cart" size={64} color="#E5E5EA" />
        <Text style={styles.emptyText}>Your cart is empty</Text>
        <Text style={styles.emptySubText}>Add some products to your cart</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem
            name={item.name}
            price={item.price}
            quantity={item.quantity}
          />
        )}
        keyExtractor={item => `${item.name}-${item.price}`}
        contentContainerStyle={styles.listContent}
      />
      <View style={styles.totalContainer}>
        <View style={styles.totalCard}>
          <View style={styles.divider} />
          <View style={styles.totalRow}>
            <Text style={styles.grandTotalLabel}>Total</Text>
            <Text style={styles.grandTotalValue}>Rs.{total.toFixed(2)}</Text>
          </View>
          <TouchableOpacity style={styles.checkoutButton}>
            <Text style={styles.checkoutButtonText}>Proceed to payment</Text>
            <FontAwesome name="arrow-right" size={16} color="white" style={styles.checkoutIcon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  listContent: {
    padding: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1C1C1E',
    marginTop: 16,
  },
  emptySubText: {
    fontSize: 16,
    color: '#8E8E93',
    marginTop: 8,
  },
  totalContainer: {
    padding: 16,
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  totalCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  totalLabel: {
    fontSize: 16,
    color: '#8E8E93',
  },
  totalValue: {
    fontSize: 16,
    color: '#1C1C1E',
    fontWeight: '500',
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E5EA',
    marginVertical: 12,
  },
  grandTotalLabel: {
    fontSize: 18,
    color: '#1C1C1E',
    fontWeight: '600',
  },
  grandTotalValue: {
    fontSize: 20,
    color: THEME_COLOR,
    fontWeight: '700',
  },
  checkoutButton: {
    backgroundColor: THEME_COLOR,
    borderRadius: 12,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  checkoutButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
    marginRight: 8,
  },
  checkoutIcon: {
    marginLeft: 4,
  },
}); 