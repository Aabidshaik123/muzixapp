import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { __values } from 'tslib';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  input: any;
  type:string="password";
  isText: boolean=false;
  eyeIcon:string="fa-eye-slash";
  loginForm!: FormGroup;

 
   
  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

  

  ngOnInit(): void {
   this.loginForm = this.fb.group({
    username:['',Validators.required],
    password:['',Validators.required]
   })
  }

  hideShowPass(){
    this.isText =!this.isText;
    this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";

  }

  onLogin(){
    if(this.loginForm.valid){
    
    
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.router.navigate(['recommanded']);
          console.log(this.loginForm.value)
          localStorage.setItem("logindetailes",JSON.stringify(this.loginForm.value))
        },
        error:(err)=>{
          alert(err?.error.message)
        }
      })

    }else{
      
      alert("Form is Invalid")

    }
  }

  

}

