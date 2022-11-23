import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  public  albumId:any ;
  public album: any;
  public tracks: any;

  constructor(private _activatedRoute:ActivatedRoute,
    private _spotifyservice:SpotifyService,
    private _router:Router) { }

  ngOnInit(): void {
       //get album id from url
       this._activatedRoute.paramMap.subscribe((paramMap:ParamMap) =>{
        this.albumId = paramMap.get('id')
      });
      
  //get an album from service
  this._spotifyservice.getAlbum(this.albumId).subscribe(data => {
    this.album = data;
  });
  
  
  //get all tracks from album
  this._spotifyservice.getAllTracks(this.albumId).subscribe(data => {
    this.tracks = data.items;
  });
   
  }
  public backToArtist(){
    this._router.navigate([`/artists/${this.album.artists[0].id}`])
    }

    addFav(){
      this._spotifyservice.getAllTracks(this.albumId).subscribe(data => {
        console.log(this.albumId)
      });
      
    }
}
