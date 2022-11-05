import { configureStore } from '@reduxjs/toolkit';
import { numberListReducer } from './numberListSlice';
import { persistReducer } from 'redux-persist';
import { combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  numberList: numberListReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
});
