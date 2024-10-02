import { configureStore } from '@reduxjs/toolkit';
import modalReducer from '../components/modals/modalSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store; 