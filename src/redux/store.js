import { configureStore } from '@reduxjs/toolkit';

import { globalReducer } from './global/globalSlice';
import { authReducer } from './auth/authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    globalReducer,
  },
});

export default store;
