import { configureStore, combineReducers } from "@reduxjs/toolkit";
import dummyReducer from "./reducers/dummyReducer";

const rootReducer = combineReducers({
  dummyReducer,
})

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof setupStore>['dispatch'];