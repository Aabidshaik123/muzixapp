import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

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

      this.auth.signUp(this.signupForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message);
          this.signupForm.reset();
          this.router.navigate(['login']);
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
