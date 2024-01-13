import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalOpen: false,
};

const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },

    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
  },
});

export const { setIsLoading, setIsModalOpen } = globalSlice.actions;

export const selectIsModalOpen = state => state.globalReducer.isModalOpen;
export const selectIsLoading = state => state.globalReducer.isLoading;

export const globalReducer = globalSlice.reducer;
