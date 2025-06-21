import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clubs } from '../../interface/Clubs';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private _HttpClient: HttpClient) { }

    getclubs(): Observable<Clubs[]> {

    return this._HttpClient.get<Clubs[]>(
      `/api/Clubs`

    );
  }

  getclub(id:any): Observable<Clubs> {

    return this._HttpClient.get<Clubs>(
      `/api/Clubs/${id}`

    );
  }
  
}
