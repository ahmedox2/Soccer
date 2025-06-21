
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Inject, inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Auth, Login, Register } from '../../interface/Auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { Enviroment } from '../../../core/base/Enviroment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private _HttpClient:HttpClient , private _Router:Router,  @Inject(PLATFORM_ID) id:object) {
 if(isPlatformBrowser(id)){
  if(localStorage.getItem('token')){
    this.deCodeUserData();
    _Router.navigate([localStorage.getItem('currentpage')])
  }
 }
  }

  userData:BehaviorSubject<any> = new BehaviorSubject(null);

  signUp(data:Register):Observable<any>
  {
    return this._HttpClient.post(`${Enviroment.baseUrl}/api/auth/register`, data);
  }



  signIn(data: Login): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this._HttpClient.post(`${Enviroment.baseUrl}/api/Auth/login`, data, { headers });
  }
  deCodeUserData(){
    const token = JSON.stringify(localStorage.getItem('token'));
    const decoded = jwtDecode(token);
    this.userData.next(decoded);

  }
  logOut()
  {
    localStorage.removeItem("token");
    this.userData.next(null);
    this._Router.navigate(['/login'])
  }

}

