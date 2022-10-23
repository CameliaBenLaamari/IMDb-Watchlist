import { Byte } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { MoviesComponent } from '../movies/movies.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [MovieService, MatDialogRef]
})
export class HomeComponent implements OnInit {

  public movies: Array<Movie>;
  public page: Byte;
  public currentMovie: Movie;
  public firstPage: Boolean;
  public lastPage: Boolean;

  constructor(private _movieService: MovieService,
    public dialogRef: MatDialogRef<HomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Movie,) { }

  ngOnInit() {
    this.page = 0;
    this.firstPage = true;
    this._movieService.getMovies().subscribe((response: any) => {
      console.log(response);
      this.movies = response;
      this.lastPage = (this.movies.length == 0);
      this.currentMovie = this.movies[this.page];
    });
  }

  nextPage() {
    if (!this.lastPage) {
      this.page += 1;
      this.firstPage = false;
      this.currentMovie = this.movies[this.page];
    }
    this.lastPage = (this.page == this.movies.length - 1);
  }

  previousPage() {
    if (!this.firstPage) {
      this.page -= 1;
      this.lastPage = false;
      this.currentMovie = this.movies[this.page];
    }
    this.firstPage = (this.page == 0);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
