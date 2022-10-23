import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers: [MovieService, MatDialog]
})
export class MoviesComponent implements OnInit {

  public movies: Array<Movie>;
  public pageSlice: Array<Movie>;
  public selected: Boolean = false;

  constructor(private _movieService: MovieService, public dialog: MatDialog) { }

  ngOnInit() {
    this._movieService.getMovies().subscribe((response: any) => {
      console.log(response);
      this.movies = response;
      console.log(this.movies);
      this.pageSlice = this.movies.slice(0, 10);
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.movies.length)
      endIndex = this.movies.length;
    this.pageSlice = this.movies.slice(startIndex, endIndex);
  }

}
