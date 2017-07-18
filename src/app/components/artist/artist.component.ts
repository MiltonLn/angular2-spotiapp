import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html'
})
export class ArtistComponent implements OnInit {

  artist:any;
  tracks:any[];

  constructor( private _activatedRoute:ActivatedRoute,
               private _spotifyService:SpotifyService ) { }

  ngOnInit() {
    this._activatedRoute.params.map(
      params => params['id']
    ).subscribe(
      id => {
        this._spotifyService.getArtist( id ).subscribe( data => {
          this.artist = data;
        })

        this._spotifyService.getTopTracks( id ).subscribe( data => {
          this.tracks = data;
        })
      }
    );
  }

}
