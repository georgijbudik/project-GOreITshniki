import { configureStore } from '@reduxjs/toolkit';

import { globalReducer } from './global/globalSlice';
import { authReducer } from './auth/authSlice';
import { productReducer } from './products/productSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    globalReducer,
    productReducer,
  },
});

export default store;
