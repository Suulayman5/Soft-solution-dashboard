import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Customer {
  image: any;
  id: number;
  name: string;
  email: string;
}

interface MenuItem {
  id: number;
  name: string;
  price: number;
  served: number;
}

interface CustomerMenuState {
  customers: Customer[];
  menuItems: MenuItem[];
}

// Initialize state from localStorage if it exists
const initialState: CustomerMenuState = {
  customers: JSON.parse(localStorage.getItem('customers') || '[]'),  // Retrieve customers from localStorage
  menuItems: [],  // You can handle menuItems similarly if needed
};

const customerMenuSlice = createSlice({
  name: 'customerMenu',
  initialState,
  reducers: {
    addCustomer: (state, action: PayloadAction<Customer>) => {
      state.customers.push(action.payload);
      localStorage.setItem('customers', JSON.stringify(state.customers));  // Save to localStorage
    },
    updateCustomer: (state, action: PayloadAction<Customer>) => {
      const index = state.customers.findIndex((c) => c.id === action.payload.id);
      if (index !== -1) {
        state.customers[index] = action.payload;
        localStorage.setItem('customers', JSON.stringify(state.customers));  // Save to localStorage
      }
    },
    deleteCustomer: (state, action: PayloadAction<number>) => {
      state.customers = state.customers.filter((c) => c.id !== action.payload);
      localStorage.setItem('customers', JSON.stringify(state.customers));  // Save to localStorage
    },
    addMenuItem: (state, action: PayloadAction<MenuItem>) => {
      state.menuItems.push(action.payload);
    },
    updateMenuItem: (state, action: PayloadAction<MenuItem>) => {
      const index = state.menuItems.findIndex((m) => m.id === action.payload.id);
      if (index !== -1) {
        state.menuItems[index] = action.payload;
      }
    },
    deleteMenuItem: (state, action: PayloadAction<number>) => {
      state.menuItems = state.menuItems.filter((m) => m.id !== action.payload);
    },
  },
});

export const {
  addCustomer,
  updateCustomer,
  deleteCustomer,
  addMenuItem,
  updateMenuItem,
  deleteMenuItem,
} = customerMenuSlice.actions;

export default customerMenuSlice.reducer;

