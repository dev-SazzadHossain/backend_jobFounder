import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  city: "",
  category: "",
};
export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    nameAction: (state, action) => {
      console.log(action.payload);
      state.name = action.payload;
    },
    cityAction: (state, action) => {
      state.city = action.payload;
    },
    categoryAction: (state, action) => {
      state.category = action.payload;
    },
  },
});

export default searchSlice.reducer;
export const { nameAction, cityAction, categoryAction } = searchSlice.actions;
