import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddMoviePage } from './pages/add.movie.page.ts/add.movie.page';
import { AddReservationsPage } from './pages/add.reservation.page/add.reservations.page';
import { DetailMoviePage } from './pages/detail.movie/detail.movie.page';
import { LoginPage } from './pages/login/login.page';
import { MoviesPage } from './pages/movies/movies.page';
import { ReservationsPage } from './pages/reservations/reservations.page';
import { UpdateMoviePage } from './pages/update.movie.page/update.movie.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPage,
  },
  {
    path: 'movies',
    component: MoviesPage,
  },
  {
    path: 'reservations',
    component: ReservationsPage,
  },
  {
    path: 'movies/add',
    component: AddMoviePage,
  },
  {
    path: 'movies/update/:id',
    component: UpdateMoviePage,
  },
  {
    path: 'movies/:id',
    component: DetailMoviePage,
  },
  {
    path: 'reservations/add',
    component: AddReservationsPage,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
