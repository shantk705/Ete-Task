export interface IBaseUser {
    Full_Name: string;
    Email: string;
    Age: number | string;
    Country:string;
  }
  export interface IUser extends IBaseUser {
    id: number ;
    Full_Name: string;
    Email: string;
    Age: number | string;
    Country:string;

  }
  