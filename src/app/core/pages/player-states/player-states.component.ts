import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {}

  ngOnInit(): void {
    // You can fetch player data here
  }

  navigateToPlayer(playerId: string): void {
    this.router.navigate(['/player', playerId]);
  }
}
