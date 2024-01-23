import { createSlice } from '@reduxjs/toolkit';
// import { getCurrentUser } from './diaryOperations';
import { getDayInfo, deleteProduct } from './diaryOperations';
const initialState = {
  // user: {
  //   name: null,
  //   email: null,
  //   // password: null,
  //   avatarURL: null,
  //   height: null,
  //   currentWeight: null,
  //   desiredWeight: null,
  //   birthday: null,
  //   blood: null,
  //   sex: null,
  //   calorie: null,
  //   levelActivity: null,
  // },
  // token: null,
  // isLoggedIn: false,
  isFetching: false,
  error: null,
  products: [],
  exercises: [],
  date: null,
};

const diarySlice = createSlice({
  name: 'diaryCurrent',
  initialState,
  extraReducers: builder => {
    // builder.addCase(getCurrentUser.fulfilled, (state, action) => {
    //   state.user = action.payload;
    //   state.isLoggedIn = true;
    //   state.isFetching = false;
    // });

    // builder.addCase(getCurrentUser.rejected, (state, action) => {
    //   state.isFetching = false;
    //   state.error = action.payload;
    // });
    builder.addCase(getDayInfo.fulfilled, (state, action) => {
      console.log(action.payload.days);
      state.products = action.payload.days[0].products;
      state.exercises = action.payload.days[0].exercises;
      state.date = action.payload.days[0].date;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      console.log(action);
    });
  },
});

export const diaryReducer = diarySlice.reducer;
