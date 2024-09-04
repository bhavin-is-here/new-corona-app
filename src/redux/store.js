import { configureStore } from '@reduxjs/toolkit';
import latlongReducer from './slice/latlongSlice';

const store = configureStore({
  reducer: {
    latlong:latlongReducer
  },
  devTools: process.env.NODE_ENV !== 'production',

});

export default store;
