import { createSlice } from '@reduxjs/toolkit';
import { logOut, refreshUser, updateAvatar } from './profileOperations';

const initialState = {
  user: {
    name: null,
    email: null,
    password: null,
    avatarURL: null,
    height: null,
    currentWeight: null,
    desiredWeight: null,
    birthday: null,
    blood: null,
    sex: null,
    calorie: null,
    levelActivity: null,
  },
  token: null,
  isLoggedIn: false,
  isFetching: false,
  error: null,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  extraReducers: builder => {
    builder.addCase(logOut.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.user = { name: null, email: null, password: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isFetching = false;
    });
    builder.addCase(logOut.rejected, (state, action) => {
      state.error = action.payload;
      state.isFetching = false;
    });

    builder.addCase(refreshUser.pending, (state, action) => {
      state.isFetching = true;
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

    builder.addCase(updateAvatar.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(updateAvatar.fulfilled, (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetching = false;
    });
    builder.addCase(updateAvatar.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });
  },
});

export const profileReducer = profileSlice.reducer;
