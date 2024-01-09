import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  dummy: null,
}

export const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {
  }
})

export default dummySlice.reducer;

