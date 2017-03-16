import { Component } from '@angular/core';
import {MovieService} from '../../services/movie.service';

@Component({
    moduleId:module.id,
    selector: 'movies',
    templateUrl:'movies.component.html',
})
export class MoviesComponent  {
    popularList : Array<Object>;
    theaterList: Array<Object>;
    searchString:string;
    searchedResults:Array<Object>;
    constructor(private _movieService:MovieService) {
       this._movieService.getInTheaters().subscribe(res=>{
           this.theaterList=res.results;
        });
       this._movieService.getPopular().subscribe(res=>{
           this.popularList=res.results;
        });
    }
    searchMovies(){
        this._movieService.searchMovies(this.searchString).subscribe(res=>{
            this.searchedResults=res.results;
            console.log(this.searchString);
        });
    }

}
