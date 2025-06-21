import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Player, PlayerStates } from '../../interface/Player';
import { Enviroment } from '../../../core/base/Enviroment';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatesService {

  constructor(private _HttpClient: HttpClient) { }
    getPlayerInfo(id:any): Observable<Player> {

      return this._HttpClient.get<Player>(
        `${Enviroment.baseUrl}/api/Players/${id}`

      );
    }
        getPlayerStates(id:any): Observable<PlayerStates> {

      return this._HttpClient.get<PlayerStates>(
        `${Enviroment.baseUrl}/api/PlayerStats/${id}`

      );
    }
}
