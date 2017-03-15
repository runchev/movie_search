import { MovieComponent } from './components/movie/movie.component';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, MovieComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
