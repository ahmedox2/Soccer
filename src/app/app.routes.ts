import { Routes } from '@angular/router';
import { HomeComponent } from './core/pages/home/home.component';
import { LoginComponent } from './core/pages/login/login.component';
import { RegisterComponent } from './core/pages/register/register.component';
import { Page404Component } from './core/inc/page404/page404.component';
import { NewsComponent } from './core/pages/news/news.component';
import { ClubComponent } from './core/pages/club/club.component';
import { LeagueComponent } from './core/pages/League/League.component';
import { PlayerStatesComponent } from './core/pages/player-states/player-states.component';
import { SquadComponent } from './core/pages/squad/squad.component';
import { StatsComponent } from './core/pages/stats/stats.component';
import { ScorebordComponent } from './core/pages/scorebord/scorebord.component';
import { TransfersComponent } from './core/pages/transfers/transfers.component';


export const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path: "Home", component: HomeComponent },
  {path: "register",component:RegisterComponent},
  {path: "login",component:LoginComponent},
  {path: "news",component:NewsComponent},
  {path: "club",component:ClubComponent},
  {path: "League",component:LeagueComponent , children: [
    {path: "Scoreboard",component:ScorebordComponent},
    {path: "Stats",component:StatsComponent},
    {path: "Transfers",component:TransfersComponent}
  ]},
  {path: "player-states/:id",component:PlayerStatesComponent},
  {path: "squad/:id",component:SquadComponent},


  {path:"**",component: Page404Component}
];
