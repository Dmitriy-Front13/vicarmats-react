import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../components/modals/modalSlice';
import priceConstructorReducer from '../components/priceConstructor/priceConstructorSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    priceConstructor: priceConstructorReducer,
  },
  devTools: process.env.NODE_ENV !== 'production'
});

export default store; 