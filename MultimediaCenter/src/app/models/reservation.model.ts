import { Movie } from "./movie.model";

export class Reservation{

    id: number;
    movies: Movie[];
    price: number;
    paid: boolean;
    movieIds?: number[];
}