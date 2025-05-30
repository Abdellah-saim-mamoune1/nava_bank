import { createSlice, PayloadAction} from '@reduxjs/toolkit';

interface LogInState {
 IsLoggedIn:boolean|null;
 Type:string|null;
}

interface infos{
logininfos:LogInState|null
}
const initialState: infos= {
logininfos:null
};

const counterSlice = createSlice({
  name: 'MainSlice',
  initialState,
  reducers: {
    
   setLogInState:(state,action: PayloadAction<LogInState>)=>{
    state.logininfos=action.payload;
   
   }
  },
});

export const {  setLogInState } = counterSlice.actions;
export default counterSlice.reducer;
