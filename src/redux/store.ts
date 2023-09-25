import { configureStore } from "@reduxjs/toolkit";
import newsReducer from './reducers/newsSlice'
import paramsReducer from './reducers/newsParamsSlice'
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {newsReducer, paramsReducer},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;