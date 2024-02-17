import { SpaModel } from "./spa.model";
import { UserModel } from "./user.model";

export interface bookingModel {
  
    id: number;
    date: string;
    phone: string;
    state: string;
    spa: SpaModel;
    user:UserModel;
   
  
}