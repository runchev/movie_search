import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { appRoutigProviders } from '../../app.routing';
import { Component, OnInit } from '@angular/core';
@Component({
    moduleId:module.id,
    selector:'movie',
    templateUrl:'movie.component.html'
})
export class MovieComponent implements OnInit{
    movie:Object;
    constructor(private _router:ActivatedRoute, private _movieservice:MovieService){
    }
    ngOnInit(){
        this._router.params.subscribe((param)=>{
            let id = param['id'];
            this._movieservice.searchMovie(id).subscribe(res=>{
                this.movie=res;
            });
        })
    }
}