import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../shared/service/Auth/Auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink ,RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  showNavbar = true;
  private lastScrollTop = 0;
  mobileMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const st = window.pageYOffset || document.documentElement.scrollTop;
    if (st > this.lastScrollTop && st > 80) {
      // Scroll Down
      this.showNavbar = false;
    } else {
      // Scroll Up
      this.showNavbar = true;
    }
    this.lastScrollTop = st <= 0 ? 0 : st;
  }
  constructor(public _AuthService:AuthService) { }
  isLogin : boolean = false;
  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if(this._AuthService.userData.getValue() != null) {
        this.isLogin = true;
      }
      else {
        this.isLogin = false;
      }
    })
  }
}
