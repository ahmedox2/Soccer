import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Player, PlayerStates } from '../../interface/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatesService {

  constructor(private _HttpClient: HttpClient) { }
    getPlayerInfo(id:any): Observable<Player> {

      return this._HttpClient.get<Player>(
        `/api/Players/${id}`

      );
    }
        getPlayerStates(id:any): Observable<PlayerStates> {

      return this._HttpClient.get<PlayerStates>(
        `/api/PlayerStats/${id}`

      );
    }
}
