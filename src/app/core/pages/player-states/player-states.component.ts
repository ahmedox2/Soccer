import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClubsService } from '../../../shared/service/Clubs/clubs.service';
import { Clubs } from '../../../shared/interface/Clubs';
import { PlayerStatesService } from '../../../shared/service/player-states/player-states.service';
import { Player, PlayerStates } from '../../../shared/interface/Player';

@Component({
  selector: 'app-player-states',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-states.component.html',
  styleUrls: ['./player-states.component.scss']
})
export class PlayerStatesComponent implements OnInit {
  constructor(private router: Router,private _PlayerStatesService:PlayerStatesService,private route: ActivatedRoute) {}

  ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
       if( typeof localStorage!= 'undefined')
   localStorage.setItem('currentpage',`/player-states/${id}`)
  this.getPlayerStates(id);
  }
    isLoading:boolean=false;
    playerStateslist!: PlayerStates;
    PlayerInfolist!: Player;
  getPlayerStates(id:any)
  {
  this.isLoading=true;
    this._PlayerStatesService.getPlayerStates(id).subscribe({
      next : res =>{
        this.playerStateslist = res;
        this.isLoading=false;
      },
      error : err =>{
        console.log(err);
        this.isLoading=false;
      }
    })

  }
   getPlayerInfo(id:any)
  {
  this.isLoading=true;
    this._PlayerStatesService.getPlayerInfo(id).subscribe({
      next : res =>{
        this.PlayerInfolist = res;
        this.isLoading=false;
      },
      error : err =>{
        console.log(err);
        this.isLoading=false;
      }
    })

  }

}
