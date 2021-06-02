import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-reservations',
  templateUrl: 'reservation.page.html',

})

export class ReservationPage{

    reservation;

    constructor(private apiSvc: ApiService){

    }

    ionViewWillEnter(){
        this.apiSvc.get('api/Reservations').subscribe((response)=>{
        this.reservation = response;
    });

}
}