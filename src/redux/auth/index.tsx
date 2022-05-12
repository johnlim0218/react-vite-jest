import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    testState: 'test'
  },
  reducers: {
    testAction: state => {
      state.testState = 'test1'
    }
  }
});

export const { testAction } = authSlice.actions;

export default authSlice.reducer