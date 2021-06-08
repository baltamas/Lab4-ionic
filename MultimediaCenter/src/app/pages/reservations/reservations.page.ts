import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { Reservation } from 'src/app/models/reservation.model';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-reservations',
  templateUrl: 'reservations.page.html',
  styleUrls: ['reservations.page.scss'],
  encapsulation:ViewEncapsulation.None,
})

export class ReservationsPage{

  reservations: Reservation;
  
  constructor(private apiSvc: ApiService, private router: Router, ){


  }
  
  ionViewWillEnter(){
    this.loadReservations();
  }

  goToAddReservation() {
    this.router.navigateByUrl('reservations/add');
  }

  deleteReservation(reservation:Reservation){
    this.apiSvc.delete(`api/reservations/${reservation.id}`).subscribe(() => {
      this.loadReservations();
    })
    }

    deleteMovie(movie:Movie){
      this.apiSvc.delete(`api/Movies/${movie.id}`).subscribe(() => {
        this.loadReservations();
      })
      }
  

  private loadReservations(){
    this.apiSvc.get('api/reservations').subscribe((response: Reservation) => {
      this.reservations=response; 
      console.log(response);
    });
  }

}

