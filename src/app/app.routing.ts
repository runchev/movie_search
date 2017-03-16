import { MovieComponent } from './components/movie/movie.components';
import { MoviesComponent } from './components/movies/movies.component';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes =[
    {
        path:'',
        component:MoviesComponent
    },
    {
        path:'movie/:id',
        component:MovieComponent
    }
];

export const appRoutigProviders:any[]=[];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);