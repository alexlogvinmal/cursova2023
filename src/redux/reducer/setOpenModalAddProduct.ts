import { createSlice } from "@reduxjs/toolkit";


interface RootState {
  openModalAddProduct: boolean;
}

const initialState: RootState = {
    openModalAddProduct: false,
};

export const setOpenModalAddProductSlice = createSlice({
  name: 'openModalAddProduct',
  initialState,
  reducers: {
    setOpenModalAddProduct: (state, action) => {
      state.openModalAddProduct = action.payload;
    }
  }
})

export const { setOpenModalAddProduct } = setOpenModalAddProductSlice.actions
export const setOpenModalAddProductReducer = setOpenModalAddProductSlice.reducer