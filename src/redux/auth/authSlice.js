import { createSlice } from '@reduxjs/toolkit';
import {
  logIn,
  logOut,
  refreshUser,
  register,
  updateAvatar,
  updateUser,
} from './authOperations';

const onPending = state => {
  state.isFetching = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isFetching = false;
  state.error = payload;
};

const initialState = {
  user: {
    name: null,
    email: null,
    avatarURL: null,
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    calorie: null,
    levelActivity: null,
    registerDate: null,
  },
  isLoading: false,
  token: null,
  isLoggedIn: false,
  isFetching: false,
  error: null,
  isImageLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addCase(register.fulfilled, (state, action) => {
      state.user.name = action.payload.name;
      state.user.email = action.payload.email;

      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isFetching = false;
    });

    builder.addCase(logIn.fulfilled, (state, action) => {
      state.token = action.payload.token;
      // state.isLoggedIn = true;
      state.isFetching = false;
    });

    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isFetching = false;
    });

    builder.addCase(refreshUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetching = false;
    });
    builder.addCase(refreshUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
    builder.addCase(updateUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(updateUser.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updateUser.rejected, (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    });
    builder.addCase(updateAvatar.pending, (state, action) => {
      state.isImageLoading = true;
    });
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.user.avatarURL = action.payload.avatarURL;
      state.isLoggedIn = true;
      state.isImageLoading = false;
    });
    builder.addCase(updateAvatar.rejected, (state, action) => {
      state.error = action.payload;
      state.isImageLoading = false;
    });
    builder.addMatcher(action => action.type.endsWith('/pending'), onPending);
    builder.addMatcher(action => action.type.endsWith('/rejected'), onRejected);
  },
});

export const authReducer = authSlice.reducer;
