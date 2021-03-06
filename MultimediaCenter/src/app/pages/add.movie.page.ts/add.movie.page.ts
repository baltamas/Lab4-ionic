import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';
import { MoviesPage } from '../movies/movies.page';

@Component({
  selector: 'app-add-movie',
  templateUrl: 'add.movie.page.html',
})

export class AddMoviePage{

  movie = new Movie();

  constructor(private apiSvc: ApiService, private navCtrl: NavController, private alertCtrl: AlertController){

  }
  addMovie(){
    this.apiSvc.post('api/Movies', this.movie).subscribe(() => {
      this.navCtrl.pop();
    },

    (err)=> 
    {
      let message = 'Error occured';
      const errorsArray =err?.error.errors;
      if(errorsArray){
        message = Object.values(errorsArray)[0] as string;
      }
      this.alertCtrl
      .create({
        header:'Error',
        message: message,
        buttons:['Ok'],
      })
      .then((al) => al.present());
    }
    
    );
  }

  backToMovies(){
    this.navCtrl.pop();
  }

}