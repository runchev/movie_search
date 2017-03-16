"use strict";
var movie_components_1 = require('./components/movie/movie.components');
var movies_component_1 = require('./components/movies/movies.component');
var router_1 = require('@angular/router');
var appRoutes = [
    {
        path: '',
        component: movies_component_1.MoviesComponent
    },
    {
        path: 'movie/:id',
        component: movie_components_1.MovieComponent
    }
];
exports.appRoutigProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map