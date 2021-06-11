import { Component } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { IonDatetime, NavController } from "@ionic/angular";
import { Movie } from "src/app/models/movie.model";
import { Subscription } from 'rxjs';
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-update-movie',
    templateUrl: 'update.movie.page.html',
  })
  
  export class UpdateMoviePage{

    movie = new Movie();
    private routeSub: Subscription;
    private id: number;
  
    constructor(private apiSvc: ApiService, private route: ActivatedRoute, private navCtrl: NavController, private router: Router) {}
  
    ionViewWillEnter() {
  
      this.routeSub = this.route.params.subscribe(params => {
        this.id = params.id;
      });
  
      this.apiSvc.get(`api/movies/${this.id}`).subscribe((response: Movie) => {
        console.log(response);
        this.movie = response;
      });
  
    }
  
    updateMovie(movie: Movie) {
      console.log(movie);
      this.apiSvc.put(`api/movies/${this.id}`, movie).subscribe(() => {
        this.router.navigateByUrl('movies');
      });
    }
  }