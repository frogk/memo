import {configureStore, combineReducers} from "@reduxjs/toolkit";
import listSlice from "./list/listSlice";

const reducer = combineReducers({
  list: listSlice,
});

const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
});

export default store;