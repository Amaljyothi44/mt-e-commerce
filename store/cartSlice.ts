import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<{ name: string; price: number }>) => {
      const existingItem = state.items.find(item => item.name === action.payload.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.name === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action: PayloadAction<string>) => {
      const item = state.items.find(item => item.name === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else if (item) {
        state.items = state.items.filter(i => i.name !== action.payload);
      }
    },
  },
});

export const { addToCart, incrementQuantity, decrementQuantity } = cartSlice.actions;
export default cartSlice.reducer;