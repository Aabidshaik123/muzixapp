import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  public x:any;
 public y:any
 public m:any;
 public n:any;
  constructor() { }

  ngOnInit(): void {

    this.x = localStorage.getItem("favouriteData");
    this.m = localStorage.getItem("favouriteRecData");
    this.n = JSON.parse(this.m)
    this.y = JSON.parse(this.x); 
    console.log(this.y)
    
  
  }



}
