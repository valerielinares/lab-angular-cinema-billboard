import { Component, OnInit } from '@angular/core';
import { Movie, movies } from '../movies-data';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {
  movies: Array<Movie> = movies;

  constructor(
    public myMovieServ: MoviesService
  ) { }

  ngOnInit() {
  }

  displayMoviesList() {
    this.myMovieServ.getMovies();
  }

}
