import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scorebord } from '../../interface/scorebord';


@Injectable({
  providedIn: 'root'
})
export class ScoreboardService {

  constructor(private _HttpClient: HttpClient) { }

  getscore(): Observable<Scorebord[]> {

    return this._HttpClient.get<Scorebord[]>(
      '/api/LeagueStandings',

    );
  }
}
