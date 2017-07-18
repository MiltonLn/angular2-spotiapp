import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any[] = [];
  searchUrl:string = "https://api.spotify.com/v1/search";
  artistUrl:string = "https://api.spotify.com/v1/artists/";

  constructor( private http:Http ) {

  }

  getArtists( term:string ) {
    let query = `?q=${ term }&type=artist`;
    let url = this.searchUrl + query;

    return this.http.get( url )
           .map( response => {

             let data = response.json();
             this.artists = data.artists.items;

           });
  }

  getArtist( id:string ) {
    let url = this.artistUrl + id;

    return this.http.get( url )
           .map( response => {

             let data = response.json();
             return data;

           });
  }

  getTopTracks( id:string ) {
    let query = `${ id }/top-tracks?country=US`;
    let url = this.artistUrl + query;

    return this.http.get( url )
           .map( response => {

             let data = response.json();
             return data.tracks;

           });
  }
}
