import { createSlice } from "@reduxjs/toolkit";

const updateNoOfCountSlice = createSlice({
  name: "Total no of product in cart",
  initialState: 0,
  reducers: {
    updateCountInCart: (state, { payload }) => {
      return payload;
    },
  },
});
export const { updateCountInCart } = updateNoOfCountSlice.actions;
export default updateNoOfCountSlice;
