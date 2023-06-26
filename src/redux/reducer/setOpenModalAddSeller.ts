import { createSlice } from "@reduxjs/toolkit";


interface RootState {
  openModalAddSeller: boolean;
}

const initialState: RootState = {
    openModalAddSeller: false,
};

export const setOpenModalAddSellerSlice = createSlice({
  name: 'openModalAddSeller',
  initialState,
  reducers: {
    setOpenModalAddSeller: (state, action) => {
      state.openModalAddSeller = action.payload;
    }
  }
})

export const { setOpenModalAddSeller } = setOpenModalAddSellerSlice.actions
export const setOpenModalAddSellerReducer = setOpenModalAddSellerSlice.reducer