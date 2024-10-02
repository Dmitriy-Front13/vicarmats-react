import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalData: {},
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalData = action.payload.modalData;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalData = {};
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;
export default modalSlice.reducer;