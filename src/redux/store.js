import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { globalReducer } from './global/globalSlice';
import { authReducer } from './auth/authSlice';
import { productReducer } from './products/productSlice';

const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};
const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    globalReducer,
    productReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
