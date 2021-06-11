import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detail-movie',
  templateUrl: 'detail.movie.page.html',
})

export class DetailMoviePage {
  movie = new Movie();
  private routeSub: Subscription;
  private id: number;

  constructor(private apiSvc: ApiService, private navCtrl: NavController, private router: Router, private route: ActivatedRoute) {}

  ionViewWillEnter() {

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.apiSvc.get(`api/movies/${this.id}`).subscribe((response: Movie) => {
      console.log(response);
      this.movie = response;
    });

  }
}