import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clubs } from '../../interface/Clubs';
import { Enviroment } from '../../../core/base/Enviroment';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private _HttpClient: HttpClient) { }

    getclubs(): Observable<Clubs[]> {

    return this._HttpClient.get<Clubs[]>(
      `${Enviroment.baseUrl}/api/Clubs`

    );
  }

  getclub(id:any): Observable<Clubs> {

    return this._HttpClient.get<Clubs>(
      `${Enviroment.baseUrl}/api/Clubs/${id}`

    );
  }

}
