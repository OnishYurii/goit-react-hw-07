import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://65db19ef3ea883a152912442.mockapi.io';

export const fetchContacts = createAsyncThunk('contacts/fetchall', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/contacts');
    return response.data;
  } catch (er) {
    return thunkAPI.rejectWithValue(er.message);
  }
});

export const addContact = createAsyncThunk('contacts/addContact', async (values, thinkAPI) => {
  try {
    const response = await axios.post('/contacts', values);
    return response.data;
  } catch (er) {
    return thinkAPI.rejectWithValue(er.message);
  }
});
