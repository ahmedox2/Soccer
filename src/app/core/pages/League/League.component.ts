import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet ,RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-League',
  standalone: true,
  imports: [CommonModule , RouterOutlet , RouterLinkActive , RouterLink],
  templateUrl: './League.component.html',
  styleUrl: './League.component.scss'
})
export class LeagueComponent {

}
