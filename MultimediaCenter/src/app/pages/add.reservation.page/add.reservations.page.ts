import { Component, ViewEncapsulation } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { Reservation } from 'src/app/models/reservation.model';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add-reservations',
  templateUrl: 'add.reservations.page.html',
})

export class AddReservationsPage{

  reservation = new Reservation();

  constructor(private apiSvc: ApiService, private navCtrl: NavController, private alertCtrl: AlertController){

  }
  addReservation(){
    this.apiSvc.post('api/reservations', this.reservation).subscribe(() => {
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

  backToReservations(){
    this.navCtrl.pop();
  }

}