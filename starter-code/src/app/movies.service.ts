import { Injectable } from '@angular/core';
import { Movie, movies } from './movies-data';

@Injectable()
export class MoviesService {
 
movies: Array<Movie> = movies;

  constructor() {};


  getMovies() {
    return this.movies;
  }

  getMovie(id:number) {
    let movieItem: Movie;

    this.movies.forEach((oneMovie) => {
      if (oneMovie.id === id) {
        movieItem = oneMovie;
      }
    });
    return movieItem;
  }
}
