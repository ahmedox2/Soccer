import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Team {
  name: string;
  logo: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  goalDifference: number;
  points: number;
  form: ('W' | 'D' | 'L')[];
  next: string;
}
@Component({
  selector: 'app-scorebord',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './scorebord.component.html',
  styleUrl: './scorebord.component.scss'
})
export class ScorebordComponent {
  teams = [
    {
      name: 'Liverpool',
      // logo: 'https://resources.premierleague.com/premierleague/badges/t14.png',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8650_xsmall.png',
      played: 35,
    won: 26,
    drawn: 4,
    lost: 5,
    goalsFor: 81,
    goalsAgainst: 35,
    goalDifference: 46,
    points: 82,
    form: ['L', 'W', 'W', 'W', 'L'] ,
      next: 'https://resources.premierleague.com/premierleague/badges/t3.png'
    },
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      played: 35,
    won: 20,
    drawn: 7,
    lost: 8,
    goalsFor: 64,
    goalsAgainst: 31,
    goalDifference: 33,
    points: 67,
    form: ['D', 'L', 'W', 'W', 'D'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8650_xsmall.png'
    },
    {
      name: 'Manchester City',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8456_xsmall.png',
      played: 35,
    won: 19,
    drawn: 7,
    lost: 9,
    goalsFor: 67,
    goalsAgainst: 43,
    goalDifference: 24,
    points: 64,
    form: ['D', 'W', 'W', 'W', 'W'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8466_xsmall.png'
    },
    {
      name: 'NewCastle',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10261_xsmall.png',
      played: 35,
      won: 19,
      drawn: 6,
      lost: 10,
      goalsFor: 66,
      goalsAgainst: 45,
      goalDifference: 21,
      points: 63,
      form: ['W', 'W', 'L', 'W', 'D'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8455_xsmall.png'
    },
    {
      name: 'Chelsea',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8455_xsmall.png',
       played: 35,
      won: 18,
      drawn: 9,
      lost: 8,
      goalsFor: 62,
      goalsAgainst: 41,
      goalDifference: 21,
      points: 63,
      form: ['D', 'D', 'W', 'W', 'L'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/10261_xsmall.png'
    },
    {
      name: 'Nottingham Forest',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10203_xsmall.png',
      played: 35,
      won: 17,
    drawn: 10,
    lost: 8,
    goalsFor: 54,
    goalsAgainst: 42,
    goalDifference: 12,
    points: 61,
    form: ['L', 'W', 'W', 'L', 'D'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8197_xsmall.png'
    },
    {
      name: 'Aston Villa',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10252_xsmall.png',
      played: 35,
      won: 18,
      drawn: 6,
      lost: 11,
      goalsFor: 55,
      goalsAgainst: 49,
      goalDifference: 6,
      points: 60,
      form: ['W', 'W', 'L', 'W', 'W'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8678_xsmall.png'
    },
    {
      name: 'Bournemouth',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8678_xsmall.png',
      played: 35,
      won: 14,
      drawn: 11,
      lost: 10,
      goalsFor: 55,
      goalsAgainst: 42,
      goalDifference: 13,
      points: 53,
      form: ['D', 'W', 'D', 'L', 'D'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/10252_xsmall.png'
    },
    {
      name: 'Brentford',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9937_xsmall.png',
      played: 35,
      won: 15,
      drawn: 7,
      lost: 13,
      goalsFor: 62,
      goalsAgainst: 53,
      goalDifference: 9,
      points: 52,
      form: ['W', 'D', 'W', 'L', 'L'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/9902_xsmall.png'
    },
    {
      name: 'Brighton',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10204_xsmall.png',
      played: 35,
    won: 14,
    drawn: 10,
    lost: 11,
      goalsFor: 57,
    goalsAgainst: 56,
    goalDifference: 1,
    points: 52,
    form: ['L', 'D', 'L', 'D', 'L'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8602_xsmall.png'
    },
    {
      name: 'Folham',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9879_xsmall.png',
      played: 35,
    won: 15,
    drawn: 6,
    lost: 14,
    goalsFor: 50,
    goalsAgainst: 47,
    goalDifference: 3,
    points: 51,
    form: ['W', 'W', 'L', 'L', 'L'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8668_xsmall.png'
    },
    {
      name: 'CrystaL Palace',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9826_xsmall.png',
      played: 35,
      won: 12,
      drawn: 10,
      lost: 13,
      goalsFor: 44,
      goalsAgainst: 48,
      goalDifference: -4,
      points: 46,
      form: ['L', 'L', 'D', 'D', 'D'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8586_xsmall.png'
    },
    {
      name: 'Wolvs',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8602_xsmall.png',
      played: 35,
    won: 11,
    drawn: 8,
    lost: 16,
    goalsFor: 51,
    goalsAgainst: 62,
    goalDifference: -11,
    points: 41,
    form: ['W', 'L', 'L', 'L', 'W'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/10204_xsmall.png'
    },
    {
      name: 'Everton',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8668_xsmall.png',
      played: 35,
      won: 10,
      drawn: 9,
      lost: 16,
      goalsFor: 36,
      goalsAgainst: 43,
      goalDifference: -7,
      points: 39,
      form: ['D', 'W', 'L', 'D', 'L']
  ,
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/9879_xsmall.png'
    },{
      name: 'Manchester United',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10260_xsmall.png',
      played: 35,
      won: 10,
      drawn: 9,
      lost: 16,
      goalsFor: 42,
      goalsAgainst: 51,
      goalDifference: -9,
      points: 39,
      form: ['D', 'W', 'L', 'D', 'L'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8654_xsmall.png'
    },
    {
      name: 'Tottenham Hotspur',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8586_xsmall.png',
      played: 35,
      won: 11,
      drawn: 10,
      lost: 14,
      goalsFor: 44,
      goalsAgainst: 48,
      goalDifference: -4,
      points: 46,
      form: ['L', 'L', 'D', 'D', 'D'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/9826_xsmall.png'
    },
    {
      name: 'West Ham',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8654_xsmall.png',
      played: 35,
    won: 9,
    drawn: 10,
    lost: 16,
    goalsFor: 40,
    goalsAgainst: 59,
    goalDifference: -19,
    points: 37,
    form: ['D', 'D', 'D', 'L', 'D'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/10260_xsmall.png'
    },
    {
      name: 'Ipswich Town',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9902_xsmall.png',
      played: 35,
    won: 10,
    drawn: 9,
    lost: 16,
    goalsFor: 42,
    goalsAgainst: 51,
    goalDifference: -9,
    points: 39,
    form: ['D', 'W', 'L', 'D', 'L'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/9937_xsmall.png'
    },
    {
      name: 'Leicester City',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8197_xsmall.png',
      played: 35,
      won: 10,
      drawn: 8,
      lost: 17,
      goalsFor: 63,
      goalsAgainst: 57,
      goalDifference: 6,
      points: 38,
      form: ['W', 'L', 'L', 'D', 'W'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/10203_xsmall.png'
    },
    {
      name: 'Southampton',
      logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8466_xsmall.png',
      played: 35,
      won: 5,
      drawn: 7,
      lost: 23,
      goalsFor: 35,
      goalsAgainst: 76,
      goalDifference: -41,
      points: 22,
      form: ['L', 'L', 'D', 'L', 'L'],
      next: 'https://images.fotmob.com/image_resources/logo/teamlogo/8456_xsmall.png'
    },
    // باقي الفرق...
  ];
  
  getFormClass(form: string): string {
    return form === 'W' ? 'win' : form === 'L' ? 'loss' : 'draw';
  }

  getBarColor(index: number): string {
    if (index < 4) return 'rgba(0, 128, 0, 0.2)'; // Champions League
    if (index < 6) return 'rgba(255, 165, 0, 0.2)'; // Europa League
    if (index >= 17) return 'rgba(255, 0, 0, 0.2)'; // Relegation
    return 'transparent';
  }
}
