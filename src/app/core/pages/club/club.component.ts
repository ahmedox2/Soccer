import { Component, inject, EnvironmentInjector, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ClubsService } from '../../../shared/service/Clubs/clubs.service';
import { Clubs } from '../../../shared/interface/Clubs';

@Component({
  selector: 'app-club',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  private injector = inject(EnvironmentInjector);

  isLoading: boolean = false;
  Clubslist!: Clubs[];

  constructor(private router: Router, private _ClubService: ClubsService) {}

  ngOnInit(): void {
    if (typeof localStorage !== 'undefined')
      localStorage.setItem('currentpage', '/club');

    this.getclubs();
  }

  getclubs() {
    this.isLoading = true;
    this._ClubService.getclubs().subscribe({
      next: (res) => {
        this.Clubslist = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.log(err);
        this.isLoading = false;
      }
    });
  }

  navigateToSquad(club: any) {
    this.router.navigate([`/squad/${club}`]);
  }
}
