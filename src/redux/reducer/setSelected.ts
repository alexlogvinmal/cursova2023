import { createSlice } from "@reduxjs/toolkit";


interface RootState {
  selected: string;
}

const initialState: RootState = {
    selected: '',
};

export const setSelectedSlice = createSlice({
  name: 'selected',
  initialState,
  reducers: {
    setSelected: (state, action) => {
      state.selected = action.payload;
    }
  }
})

export const { setSelected } = setSelectedSlice.actions
export const setSelectedReducer = setSelectedSlice.reducer