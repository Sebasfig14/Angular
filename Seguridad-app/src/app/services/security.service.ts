import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  private URL = 'http://localhost:3000/';
  constructor(private httpClient : HttpClient) { }

  login (user): Observable<any>
  {
return this.httpClient.post<any>(this.URL + 'login', user);
 }
 logout(){
   localStorage.removeItem('token');
   }

   logedIn (){
    return !!localStorage.getItem('token');
    }
    getToken (){
      return localStorage.getItem('token');
      }

}
