import { CommonModule } from '@angular/common';
import { afterNextRender,inject,EnvironmentInjector,runInInjectionContext, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Player {
  name: string;
  image: string;
  position: string;
  nationality: string;
  number: number;
}

interface Club {
  name: string;
  logo: string;
  country: string;
}
@Component({
  selector: 'app-squad',
  standalone: true,
  imports: [CommonModule , ],
  templateUrl: './squad.component.html',
  styleUrl: './squad.component.scss'
})
export class SquadComponent implements OnInit {
  club: Club | null = null;

  coach = {
    name: 'Arne Slot',
    nationality: 'Netherlands',
    image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/man39237.png'
  };

  keepers: Player[] = [
    {
      name: 'Alisson Becker',
      nationality: 'Brazil',
      position: 'Goalkeeper',
      number: 1,
      image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p116535.png'
    },
    {
      name: 'Alisson Becker',
      nationality: 'Brazil',
      position: 'Goalkeeper',
      number: 1,
      image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p116535.png'
    },
    {
      name: 'Alisson Becker',
      nationality: 'Brazil',
      position: 'Goalkeeper',
      number: 1,
      image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p116535.png'
    },
    {
      name: 'Caoimhin Kelleher',
      nationality: 'Ireland',
      position: 'Goalkeeper',
      number: 62,
      image: 'https://resources.premierleague.com/premierleague/photos/players/250x250/p200720.png'
    }
  ];
  private injector = inject(EnvironmentInjector);
  constructor(private router: Router) {}
  ngOnInit() {
    runInInjectionContext(this.injector, () => {
      afterNextRender(() => {
        const storedClub = localStorage.getItem('selectedClub');
        if (storedClub) {
          this.club = JSON.parse(storedClub);
        } else {
          this.router.navigate(['/']);
        }
      });
    });
  }
}
