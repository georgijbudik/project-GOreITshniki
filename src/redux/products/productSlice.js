import { createSlice } from '@reduxjs/toolkit';
import {
  fetchCategories,
  fetchProducts,
  addProduct,
} from './productOperations';

const productInitialState = {
  categories: [],
  products: null,
  page: 1,
  limit: 10,
  hasMore: true,
  productToAdd: null,
  caloriesByUser: null,
  isProductSuccesAdded: false,
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
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setProductToAdd(state, action) {
      state.productToAdd = action.payload;
    },
    setCaloriesByUser(state, action) {
      state.caloriesByUser = action.payload;
    },
    setIsProductSuccesAdded(state, action) {
      state.isProductSuccesAdded = action.payload;
    },
  },
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
        if (state.page === 1 && action.payload.length === state.limit) {
          state.products = action.payload;
          state.page = state.page + 1;
          state.hasMore = true;
        } else if (state.page === 1 && action.payload.length < state.limit) {
          state.products = action.payload;
          state.hasMore = false;
        } else if (state.page > 1 && action.payload.length === state.limit) {
          state.products = [...state.products, ...action.payload];
          state.page = state.page + 1;
        } else if (state.page > 1 && action.payload.length < state.limit) {
          state.products = [...state.products, ...action.payload];
          state.hasMore = false;
        }
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.rejected, handleRejected)

      .addCase(addProduct.fulfilled, state => {
        state.productToAdd = null;
        state.isProductSuccesAdded = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addProduct.pending, handlePending)
      .addCase(addProduct.rejected, handleRejected);
  },
});

export const selectCategories = state => state.products.categories;
export const selectProducts = state => state.products.products;
export const selectPage = state => state.products.page;
export const selectProductToAdd = state => state.products.productToAdd;
export const selectCaloriesByUser = state => state.products.caloriesByUser;
export const selectIsProductSuccesAdded = state =>
  state.products.isProductSuccesAdded;
export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;
export const selectHasMore = state => state.products.hasMore;

export const {
  setPage,
  setProductToAdd,
  setCaloriesByUser,
  setIsProductSuccesAdded,
} = productSlice.actions;

export const productReducer = productSlice.reducer;
