import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/service/Auth/Auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
 constructor(private _AuthService:AuthService , private _Router:Router ){}
  errmsg !:string;
  isLoading:boolean = false;
  registerForm:FormGroup = new FormGroup({
    DisplayName : new FormControl(null ,[Validators.required ,Validators.minLength(3),Validators.maxLength(16)]),
    UserName : new FormControl(null ,[Validators.required ,Validators.minLength(3),Validators.maxLength(16)]),
    Password : new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/)]),
    rePassword : new FormControl(null,Validators.required,),
  },this.checkRepasswordMatch)

  checkRepasswordMatch(g:AbstractControl) {
    if( g.get('Password')?.value === g.get("rePassword")?.value)
      {
        return null;
      }
      else{
        g.get('rePassword')?.setErrors({mismatch:true})
        return {mismatch:true};
      }
  }

  submitRegister(){
    this.isLoading = true;
    if(this.registerForm.valid){
      //connect api
      this._AuthService.signUp(this.registerForm.value).subscribe({
        next:(res)=>{
          this.isLoading = false;
          console.log(res);
          this._Router.navigate(["/Home"]);
          localStorage.setItem("token",res.token);
          this._AuthService.deCodeUserData();
        },
        error:(err) => {
          console.log(err);
          this.isLoading = false;
          this.errmsg = err.error.message;
        }
      });
    }
  }
}
