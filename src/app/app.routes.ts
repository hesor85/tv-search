import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TvComponent } from './tv/tv.component';
import { DetailsComponent } from './tv/details/details.component';

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {
    path: 'tv',
    component: TvComponent,
    children: [
      {path: 'details/:id', component: DetailsComponent}
    ]},
  {path: 'movies', component: MoviesComponent},
];
