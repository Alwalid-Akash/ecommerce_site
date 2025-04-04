import { createSlice, configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
const myStore = configureStore({
  reducer: {
    items: itemSlice.reducer
  }
})
export default myStore;