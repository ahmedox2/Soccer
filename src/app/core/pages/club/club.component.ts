import { afterNextRender, Component, inject, runInInjectionContext, EnvironmentInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Table } from '../../../shared/interface/scorebord';
import { ScoreboardService } from '../../../shared/service/Scoreboard/scoreboard.service';

interface Club {
  name: string;
  logo: string;
  country: string;
}

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent {
  private injector = inject(EnvironmentInjector);
  ngOnInit(): void {


  this.getallproducts();

  }
      isLoading:boolean=false;
      Newslist!:Table[];
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


  constructor(private router: Router,private _NewsService:ScoreboardService) {}

  navigateToSquad(club: any) {

        this.router.navigate([`/squad/${club}`]);



  }
}
