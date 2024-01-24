import { createSlice } from '@reduxjs/toolkit';
// import { getCurrentUser } from './diaryOperations';
import { getDayInfo, deleteProduct, deleteExercise } from './diaryOperations';
import dayjs from 'dayjs';
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
  burnedCalories: 0,
  consumedCalories: 0,
  sportSeconds: 0,
  date: dayjs().format('DD.MM.YYYY'),
};

const diarySlice = createSlice({
  name: 'diaryCurrent',
  initialState,
  reducers: {
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
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
      if (action.payload.message !== undefined) {
        state.products = [];
        state.exercises = [];
        state.date = action.meta.arg;

        state.burnedCalories = 0;
        state.sportSeconds = 0;
        state.consumedCalories = 0;
        return;
      }

      state.products = action.payload.days[0].products;
      state.exercises = action.payload.days[0].exercises;
      state.date = action.payload.days[0].date;

      const { totalTime, totalBurnedCalories } =
        action.payload.days[0].exercises.reduce(
          (totals, exercise) => {
            totals.totalTime += exercise.time;
            totals.totalBurnedCalories += exercise.burnedCalories;
            return totals;
          },
          { totalTime: 0, totalBurnedCalories: 0 }
        );

      const { totalCaloriesConsumed } = action.payload.days[0].products.reduce(
        (totals, products) => {
          totals.totalCaloriesConsumed += products.consumedCalories;
          return totals;
        },
        { totalCaloriesConsumed: 0 }
      );

      state.burnedCalories = totalBurnedCalories;
      state.sportSeconds = totalTime;
      state.consumedCalories = totalCaloriesConsumed;
    });
    builder.addCase(deleteProduct.fulfilled, (state, action) => {
      const productIdToDelete = action.meta.arg.id;

      state.products = state.products.filter(
        productObj => productObj.product._id !== productIdToDelete
      );

      const { totalCaloriesConsumed } = state.products.reduce(
        (totals, products) => {
          totals.totalCaloriesConsumed += products.consumedCalories;
          return totals;
        },
        { totalCaloriesConsumed: 0 }
      );

      state.consumedCalories = totalCaloriesConsumed;
    });
    builder.addCase(deleteExercise.fulfilled, (state, action) => {
      const exerciseIdToDelete = action.meta.arg.id;

      state.exercises = state.exercises.filter(
        exerciseObj => exerciseObj.exercise._id !== exerciseIdToDelete
      );

      const { totalTime, totalBurnedCalories } = state.exercises.reduce(
        (totals, exercise) => {
          totals.totalTime += exercise.time;
          totals.totalBurnedCalories += exercise.burnedCalories;
          return totals;
        },
        { totalTime: 0, totalBurnedCalories: 0 }
      );

      state.burnedCalories = totalBurnedCalories;
      state.sportSeconds = totalTime;
    });
  },
});

export const { setDate } = diarySlice.actions;

export const diaryReducer = diarySlice.reducer;
