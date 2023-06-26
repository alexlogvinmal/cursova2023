import { createSlice } from "@reduxjs/toolkit";


interface RootState {
  openModalCreateZvit: boolean;
}

const initialState: RootState = {
  openModalCreateZvit: false,
};

export const setOpenModalCreateZvitSlice = createSlice({
  name: 'openModalCreateZvit',
  initialState,
  reducers: {
    setOpenModalCreateZvit: (state, action) => {
      state.openModalCreateZvit = action.payload;
    }
  }
})

export const { setOpenModalCreateZvit } = setOpenModalCreateZvitSlice.actions
export const setOpenModalCreateZvitReducer = setOpenModalCreateZvitSlice.reducer