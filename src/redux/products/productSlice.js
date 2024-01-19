import { createSlice } from '@reduxjs/toolkit';
import { fetchCategories, fetchProducts } from './productOperations';
//  addProduct

const productInitialState = {
  categories: [],
  products: [],
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
        state.products = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchProducts.pending, handlePending)
      .addCase(fetchProducts.rejected, handleRejected);

    // .addCase(addProduct.fulfilled, (state, action) => {
    //   state.isProductSuccesAdded = true;
    //   state.isLoading = false;
    //   state.error = null;
    // })
    // .addCase(addProduct.pending, handlePending)
    // .addCase(addProduct.rejected, handleRejected);
  },
});

export const selectCategories = state => state.products.categories;
export const selectProducts = state => state.products.products;
export const selectProductToAdd = state => state.products.productToAdd;
export const selectCaloriesByUser = state => state.products.caloriesByUser;
export const selectIsProductSuccesAdded = state =>
  state.products.isProductSuccesAdded;
export const selectIsLoading = state => state.products.isLoading;
export const selectError = state => state.products.error;

export const { setProductToAdd, setCaloriesByUser, setIsProductSuccesAdded } =
  productSlice.actions;

export const productReducer = productSlice.reducer;
