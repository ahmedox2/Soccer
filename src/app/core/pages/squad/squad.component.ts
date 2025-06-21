import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubsService } from '../../../shared/service/Clubs/clubs.service';
import { ActivatedRoute } from '@angular/router';
import { Clubs } from '../../../shared/interface/Clubs';



@Component({
  selector: 'app-squad',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './squad.component.html',
  styleUrl: './squad.component.scss'
})
export class SquadComponent implements OnInit {
  isLoading:boolean=false;
  Clubslist!: Clubs;

  constructor(private router: Router,private _ClubsService:ClubsService,private route: ActivatedRoute) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
       if( typeof localStorage!= 'undefined')
   localStorage.setItem('currentpage',`/squad/${id}`)

  this.getclub(id);
  }
      getclub(id:any)
  {
  this.isLoading=true;
    this._ClubsService.getclub(id).subscribe({
      next : res =>{
        this.Clubslist = res;
        this.isLoading=false;
      },
      error : err =>{
        console.log(err);
        this.isLoading=false;
      }
    })

  }
    navigateToplayer(player: any) {
    this.router.navigate([`player-states/${player}`]);
  }
}
