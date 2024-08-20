export interface IAPIResponse {
  message: string;
  result: boolean;
  data: any;
}

  export class User {
    UserId: number;
    Name: string;
    Email: string;
    Password: string;
    ContactNo: string;
    Role: string;
    contactNo?:string;
    constructor(){
      this.UserId=0;
      this.Name= '';
      this.Email=  '';
      this.Password=  '';
      this.ContactNo=  '';
      this.Role= 'Custpmer';

    }
  }
  export interface ITherapist {
    id: number;
    name: string;
    rating: string;
    location: string;
    languages: string;
    fee: string;
    imageUrl: string;
    about?: string; // Add 'about' if applicable
  }
  
  export interface IBooking {
    therapistId: number;
    name: string;
    contact: string;
    email: string;
    language: string;
    time: string;
    type: 'video' | 'voice' | 'text';
    date: string;
  }
  
  