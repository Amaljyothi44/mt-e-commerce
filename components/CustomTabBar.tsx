import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const THEME_COLOR = '#78866B';

export function CustomTabBar({ state, descriptors, navigation }: any) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <View style={styles.container}>
      {state.routes.map((route: any, index: number) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel ?? options.title ?? route.name;
        const isFocused = state.index === index;

        const icon = route.name === 'Products' ? 'shopping-bag' : 'shopping-cart';

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={styles.tab}
          >
            <View style={styles.iconContainer}>
              <FontAwesome
                name={icon}
                size={24}
                color={isFocused ? THEME_COLOR : '#8E8E93'}
              />
              {route.name === 'Cart' && totalItems > 0 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{totalItems}</Text>
                </View>
              )}
            </View>
            <Text style={[
              styles.label,
              { color: isFocused ? THEME_COLOR : '#8E8E93' }
            ]}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingBottom: 20,
    paddingTop: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
  },
  iconContainer: {
    position: 'relative',
  },
  label: {
    fontSize: 12,
    marginTop: 4,
    fontWeight: '500',
  },
  badge: {
    position: 'absolute',
    top: -8,
    right: -12,
    backgroundColor: THEME_COLOR,
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
}); 