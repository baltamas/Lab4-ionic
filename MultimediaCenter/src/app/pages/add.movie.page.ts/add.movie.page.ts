import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';
import { MoviesPage } from '../movies/movies.page';

@Component({
  selector: 'app-add-movie',
  templateUrl: 'add.movie.page.html',
})

export class AddMoviePage{

  movie = new Movie();

  constructor(private apiSvc: ApiService, private navCtrl: NavController){

  }
  addMovie(){
    this.apiSvc.post('api/Movies', this.movie).subscribe(() => {
      this.navCtrl.pop();
    })
  }

  backToMovies(){
    this.navCtrl.pop();
  }

}