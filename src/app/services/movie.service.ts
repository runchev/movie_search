import {Injectable} from '@angular/core';
import {Jsonp} from '@angular/http';
import 'rxjs/Rx';

@Injectable()

export class MovieService{
    apiKey:string;
    constructor(private _jsonp:Jsonp) {
        this.apiKey='b651e2d17427f80b0536324ff91c6ca1';
    }
    getPopular(){
       return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this.apiKey).map(res=>res.json());
    }
    getInTheaters(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-03-10&primary_release_date.lte=2017-03-22&api_key='+this.apiKey).map(res=>res.json()); 
    }
    searchMovies(searchString:string){
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchString+'&sort_by=popularity.desc&api_key='+this.apiKey).map(res=>res.json());
    }
    searchMovie(id:string){
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this.apiKey).map(res=>res.json());
    }   
}

