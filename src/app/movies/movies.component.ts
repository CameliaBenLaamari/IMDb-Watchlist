import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService]
})
export class MoviesComponent implements OnInit {

  movies: Array<Movie>;

  constructor(private _movieService: MovieService) { }

  ngOnInit() {
    this._movieService.getMovies().subscribe((response: any) => {
      console.log(response);
      this.movies = response;
    });
  }

}
