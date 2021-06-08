import { Component } from "@angular/core";
import { ActivatedRoute, NavigationExtras, Router } from "@angular/router";
import { IonDatetime, NavController } from "@ionic/angular";
import { Movie } from "src/app/models/movie.model";
import { ApiService } from "src/app/services/api.service";

@Component({
    selector: 'app-update-movie',
    templateUrl: 'update.movie.page.html',
  })
  
  export class UpdateMoviePage{

    movie = new Movie();

    constructor(private route: ActivatedRoute, private apiSvc: ApiService, private navCtrl: NavController, private router: Router){
      this.route.queryParams.subscribe(params => {
        if(params && params.special){
          this.movie = JSON.parse(params.special);
        }
      })
    }

    updateMovie(movie: Movie){
      this.apiSvc.put(`api/movies/${movie.id}`, movie).subscribe(() => {
        this.router.navigateByUrl("tasks");
      });
    }

  }