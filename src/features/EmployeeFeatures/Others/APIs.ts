import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';
import { IClient } from "./Interfaces";
import { setLogInState } from "../../Slices/MainSlice";
import { SetNonReadedNotifications } from "../Slices/PagesSlice";

export  const FetchEmployeeInfos=createAsyncThunk(
  'ClientInfos/FetchEmployeeInfos',
   async (_,thunkAPI) => {
    const token = Cookies.get("token");
  try {
    const response = await axios.get('https://localhost:7287/api/Employee/GetEmployeeInfo',
{
     headers: {
       Authorization: `Bearer ${token}`,
      }});

      thunkAPI.dispatch(setLogInState({Type:"Employee",IsLoggedIn:true}));
      thunkAPI.dispatch(FetchEmployeeNotifications(response.data.accountInfo.accountId));
      return response.data

  } catch (error) {
      thunkAPI.dispatch(setLogInState({Type:null,IsLoggedIn:false}));
      return null;
  }
   });

export  const FetchAllEmployeesInfos=createAsyncThunk(
  'ClientInfos/FetchAllEmployeesInfos',
 
   async () => {
  try {
    const response = await axios.get('https://localhost:7287/api/Employee/GetAllEmployeesInfos');
      return response.data

  } catch (error) {
     
     return null;
   
  }
   });


   
export const UpdateIsEmployeeNotificationViewed = createAsyncThunk(
  'ClientInfos/UpdateIsEmployeeNotificationViewed ',

  async (info:any,thunkAPI) => {
    const state:any= thunkAPI.getState();
   let readednotif =state.EPages.NonReadedNotifications;
    if(readednotif){
      readednotif=readednotif.filter((a:any)=>a.id!==info.id);
      thunkAPI.dispatch(SetNonReadedNotifications(readednotif));
    }
   
      await axios.put(`https://localhost:7287/api/ENotifications/UpdateIsEmployeeNotificationviewed/`,info
      );
      
      
  }
);





   export  const FetchEmployeeNotifications=createAsyncThunk(
  'ClientInfos/FetchEmployeeNotifications',
 
   async (Account:string,thunkAPI) => {
  try {
    const response = await axios.get(`https://localhost:7287/api/ENotifications/GetEmployeeNotifications/${Account}`,
{
    });
    if(response.data){
  const r = response.data.filter((a:any)=>a.isviewed===false);
      thunkAPI.dispatch(SetNonReadedNotifications(r));

    }
      return response.data

  } catch (error) {
     
     return null;
   
  }
   });


export const fetchDashboardStats = createAsyncThunk(
    'ClientInfos/fetchDashboardStats',
async () => {
  const token = Cookies.get("token");
    try {
      const response = await axios.get('https://localhost:7287/api/Employee/GetCardsInfo', {
        
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
  
      return response.data; 
    } catch (error) {
     
      return null; 
    }
  }
);


 export async function FreezeUnfreezeClientAccount(accountId:string,State:string){
  interface infos{
accountId:string,
state:string
  }
 const state:infos={accountId:accountId,state:State};


    try {
      const response = await axios.put('https://localhost:7287/api/Client/FreezeUnfreezeClientAccount',state);
  if(response.status===200)
    return true;
  return false;
      
    } catch (error) {
    return false;
    }
 
};
 export async function FreezeUnfreezeEmployeeAccount(accountId:string,State:string){
  interface infos{
accountId:string,
state:string
  }

 const state:infos={accountId:accountId,state:State};

    try {
      const response = await axios.put('https://localhost:7287/api/Employee/FreezeUnfreezeEmployeeAccount',state);

  if(response.status===200)
    return true;

  return false;
      
    } catch (error) {
    return false;
    }
 
};

export async function SendEmployeeMessage(info:any){
    try {
      const response = await axios.post('https://localhost:7287/api/Employee/SendMessageToEmployee',info);

  if(response.status===200){
  await FetchEmployeeNotifications(info.accountId);
  return true;
  }
  return false;
      
    } catch (error) {
    return false;
    }
  
};



 export async function UpdateEmployeeInfos(infos:any){
   try{
    const res=await axios.put("https://localhost:7287/api/Employee/UpdateEmployee",infos);
    if(res.status===200)
   return true;
    
    return false;
}
    catch(err){
    return false;
    }
 
};

export async function AddNewClientAccount(infos:any){
   try{
    const res=await axios.post("https://localhost:7287/api/Client/AddAccount",infos);
    if(res.status===200)
   return true;
    
    return false;
}
    catch(err){
    return false;
    }
 
};

export async function AddNewEmployeeApi(infos:any){
   try{
    
    const res=await axios.post("https://localhost:7287/api/Employee/AddNewEmployee",infos);
    if(res.status===200)
   return true;
    
    return false;
}
    catch(err){
    return false;
    }
 
};


 export async function DepositApi(infos:any){
  
    try {
      const response = await axios.post('https://localhost:7287/api/ManageClients/Deposit',infos);
  if(response.status===200)
    return true;

  return false;
      
    } catch (error) {
      
    return false;
    }
 
};


 export async function WithdrawApi(infos:any){
  
    try {
      const response = await axios.post('https://localhost:7287/api/ManageClients/Withdraw',infos);
  if(response.status===200)
    return true;

  return false;
      
    } catch (error) {
      
    return false;
    }
 
};
 

export const fetchClientsInfos = createAsyncThunk(
  'ClientInfos/fetchClientsInfos',
 
async () => {
 
  try {
    const response = await axios.get('https://localhost:7287/api/Client/GetAllClients');
 
    return response.data; 
  } catch (error) {
   
    return null;
  }
}
);


export const fetchRecentTransactionsXtransfers = createAsyncThunk(
  'ClientInfos/fetchRecentTransactionsXtransfers',
async () => {
  const token = Cookies.get("token");
  try {
    const response = await axios.get('https://localhost:7287/api/Employee/EGetAllTransactions', {
      headers: {
        Authorization: `Bearer ${token}`,
      }
    });
    return response.data; 
  } catch (error) {
    
    return null; 
  }
});



export const AddNewClient = createAsyncThunk(
  'ClientInfos/fetchRecentTransactionsXtransfers',
async (Client:IClient) => {
  try {
    const response = await axios.post('https://localhost:7287/api/ManageClients/AddNewClient',Client);
if(response.status===200)
    return true; 
  return false;
  } catch (error) {
    return false;
  }
}
);





