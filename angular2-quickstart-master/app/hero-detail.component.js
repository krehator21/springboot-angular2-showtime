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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_service_1 = require("./hero.service");
var HeroDetailComponent = (function () {
    function HeroDetailComponent(_route, _heroService) {
        this._route = _route;
        this._heroService = _heroService;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routeParamsSubscription = this._route.params.subscribe(function (params) {
            var id = +params['id']; // (+) converts string 'id' to a number
            _this._heroService.getHero(id).then(function (hero) { return _this.hero = hero; });
        });
    };
    HeroDetailComponent.prototype.ngOnDestroy = function () {
        this._routeParamsSubscription.unsubscribe();
    };
    return HeroDetailComponent;
}());
HeroDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-hero-detail',
        template: "\n    <div *ngIf=\"hero\">\n      <paper-input label=\"Name\" [(value)]=\"hero.name\"></paper-input>\n      <vaadin-date-picker label=\"Birthday\" [(value)]=\"hero.birthday\"></vaadin-date-picker>\n    </div>\n  ",
        styles: ["\n    :host {\n      display: block;\n      padding: 16px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        hero_service_1.HeroService])
], HeroDetailComponent);
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=hero-detail.component.js.map