import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SpotifyService {

  artists:any[] = [];
  searchUrl:string = "https://api.spotify.com/v1/search";
  artistUrl:string = "https://api.spotify.com/v1/artists/";
  headers = new Headers();

  constructor( private http:Http ) {
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('Authorization',
                        'Bearer BQAiBcORqStROnMTz08Dvpe4ntTsuYSWERU9Be37blze6_ngEAM0FPwdsE9nQt1oK-IZeKS2HeWGDn-x0G9xnsgo8RyLBdmXdbW_ze3mC8bhx3GHaVTfOPE6ipSwnnZIj5KTK6_Q');
  }

  getArtists( term:string ) {
    let query = `?q=${ term }&type=artist`;
    let url = this.searchUrl + query;
    let headers = this.headers;

    return this.http.get( url, { headers } )
           .map( response => {

             let data = response.json();
             this.artists = data.artists.items;

           });
  }

  getArtist( id:string ) {
    let url = this.artistUrl + id;
    let headers = this.headers;

    return this.http.get( url, { headers } )
           .map( response => {

             let data = response.json();
             return data;

           });
  }

  getTopTracks( id:string ) {
    let query = `${ id }/top-tracks?country=US`;
    let url = this.artistUrl + query;
    let headers = this.headers;

    return this.http.get( url, { headers } )
           .map( response => {

             let data = response.json();
             return data.tracks;

           });
  }
}
