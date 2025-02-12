import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import updateNoOfCountSlice from "./totalAddedCartCount.slice";

const store = configureStore({
  reducer: {
    updateNoOfCountSlice: updateNoOfCountSlice.reducer,
  },
  //   middleware: [logger],
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), // ✅ Fix here
});
export default store;
