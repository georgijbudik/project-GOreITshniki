import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories, fetchProducts } from './productOperations';

const productInitialState = {
  categories: [],
  products: [],
  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const productSlice = createSlice({
  name: 'product',
  initialState: productInitialState,
  extraReducers: builder => {
    builder
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchCategories.pending, handlePending)
      .addCase(fetchCategories.rejected, handleRejected)
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.rejected, handleRejected);
  },
});

export const selectCategories = state => state.productReducer.categories;
export const selectProducts = state => state.productReducer.products;
export const selectIsLoading = state => state.productReducer.isLoading;
export const selectError = state => state.productReducer.error;

export const productReducer = productSlice.reducer;
