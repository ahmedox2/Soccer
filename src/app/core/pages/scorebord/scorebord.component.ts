import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScoreboardService } from '../../../shared/service/Scoreboard/scoreboard.service';
import { Scorebord, Table } from '../../../shared/interface/scorebord';

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
    isLoading:boolean=false;
    Newslist!:Table[];
  constructor(private _NewsService:ScoreboardService) { }
  ngOnInit(): void {


  this.getallproducts();

  }


    getallproducts()
  {
  this.isLoading=true;
    this._NewsService.getscore().subscribe({
      next : res =>{
        this.Newslist = res.standings[0].table;
        console.log(this.Newslist)
        this.isLoading=false;
      },
      error : err =>{
        console.log(err);
        this.isLoading=false;
      }
    })

  }



  getBarColor(index: number): string {
    if (index < 4) return 'rgba(0, 128, 0, 0.2)'; // Champions League
    if (index < 6) return 'rgba(255, 165, 0, 0.2)'; // Europa League
    if (index >= 17) return 'rgba(255, 0, 0, 0.2)'; // Relegation
    return 'transparent';
  }
}
