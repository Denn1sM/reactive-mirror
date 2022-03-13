import { createSlice } from '@reduxjs/toolkit';

export const animationSlice = createSlice({
  name: 'animation',
  initialState: {
    value: '',
  },
  reducers: {
    setLeft: (state) => {
      state.value = 'left';
    },
    setRight: (state) => {
      state.value = 'right';
    },

  },
});

export const { setLeft, setRight } = animationSlice.actions;

export default animationSlice.reducer;
