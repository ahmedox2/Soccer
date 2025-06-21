import { Component } from '@angular/core';
import { AuthService } from '../../../shared/service/Auth/Auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(private _AuthService:AuthService , private _Router:Router ){}

  isLoading:boolean = false;
  errmsg !:string;

  loginForm:FormGroup = new FormGroup({
    UserName : new FormControl(null,[Validators.required]),
    password : new FormControl(null,Validators.required,),
  })
  submitlogin(){this.isLoading = true;
    if(this.loginForm.valid){
      //connect api
      this._AuthService.signIn(this.loginForm.value).subscribe({
        next:(res)=>{
          this.isLoading = false;
          localStorage.setItem("token",res.token);
          this._AuthService.deCodeUserData();
          this._Router.navigate(["/Home"]);

        },
        error:(err) => {
          this.isLoading = false;
          this.errmsg = err.error.message;
        }
      });
    }
  }
}
