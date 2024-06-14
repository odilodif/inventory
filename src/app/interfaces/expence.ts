export interface Expence{
    id?: number; 
    id_user: string;
    id_cli:string;  
    date_exp: Date;
    total_exp:number;
    state_exp?: string; 
    exp_obs?: string;    
   }