import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  items: [], // Stores cart items
  totalQuantity: 0, // Total number of items in the cart
  totalPrice: 0,
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },

    // Add item to cart
    addItem: (state, action) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
  
      if (!existingItem) {
          state.items.push({ ...newItem, qnty: 1 }); // Add new item with initial quantity of 1
      } else {
          existingItem.qnty++; // Increment the quantity of the existing item
      }
  
      state.totalQuantity++;
      state.totalPrice += newItem.price;
  },
  

    // Update quantity of existing items
    updateQuantity: (state, action) => {
      const { id, type } = action.payload; // Get the ID and action type
      const item = state.items.find((item) => item.id === id);
  
      if (item) {
          if (type === 'increment') {
              item.qnty = (item.qnty || 0) + 1; // Increment the item's quantity
              state.totalQuantity += 1;
              state.totalPrice += item.price;
          } else if (type === 'decrement' && item.qnty > 0) {
              item.qnty -= 1; // Decrement the item's quantity
              state.totalQuantity -= 1;
              state.totalPrice -= item.price;
  
              // Optionally, remove the item if quantity reaches 0
              if (item.qnty === 0) {
                  state.items = state.items.filter((item) => item.id !== id);
              }
          }
      }
  },
  
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, addItem, updateQuantity } = counterSlice.actions;

export default counterSlice.reducer;
