import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ClubsService } from '../../../shared/service/Clubs/clubs.service';
import { Clubs } from '../../../shared/interface/Clubs';
import { PlayerStatesService } from '../../../shared/service/player-states/player-states.service';
import { PlayerStates } from '../../../shared/interface/Player';
interface PlayerStats {
  goals: number;
  assists: number;
  matches: number;
  started: number;
  minutesPlayed: number;
  rating: number;
  yellowCards: number;
  redCards: number;
}

interface PlayerTraits {
  touches: number;
  shotAttempts: number;
  goals: number;
  chancesCreated: number;
  aerialDuelsWon: number;
  defensiveActions: number;
}

@Component({
  selector: 'app-player-states',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './player-states.component.html',
  styleUrls: ['./player-states.component.scss']
})
export class PlayerStatesComponent implements OnInit {
  playerName = 'Mohamed Salah';
  playerNumber = 11;
  teamName = 'Liverpool';
  teamLogo = 'https://resources.premierleague.com/premierleague/badges/t14.png';
  playerImage = 'https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png';
  age = 32;
  preferredFoot = 'Left';
  position = 'Right Winger';

  traits: PlayerTraits = {
    touches: 26,
    shotAttempts: 90,
    goals: 99,
    chancesCreated: 72,
    aerialDuelsWon: 11,
    defensiveActions: 1
  };

  stats: PlayerStats = {
    goals: 27,
    assists: 18,
    matches: 32,
    started: 32,
    minutesPlayed: 2837,
    rating: 8.14,
    yellowCards: 1,
    redCards: 0
  };

  constructor(private router: Router,private _PlayerStatesService:PlayerStatesService,private route: ActivatedRoute) {}

  ngOnInit(): void {
        const id = this.route.snapshot.paramMap.get('id');
       if( typeof localStorage!= 'undefined')
   localStorage.setItem('currentpage',`/player-states/${id}`)
  }
    isLoading:boolean=false;
    playerStateslist!: PlayerStates;
  getPlayerInfo(id:any)
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

}
