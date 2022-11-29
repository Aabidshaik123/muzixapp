import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  public albums:any
  public favData: Array<any> = [];
  constructor(private _spotfyService:SpotifyService) { }

  ngOnInit(): void {
    this._spotfyService.getRecommendationAlbum().subscribe(data =>{this.albums = data.items})

    
  }

  addFav(album: any){
    console.log(album);
    this.favData.push(album);
    localStorage.setItem("favouriteRecData",JSON.stringify(this.favData));

  }

}
