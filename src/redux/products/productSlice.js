import { createSlice } from '@reduxjs/toolkit';
// import { fetchCategories, fetchProducts, addProduct } from './productOperations';

const productInitialState = {
//   categories: [],
//   products: [],
  productToAdd: null,
  caloriesByUser: null,
  isProductSuccesAdded: false,
  isLoading: false,
  error: null,
};

// const handlePending = state => {
//   state.isLoading = true;
//   state.error = null;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

const productSlice = createSlice({
  name: 'product',
  initialState: productInitialState,
  reducers: {
    setProductToAdd (state, action) {
      state.productToAdd = action.payload;
    },
    setCaloriesByUser (state, action) {
      state.caloriesByUser = action.payload;
    }
  },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchCategories.fulfilled, (state, action) => {
//         state.categories = action.payload;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(fetchCategories.pending, handlePending)
//       .addCase(fetchCategories.rejected, handleRejected)

//       .addCase(fetchProducts.fulfilled, (state, action) => {
//         state.products = action.payload;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(fetchProducts.pending, handlePending)
//       .addCase(fetchProducts.rejected, handleRejected)

//        .addCase(addProduct.fulfilled, (state, action) => {
//        state.isProductSuccesAdded = true;
//         state.isLoading = false;
//         state.error = null;
//       })
//       .addCase(addProduct.pending, handlePending)
//       .addCase(addProduct.rejected, handleRejected);
//   },
});

// export const selectCategories = state => state.productReducer.categories;
// export const selectProducts = state => state.productReducer.products;
export const selectProductToAdd = state => state.productReducer.productToAdd;
export const selectCaloriesByUser = state => state.productReducer.caloriesByUser;
export const selectIsProductSuccesAdded = state => state.productReducer.isProductSuccesAdded;
export const selectIsLoading = state => state.productReducer.isLoading;
export const selectError = state => state.productReducer.error;

export const { setProductToAdd, setCaloriesByUser } = productSlice.actions;

export const productReducer = productSlice.reducer;
