import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder) { }

  type:string="password";
  isText: boolean=false;
  eyeIcon:string="fa-eye-slash";
  signupForm!: FormGroup;


  ngOnInit(): void {

    this.signupForm = this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      email:['',Validators.required],
      username:['',Validators.required],
      password:['',Validators.required]
     })
  }

  hideShowPass(){
    this.isText =!this.isText;
    this.isText?this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
    this.isText?this.type="text":this.type="password";

  }

  onSignUp(){
    if(this.signupForm.valid){
      console.log(this.signupForm.value);
    }else{
      alert("Form is Invalid")
    }
  }

}
