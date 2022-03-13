import { configureStore } from '@reduxjs/toolkit';
import animationReducer from './reducer/animationSlice.tsx';

export default configureStore({
  reducer: {
    animation: animationReducer,
  },
});
