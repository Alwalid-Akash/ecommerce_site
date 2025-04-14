import { configureStore } from "@reduxjs/toolkit";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatusSlice";
import bagSlice from "./bagSlice";
import itemsReducer from "./itemSlice";


const myStore = configureStore({
  reducer: {
    items: itemsReducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: bagSlice.reducer,
  }
});



export default myStore;