import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public searchQuery:any  = null;
  public artists: any;

    public albums: any;

  constructor(private _spotfyService:SpotifyService) { }

  ngOnInit(): void {
  }
  public searchArtists(){
    this._spotfyService.getAllArtists(this.searchQuery).subscribe( data => {this.artists = data.artists.items;})
  }
  

}
