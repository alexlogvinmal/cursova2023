import { createSlice } from "@reduxjs/toolkit";


interface RootState {
  openModalZvit: boolean;
}

const initialState: RootState = {
    openModalZvit: false,
};

export const setOpenModalZvitSlice = createSlice({
  name: 'openModalZvit',
  initialState,
  reducers: {
    setOpenModalZvit: (state, action) => {
      state.openModalZvit = action.payload;
    }
  }
})

export const { setOpenModalZvit } = setOpenModalZvitSlice.actions
export const setOpenModalZvitReducer = setOpenModalZvitSlice.reducer