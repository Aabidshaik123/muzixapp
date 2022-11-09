import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

 

  constructor(private http : HttpClient) { }


  signUp(userObj:any){

    return this.http.post<any>('https://localhost:7024/api/User/register',userObj);
  }

  login(loginObj:any){
    return this.http.post<any>('https://localhost:7024/api/User/authenticate',loginObj);
  }
}
