import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _getUrl = 'http://localhost:8080/api/movies';
  constructor(private _http: HttpClient) { }

  getMovies() {
    return this._http.get(this._getUrl);
  }
}
