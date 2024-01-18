import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
  isModalOpen: false,
  theme: 'dark',
  language: 'en',
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

    setTheme: (state, action) => {
      state.theme = action.payload;
    },

    setLanguage: (state, action) => {
      state.language = action.payload;
    },
  },
});

export const { setIsLoading, setIsModalOpen, setTheme, setLanguage } =
  globalSlice.actions;

export const selectIsModalOpen = state => state.global.isModalOpen;
export const selectIsLoading = state => state.global.isLoading;
export const selectTheme = state => state.global.theme;
export const selectLanguage = state => state.global.language;

export const globalReducer = globalSlice.reducer;
