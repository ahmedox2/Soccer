import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  constructor(private _HttpClient: HttpClient) { }

  getscore(): Observable<any> {

    return this._HttpClient.get<any>(
      '/api/LeagueStandings',

    );
  }
}
