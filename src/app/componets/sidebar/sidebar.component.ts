import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  users!: any[];
public userdetails:any;
logindetailes: any;
parsedetailes:any;

  constructor(public authservice:AuthService) { }

  ngOnInit(): void {
    
   this.userdetails = localStorage.getItem("logindetailes")
  this.parsedetailes = JSON.parse(this.userdetails)
   console.log(this.parsedetailes)
  }

  logOut(){
    localStorage.removeItem("logindetailes")
  }

}
