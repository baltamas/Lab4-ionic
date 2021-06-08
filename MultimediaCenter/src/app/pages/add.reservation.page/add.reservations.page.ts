import { Component, ViewEncapsulation } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Movie } from 'src/app/models/movie.model';
import { Reservation } from 'src/app/models/reservation.model';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-reservations',
  templateUrl: 'add.reservations.page.html',
})

export class AddReservationsPage{

  reservations = new Reservation();
  price;
  paid;
  moviesToAdd: Movie[];

  constructor(
    private apiSvc: ApiService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
  ) { }
  saveReservation() {
    this.apiSvc.post('api/Reservations', this.reservations).subscribe(
      () => {
        this.navCtrl.pop();
      },
      (err) => {
        let message = 'Validation error';
        const errorsArray = err?.error?.errors;
        if (errorsArray) {
          message = Object.values(errorsArray)[0] as string;
        } else {
          message = err.error;
        }

        this.alertCtrl
          .create({
            header: 'Error',
            message: message,
            buttons: ['Ok'],
          })
          .then((al) => al.present());
      }
    );
  }

  ngOnInit() {
    this.loadMovies();
  }

  addMovie(movie: Movie) {
    if (!this.reservations.movies) {
      this.reservations.movies = [];
    }

    this.reservations.movies.push(movie);

    if (!this.reservations.movieIds) {
      this.reservations.movieIds = [];
    }

    this.reservations.movieIds.push(movie.id)
    this.moviesToAdd = this.moviesToAdd.filter(m => m.id !== movie.id);
  }

  deleteMovie(movie: Movie) {
    this.reservations.movies = this.reservations.movies.filter(m => m.id !== movie.id);
    this.reservations.movieIds = this.reservations.movieIds.filter(id => id !== movie.id);
    this.moviesToAdd.push(movie);
  }

  private loadMovies() {
    this.apiSvc.get('api/Movies').subscribe((response: Array<Movie>) => {
      this.moviesToAdd = response;
    });
  }

  backToReservations(){
    this.navCtrl.pop();
  }

}