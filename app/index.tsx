import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar, View, StyleSheet } from 'react-native';
import { store } from '@/store';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsScreen from '@/screens/ProductsScreen';
import CartScreen from '@/screens/CartScreen';
import { CustomTabBar } from '@/components/CustomTabBar';

const THEME_COLOR = '#78866B';
const Tab = createBottomTabNavigator();

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar
        backgroundColor={THEME_COLOR}
        barStyle="light-content"
      />
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: THEME_COLOR,
            height: 80,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
            elevation: 0,
            shadowOpacity: 0,
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '600',
          },
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      >
        <Tab.Screen
          name="Products"
          component={ProductsScreen}
        />
        <Tab.Screen
          name="Cart"
          component={CartScreen}
        />
      </Tab.Navigator>
    </Provider>
  );
}
