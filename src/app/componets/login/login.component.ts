import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'

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
   
  constructor(private fb:FormBuilder) { }

  

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
      console.log(this.loginForm.value)

    }else{
      
      alert("Form is Invalid")

    }
  }

  

}


