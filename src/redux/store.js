import { configureStore } from '@reduxjs/toolkit';

import { globalReducer } from './global/globalSlice';

const store = configureStore({
  reducer: {
    globalReducer,
  },
});

export default store;
