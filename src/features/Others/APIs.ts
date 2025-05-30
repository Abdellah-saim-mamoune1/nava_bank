import { AddGetHelpRequist } from "./ClientInterfaces";
import axios from "axios";
export async function  AddNewGetHelpRequist(v: AddGetHelpRequist){
  
 const res= await axios.post("https://localhost:7287/api/Client/AddGetHelpRequist",v);
 console.log(res);
}

export async function  UpdateClientPersonalInfos(v:any){
  try{
    const res=await axios.put("https://localhost:7287/api/Client/UpdateClient",v);
    if(res.status===200)
   return true;

    return false;
}
    catch(err){
    return false;
    }
   }
   
