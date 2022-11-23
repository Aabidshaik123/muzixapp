import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(private http : HttpClient) { }

  getAllUsers(){
    return this.http.get<any>('https://localhost:44300/api/User/getusers');
  }

  signUp(userObj:any){

    return this.http.post<any>('https://localhost:44335/apigateway/registerservice',userObj);
  }

  login(loginObj:any){
    return this.http.post<any>('https://localhost:44335/apigateway/loginservice',loginObj);
  }
}
