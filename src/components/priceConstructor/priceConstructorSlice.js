import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  carMake: '',
  carModel: '',
  carYear: '',
  carpetColor: '',
  carpetTrim: '',
  set: '',
  price: {
    product: '',
    subtotal: '',
    total: ''
  },
  shipping: {
    postalCode: '',
    shippingPrice: ''
  },
  promo: {
    usePromo: false,
    discount: 0,
    promoValue: ''
  },
}

const priceConstructorSlice = createSlice({
  name: 'priceConstructor',
  initialState,
  reducers: {
    updateCarMake: (state, action) => {
      state.carMake = action.payload;
    },
    updateCarModel: (state, action) => {
      state.carModel = action.payload;
    },
    updateCarYear: (state, action) => {
      state.carYear = action.payload;
    },
    updateCarpetColor: (state, action) => {
      state.carpetColor = action.payload;
    },
    updateCarpetTrim: (state, action) => {
      state.carpetTrim = action.payload;
    },
    updateSet: (state, action) => {
      state.set = action.payload;
    },
    updatePrice: (state, action) => {
      state.price = { ...state.price, ...action.payload };
    },
    updatePromo: (state, action) => {
      state.promo = { ...state.promo, ...action.payload };
    },
    updateShipping: (state, action) => {
      state.shipping = { ...state.shipping, ...action.payload };
    },
  }
});

export const {
  updateCarMake,
  updateCarModel,
  updateCarYear,
  updateCarpetColor,
  updateCarpetTrim,
  updateSet,
  updatePrice,
  updatePromo,
  updateShipping,
} = priceConstructorSlice.actions;

export default priceConstructorSlice.reducer;
