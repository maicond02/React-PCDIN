import { createSlice } from '@reduxjs/toolkit';
export const feedSlice = createSlice({
  name: 'feed',
  initialState: {
    value: 'names',
  },
  reducers: {
    
  }
})
export const { increment, decrement, incrementByAmount } = feedSlice.actions

export default feedSlice.reducer