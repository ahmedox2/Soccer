import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/inc/navbar/navbar.component';
import { FooterComponent } from './core/inc/footer/footer.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet , NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Soccer IQ';



// {
//     document.getElementById("logstutes").innerHTML =
//     `
//      <li class="nav-item">
//                             <a class="nav-link active" href="#home">home </a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#category">Category</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#trending-news">Trending News </a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#clup-rancing">Clup Rancing</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#sports-article">Sports Article </a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#contact"> Contact </a>
//                         </li>
//     <li class="nav-item dropdown ps-5">
//     <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
//         data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//         SITTING
//     </a>
//     <div class="dropdown-menu" aria-labelledby="navbarDropdown">
//         <a class="dropdown-item" href="#">My Profile</a>
//         <!-- <a class="dropdown-item" href="#"></a> -->
//         <div class="dropdown-divider"></div>
//         <a class="dropdown-item" href="#">Log Out</a>
//     </div>
//     </li>
//     `;
// }
// else{
//     document.getElementById("logstutes").innerHTML =`
//      <li class="nav-item">
//                             <a class="nav-link active" href="#home">home </a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#category">Category</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#trending-news">Trending News </a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#clup-rancing">Clup Rancing</a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#sports-article">Sports Article </a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="#contact"> Contact </a>
//                         </li>
//                             <li class="nav-item">
//                             <a class="nav-link" href="login/index.html"> Login </a>
//                         </li>
//                         <li class="nav-item">
//                             <a class="nav-link" href="Register/index.html"> Register </a>
//                         </li>
//     `
// }
}
