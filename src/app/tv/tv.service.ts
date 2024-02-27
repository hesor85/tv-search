import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TvService {

  constructor(private httpService: HttpClient) { }

  getTvShows(query: string) {
    return this.httpService.get<any>(`https://api.tvmaze.com/search/shows?q=${query}`);
  }
}
