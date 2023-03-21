import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = { ...state, ...action.payload };
      // for (const key in action.payload) {
      //   if (action.payload.hasOwnProperty(key)) {
      //     state[key] = action.payload[key];
      //   }
      // }
    },
    //2hr 32mins 32sec
  },
});

export const { cacheResults } = searchSlice.actions;

export default searchSlice.reducer;
