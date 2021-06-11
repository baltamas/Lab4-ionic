import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Movie } from 'src/app/models/movie.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-movies',
  templateUrl: 'movies.page.html',
  styleUrls: ['movies.page.scss'],
  encapsulation:ViewEncapsulation.None,
})

export class MoviesPage{
  
  movies: Array<Movie>;
  
  constructor(private apiSvc: ApiService, private router: Router){}
  
  ionViewWillEnter(){
    this.loadMovies();
  }

  goToAddMovie() { 
    
    this.router.navigateByUrl('movies/add');
  }

  goToUpdateMovie(movie: Movie){
    this.router.navigateByUrl(`movies/update/${movie.id}`);
  }
  
  deleteMovie(movie:Movie){
    this.apiSvc.delete(`api/movies/${movie.id}`).subscribe(() => {
      this.loadMovies();
    })
    }
  
    goToMovieDetails(movie: Movie) {
      this.router.navigateByUrl(`movies/${movie.id}`);
    }
  
    detailMovie(movie: Movie) {}

  private loadMovies(){
    this.apiSvc.get('api/Movies').subscribe((response: Array<Movie>) => {
      this.movies=response; 
    });
  }

}

