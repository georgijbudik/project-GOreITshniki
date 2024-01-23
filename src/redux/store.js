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
import { exeReducer } from './exercises/exerciseSlice';
import { profileReducer } from './profile/profileSlice';
import { diaryReducer } from './diary/diarySlice';
const authPersistConfig = {
  key: 'auth',
  version: 1,
  storage,
  whitelist: ['token'],
};

const globalPersistConfig = {
  key: 'global',
  version: 1,
  storage,
  whitelist: ['theme', 'language'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    profile: persistReducer(authPersistConfig, profileReducer),
    global: persistReducer(globalPersistConfig, globalReducer),
    products: productReducer,
    exercises: exeReducer,
    diary: diaryReducer,
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
