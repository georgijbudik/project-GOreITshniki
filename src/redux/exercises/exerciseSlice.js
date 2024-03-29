import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getExercises,
  getExercisesByType,
  getExercisesMuscles,
  getExercisesEquipment,
  getExercisesBodyparts,
  getExercisesFilter,
  addExerciseToDiary,
} from './exerciseOperations';

const InitialState = {
  isLoading: false,
  error: null,
  array: [],
  exercisesByType: [],
  exeFilter: [],
  page: 1,
  addSuccess: { isOpened: false, calories: 0, time: 0 },
};

const onPending = state => {
  state.isLoading = true;
  state.error = null;
};

const onRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const arrOfActs = [
  getExercises,
  getExercisesByType,
  getExercisesMuscles,
  getExercisesEquipment,
  getExercisesBodyparts,
  getExercisesFilter,
];

export const addStatusToActs = status => arrOfActs.map(el => el[status]);

const exeSlice = createSlice({
  name: 'exercises',
  initialState: InitialState,
  reducers: {
    clearExeciseFilter: state => {
      state.exeFilter = [];
      state.page = 1;
    },
    setPage: state => {
      state.page += 1;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    closeModalSuccess: state => {
      state.addSuccess.isOpened = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(getExercises.fulfilled, (state, action) => {
        state.array = action.payload;
        state.isLoading = false;
      })
      .addCase(getExercisesFilter.fulfilled, (state, action) => {
        state.exeFilter = [...state.exeFilter, ...action.payload];
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getExercisesByType.pending, (state, action) => {
        state.exercisesByType = [];
        state.isLoading = true;
      })
      .addCase(getExercisesByType.fulfilled, (state, action) => {
        state.exercisesByType = action.payload;
        state.isLoading = false;
      })
      .addCase(addExerciseToDiary.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(addExerciseToDiary.fulfilled, (state, payload) => {
        state.addSuccess.isOpened = true;
        state.addSuccess.time = payload.meta.arg.time;
        state.addSuccess.calories = payload.meta.arg.calories;

        state.isLoading = false;
      })
      .addCase(addExerciseToDiary.rejected, (state, action) => {
        state.isLoading = false;
      })
      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected),
  // .addCase(addExerciseToDiary.pending, state => {
  //   state.isLoading = true;
  // })

  // .addCase(getExercisesMuscles.fulfilled, (state, action) => {
  //   state.muscles = action.payload;
  //   state.isLoading = false;
  // })
  // .addCase(getExercisesEquipment.fulfilled, (state, action) => {
  //   state.equipment = action.payload;
  //   state.isLoading = false;
  // })
  // .addCase(getExercisesBodyparts.fulfilled, (state, action) => {
  //   state.bodyparts = action.payload;
  //   state.isLoading = false;
  // })
});
export const { clearExeciseFilter, setPage, closeModalSuccess, setLoading } =
  exeSlice.actions;

export const exeReducer = exeSlice.reducer;
