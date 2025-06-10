import { afterNextRender, Component, inject, runInInjectionContext, EnvironmentInjector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

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
  clubs: Club[] = [
    {
      name: 'Arsenal',
      logo: 'https://resources.premierleague.com/premierleague/badges/t3.png',
      country: 'England'
    },
    {
      name: 'Aston Villa',
      logo: 'https://resources.premierleague.com/premierleague/badges/t7.png',
      country: 'England'
    },
    {
      name: 'Bournemouth',
      logo: 'https://resources.premierleague.com/premierleague/badges/t91.png',
      country: 'England'
    },
    {
      name: 'Brentford',
      logo: 'https://resources.premierleague.com/premierleague/badges/t94.png',
      country: 'England'
    },
    {
      name: 'Brighton',
      logo: 'https://resources.premierleague.com/premierleague/badges/t36.png',
      country: 'England'
    },
    {
      name: 'Chelsea',
      logo: 'https://resources.premierleague.com/premierleague/badges/t8.png',
      country: 'England'
    },
    {
      name: 'Crystal Palace',
      logo: 'https://resources.premierleague.com/premierleague/badges/t31.png',
      country: 'England'
    },
    {
      name: 'Everton',
      logo: 'https://resources.premierleague.com/premierleague/badges/t11.png',
      country: 'England'
    },
    {
      name: 'Fulham',
      logo: 'https://resources.premierleague.com/premierleague/badges/t54.png',
      country: 'England'
    },
    {
      name: 'Liverpool',
      logo: 'https://resources.premierleague.com/premierleague/badges/t14.png',
      country: 'England'
    },
    {
      name: 'Manchester City',
      logo: 'https://resources.premierleague.com/premierleague/badges/t43.png',
      country: 'England'
    },
    {
      name: 'Manchester United',
      logo: 'https://resources.premierleague.com/premierleague/badges/t1.png',
      country: 'England'
    },
    {
      name: 'Newcastle United',
      logo: 'https://resources.premierleague.com/premierleague/badges/t4.png',
      country: 'England'
    },
    {
      name: 'Nottingham Forest',
      logo: 'https://resources.premierleague.com/premierleague/badges/t17.png',
      country: 'England'
    },
    {
      name: 'Sheffield United',
      logo: 'https://resources.premierleague.com/premierleague/badges/t49.png',
      country: 'England'
    },
    {
      name: 'Tottenham Hotspur',
      logo: 'https://resources.premierleague.com/premierleague/badges/t6.png',
      country: 'England'
    },
    {
      name: 'West Ham United',
      logo: 'https://resources.premierleague.com/premierleague/badges/t21.png',
      country: 'England'
    },
    {
      name: 'Wolves',
      logo: 'https://resources.premierleague.com/premierleague/badges/t39.png',
      country: 'England'
    },
    {
      name: 'Burnley',
      logo: 'https://resources.premierleague.com/premierleague/badges/t90.png',
      country: 'England'
    },
    {
      name: 'Luton Town',
      logo: 'https://resources.premierleague.com/premierleague/badges/t102.png',
      country: 'England'
    }
  ];

  constructor(private router: Router) {}

  navigateToSquad(club: Club) {
    runInInjectionContext(this.injector, () => {
      afterNextRender(() => {
        localStorage.setItem('selectedClub', JSON.stringify(club));
        this.router.navigate(['/squad']);
      });

    });
  }
}
