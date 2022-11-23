import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  private authorizationKey = 'Bearer BQB25ST9PxoGNahSLaW_DPT47nGTHUwCoNxWcdJlUAF1J9TfF57RJ4NcC9w2rnTBnnkC7rWhtIcXTubgOGJcKWMLWwuhvUeYrMJFtLYX4xMo7vIpg5l5eVSOZ5cx8DiU7HoxFRdNLDZr7_O-1G55WA8Pa7d_1s877kDIC3UqXdAHkJyH2WunFLCE1kV5voyq29M';
  
   private httpOptions  ={
    headers: new HttpHeaders(
       {
        'Accept' : 'application/json' ,
        'Content-Type' : 'application/json',
        'Authorization': this.authorizationKey
       }
     )
    };

  
  constructor(private _httpClient:HttpClient) { }
   //get all artists
   public getAllArtists(searchQuery: any):Observable<any>{
     let artistUrl= `https://api.spotify.com/v1/search?q=${searchQuery}&type=artist`; //`https://api.spotify.com/v1/search?q=&type=artist`;
     return this._httpClient.get<any>(artistUrl, this.httpOptions);
    }

    //get single artist
    public getArtist(artistId: any):Observable<any>{
      let artistUrl = `https://api.spotify.com/v1/artists/${artistId}`;
      return this._httpClient.get<any>(artistUrl, this.httpOptions);
    }

    //get all albums
    public getAllAlbums(artistId: any):Observable<any>{
      let albumUrl =`https://api.spotify.com/v1/artists/${artistId}/albums`;
      return this._httpClient.get<any>(albumUrl, this.httpOptions);
    }

    //get a single album
    public getAlbum(albumId: any):Observable<any>{
      let albumUrl=`https://api.spotify.com/v1/albums/${albumId}`;
      return this._httpClient.get<any>(albumUrl, this.httpOptions);

    }
//get all tracks
    public getAllTracks(albumId: any):Observable<any>{
      let tracksurl=`https://api.spotify.com/v1/albums/${albumId}/tracks`;
      return this._httpClient.get<any>(tracksurl, this.httpOptions);
 
    }

}
