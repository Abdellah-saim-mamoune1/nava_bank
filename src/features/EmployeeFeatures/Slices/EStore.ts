import { configureStore } from '@reduxjs/toolkit';
import ELeftNavReducer  from './ELeftNavSlice'
const Estore = configureStore({
  reducer: {
  
  
   
  },
});

export type RootState = ReturnType<typeof Estore.getState>;
export type AppDispatch = typeof Estore.dispatch;

export default Estore;