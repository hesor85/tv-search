import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { TvService } from './tv.service';
import { NgForOf } from '@angular/common';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@Component({
  selector: 'app-tv',
  standalone: true,
  imports: [RouterOutlet, SearchResultComponent, SearchBarComponent],
  templateUrl: './tv.component.html',
  styleUrl: './tv.component.css'
})
export class TvComponent {
  tvShows = [];

  constructor(private tvService: TvService) { }

  getTvShows(query: string) {
    this.tvService.getTvShows(query).subscribe((result) => {
      this.tvShows = result;
    });
  }


}
