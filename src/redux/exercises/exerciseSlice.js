import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import {
  getExercises,
  getExercisesByType,
  getExercisesMuscles,
  getExercisesEquipment,
  getExercisesBodyparts,
  getExercisesFilter,
} from './exerciseOperations';

const InitialState = {
  isLoading: false,
  error: null,
  array: [],
  exercisesByType: [],
  exeFilter: [],
  page: 1,
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

const addStatusToActs = status => arrOfActs.map(el => el[status]);

const exeSlice = createSlice({
  name: 'exercises',
  initialState: InitialState,
  reducers: {
    clearExeciseFilter: state => {
      state.exeFilter = [];
      state.page = 1;
    },
    setPage: state => {
      // state.page = state.page += 1;
      state.page += 1;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
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
      .addMatcher(isAnyOf(...addStatusToActs('pending')), onPending)
      .addMatcher(isAnyOf(...addStatusToActs('rejected')), onRejected),
});
export const { clearExeciseFilter, setPage, setLoading } = exeSlice.actions;
export const exeReducer = exeSlice.reducer;
