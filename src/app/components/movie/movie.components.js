"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var router_1 = require('@angular/router');
var movie_service_1 = require('../../services/movie.service');
var core_1 = require('@angular/core');
var MovieComponent = (function () {
    function MovieComponent(_router, _movieservice) {
        this._router = _router;
        this._movieservice = _movieservice;
    }
    MovieComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._router.params.subscribe(function (param) {
            var id = param['id'];
            _this._movieservice.searchMovie(id).subscribe(function (res) {
                _this.movie = res;
            });
        });
    };
    MovieComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'movie',
            templateUrl: 'movie.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, movie_service_1.MovieService])
    ], MovieComponent);
    return MovieComponent;
}());
exports.MovieComponent = MovieComponent;
//# sourceMappingURL=movie.components.js.map