import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ScoreboardService } from '../../../shared/service/Scoreboard/scoreboard.service';
import { AuthService } from '../../../shared/service/Auth/Auth.service';
import { Scorebord } from '../../../shared/interface/scorebord';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})

export class HomeComponent {
    isLoading:boolean=false;
    Scoreboardlist!:Scorebord[];
  isLogin : boolean = false;

  ngOnInit(): void {
          if( typeof localStorage!= 'undefined')
      localStorage.setItem('currentpage',`/Home`);
    this._AuthService.userData.subscribe(() => {
      if(this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    })
this.getscore();

  }
 getscore()
  {
  this.isLoading=true;
    this._ScoreboardService.getscore().subscribe({
      next : res =>{
        this.Scoreboardlist = res;
         console.log(this.Scoreboardlist);
        this.isLoading=false;
      },
      error : err =>{
        console.log(err);
        this.isLoading=false;
      }
    })

  }


  teamOfWeek = [
    {
        name: 'Evanilson',
        img: 'https://images.fotmob.com/image_resources/playerimages/1098096.png',
        rating: '8.0',
        top: '11%',
        left: '50%',
        clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8678_xsmall.png' // Bournemouth
    },
    {
        name: 'Garnacho',
        img: 'https://images.fotmob.com/image_resources/playerimages/1203665.png',
        rating: '8.6',
        top: '30%',
        left: '50%',
        clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10260_xsmall.png' // Manchester United
    },
    {
        name: 'Schade',
        img: 'https://images.fotmob.com/image_resources/playerimages/1083796.png',
        rating: '8.9',
        top: '30%',
        left: '12%',
        clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9937_xsmall.png' // Brentford
    },
    {
        name: 'Tielemans',
        img: 'https://images.fotmob.com/image_resources/playerimages/465960.png',
        rating: '8.2',
        top: '52%',
        left: '35%',
        clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10252_xsmall.png' // Aston Villa
    },
    {
        name: 'Palmer',
        img: 'https://images.fotmob.com/image_resources/playerimages/1096353.png',
        rating: '9.1',
        top: '52%',
        left: '65%',
        clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8455_xsmall.png', // Chelsea
        star: true
    },
    {
        name: 'Silva',
        img: 'https://images.fotmob.com/image_resources/playerimages/488139.png',
        rating: '8.1',
        top: '30%',
        left: '90%',
        clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8456_xsmall.png' // Manchester City
    },
    {
        name: 'Williams',
        img: 'https://images.fotmob.com/image_resources/playerimages/1078788.png',
        rating: '8.1',
        top: '71%',
        left: '12%',
        clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8650_xsmall.png' // Liverpool
    },
    {
        name: 'Gvardiol',
        img: 'https://images.fotmob.com/image_resources/playerimages/1070712.png',
        rating: '8.0',
        top: '71%',
        left: '35%',
        clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8456_xsmall.png' // Manchester City
    },
    {
      name: 'Murillo',
      img: 'https://images.fotmob.com/image_resources/playerimages/1458711.png',
      rating: '8.4',
      top: '71%',
      left: '65%',
      clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10203_xsmall.png' // Nottingham Forest
  },
  {
      name: 'Kayode',
      img: 'https://images.fotmob.com/image_resources/playerimages/1429912.png',
      rating: '8.4',
      top: '71%',
      left: '90%',
      clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9937_xsmall.png' // Brentford
  },
  {
      name: 'Martinez',
      img: 'https://images.fotmob.com/image_resources/playerimages/268375.png',
      rating: '8.6',
      top: '90%',
      left: '50%',
      clubLogo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10252_xsmall.png' // Aston Villa
  }
];

teamOfWeekLines = [
  // الهجوم
  [this.teamOfWeek[0]], // Evanilson
  // الوسط الهجومي
  [this.teamOfWeek[1]], // Garnacho
  // الوسط
  [this.teamOfWeek[2], this.teamOfWeek[3], this.teamOfWeek[4], this.teamOfWeek[5]], // Schade, Tielemans, Palmer, Silva
  // الدفاع
  [this.teamOfWeek[6], this.teamOfWeek[7], this.teamOfWeek[8], this.teamOfWeek[9]], // Williams, Gvardiol, Murillo, Kayode
  // الحارس
  [this.teamOfWeek[10]] // Martinez
];

getBarColor(index: number): string {
  switch(index) {
    case 0: return '#2ecc40'; // المركز الأول أخضر
    case 1: return '#2ecc40'; // الثاني أخضر فاتح
    case 2: return '#2ecc40'; // الثالث أزرق
    case 3: return '#2ecc40'; // الرابع أزرق فاتح
    case 4: return '#2ecc40'; // الخامس بنفسجي
    case 5: return '#0057ff'; // السادس أزرق غامق
    case 17:
    case 18:
    case 19: return '#e74c3c'; // المراكز 18 و19 و20 أحمر
    default: return '#ccc';
  }
}

newsList = [
  {
    headline: "Football transfer rumours: Yoro regrets Man Utd move; Man City hijack Alexander-Arnold deal",
    source: "90min",
    time: "5 hours ago",
    img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_1915,h_1077,x_0,y_0/c_fill,w_912,h_516,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/90min_en_international_web/01jtra36cn97dnztb2f4.jpg"
  },
  {
    headline: "Premier League: 10 things to look out for this weekend",
    source: "The Guardian",
    time: "5 hours ago",
    img: "https://i.guim.co.uk/img/media/f9c49d94ddab4ae1d2d1055980d5c09fa98b3517/0_0_3349_2680/master/3349.jpg?width=460&quality=85&auto=format&fit=max&s=158650005eb937eb255a16b644a4bfe6"
  },
  {
    headline: "Borussia Dortmund Make Jadon Sancho Decision",
    source: "SI",
    time: "6 hours ago",
    img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_4074,h_2291,x_0,y_22/c_fill,w_912,h_516,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01j9menc8xc4vy1nxwn1.jpg"
  },
  {
    headline: "Papers: Newcastle eye Leipzig's Sesko as Isak replacement",
    source: "Sky Sports",
    time: "8 hours ago",
    img: "https://e1.365dm.com/25/03/1920x1080/skysports-paper-talk-brand-refresh_6852897.jpg?20250311094415"
  },
  {
    headline: "Haaland: Man City have lacked hunger this season",
    source: "FotMob",
    time: "8 hours ago",
    img: "https://images.performgroup.com/di/library/omnisport/4f/cd/erling-haaland_1mvpxgwcdzolh13x1aecthsk5h.jpg?t=-195384059&w=640&h=360"
  },
  {
    headline: "Real Madrid 'Actively Pursuing' Premier League's Most In-Demand Player",
    source: "SI",
    time: "9 hours ago",
    img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_4000,h_2250,x_0,y_64/c_fill,w_912,h_516,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01jtrb9wzhy1nw2m4z1y.jpg"
  },
  {
    headline: "Xavi Admits Desire to Manage in Premier League",
    source: "SI",
    time: "10 hours ago",
    img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_5500,h_3093,x_0,y_332/c_fill,w_912,h_516,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01jtr9mg46ag9btgqjnx.jpg"
  },
  {
    headline: "Staggering Statistic Highlights Arsenal Star's Fall From Grace This Season",
    source: "SI",
    time: "10 hours ago",
    img: "https://images2.minutemediacdn.com/image/upload/c_crop,w_2599,h_1461,x_700,y_447/c_fill,w_912,h_516,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/si/01jtr30az9s1eqbvdam9.jpg"
  }
];

topTeams = [
  {
    logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8456_xsmall.png',
    name: 'Manchester City',
    rating: '7.12'
  },
  {
    logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8650_xsmall.png',
    name: 'Liverpool',
    rating: '7.09'
  },
  {
    logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9825_xsmall.png',
    name: 'Arsenal',
    rating: '7.05'
  },
  {
    logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/8455_xsmall.png',
    name: 'Chelsea',
    rating: '7.02'
  },
  {
    logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/9937_xsmall.png',
    name: 'Brentford',
    rating: '7.00'
  },
  {
    logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10261_xsmall.png',
    name: 'Newcastle',
    rating: '6.98'
  },
  {
    logo: 'https://images.fotmob.com/image_resources/logo/teamlogo/10203_xsmall.png',
    name: 'Nottingham Forest',
    rating: '6.95'
  }
];

isMobile = false;

// constructor() {
//   this.checkScreenSize();
//   window.addEventListener('resize', this.checkScreenSize.bind(this));
// }
constructor(private _ScoreboardService:ScoreboardService ,public _AuthService:AuthService) {
  if (typeof window !== 'undefined') {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize.bind(this));
  }


}


checkScreenSize() {
  this.isMobile = window.matchMedia('(max-width: 768px)').matches;
}

}
