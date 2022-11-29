import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public artistId:any =null;
  public artist:any;
  public albums:any;
  
  public favData:Array<any> = [];


  constructor(private _activatedRoots:ActivatedRoute ,
    private _spotifyService:SpotifyService,
    private _router:Router) { }

  ngOnInit(): void {
    this._activatedRoots.paramMap.subscribe((paramMap:ParamMap) =>{
      this.artistId = paramMap.get('id')
          } );
        //get artist from service
      
          this._spotifyService.getArtist(this.artistId).subscribe(data => {
            this.artist = data;
          });
      
      //get all albums of a artist 
      
      this._spotifyService.getAllAlbums(this.artistId).subscribe(data =>{
        this.albums  = data.items;
      })
      
      
  }
  public backToArtist(){
    this._router.navigate([`/dashboard`])
    }

    addFav(album: any){
      console.log(album);
      this.favData.push(album);
    localStorage.setItem("favouriteData",JSON.stringify(this.favData));
     console.log(this.favData) 
    }

}
