import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scorebord } from '../../interface/scorebord';
import {  Teams } from '../../interface/teams';

@Injectable({
  providedIn: 'root'
})
export class ClubsService {

  constructor(private _HttpClient: HttpClient) { }

  getclub(id:any): Observable<Teams> {
    const headers = new HttpHeaders({
      'X-Auth-Token': '77ab2943ced945ae91b4c07bb1b5974e'  // التسمية الصحيحة للـ API ده
    });

    return this._HttpClient.get<Teams>(
      `http://api.football-data.org/v4/teams/${id}`,
      { headers }
    );
  }
}
