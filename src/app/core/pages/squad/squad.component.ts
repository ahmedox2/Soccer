import { CommonModule } from '@angular/common';
import {  Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClubsService } from '../../../shared/service/Clubs/clubs.service';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../../shared/interface/teams';


@Component({
  selector: 'app-squad',
  standalone: true,
  imports: [CommonModule , ],
  templateUrl: './squad.component.html',
  styleUrl: './squad.component.scss'
})
export class SquadComponent implements OnInit {
 isLoading:boolean=false;
      Newslist!:Team[];

  constructor(private router: Router,private _ClubsService:ClubsService,private route: ActivatedRoute) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
  this.getallproducts(id);
  }
      getallproducts(id:any)
  {
  this.isLoading=true;
    this._ClubsService.getclub(id).subscribe({
      next : res =>{
        this.Newslist = res.team;
        console.log(this.Newslist)
        this.isLoading=false;
      },
      error : err =>{
        console.log(err);
        this.isLoading=false;
      }
    })

  }
}
