import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scorebord } from '../../interface/scorebord';

@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  constructor(private _HttpClient: HttpClient) { }

  getscore(): Observable<Scorebord> {
    const headers = new HttpHeaders({
      'X-Auth-Token': '77ab2943ced945ae91b4c07bb1b5974e'  // التسمية الصحيحة للـ API ده
    });

    return this._HttpClient.get<Scorebord>(
      'https://api.football-data.org/v4/competitions/PL/standings',
      { headers }
    );
  }
}
