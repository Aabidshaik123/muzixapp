import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  public albums:any
  constructor(private _spotfyService:SpotifyService) { }

  ngOnInit(): void {
    this._spotfyService.getRecommendationAlbum().subscribe(data =>{this.albums = data.items})
  }

}
