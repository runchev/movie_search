import { MovieComponent } from './components/movie/movie.components';
import { routing } from './app.routing';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './components/movies/movies.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule, JsonpModule} from  '@angular/http';

import {MovieService} from './services/movie.service';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, JsonpModule, FormsModule, routing ],
  declarations: [ AppComponent, MoviesComponent, MovieComponent ],
  bootstrap:    [ AppComponent ],
  providers: [MovieService]
})
export class AppModule { }
