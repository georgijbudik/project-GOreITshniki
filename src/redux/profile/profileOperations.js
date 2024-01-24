import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { toastError } from '../helpers/toastCase';

export const updateAvatar = createAsyncThunk(
  'profile/avatar',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('users/avatar', credentials, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      });
      // setAuthHeader(res.data.token);
      // toastSuccess('You were successfully login', res.data.email);

      return res.data;
    } catch (error) {
      console.log(error);
      toastError(error.response.data.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
