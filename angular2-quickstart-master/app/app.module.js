"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var angular2_polymer_1 = require("@vaadin/angular2-polymer");
var app_component_1 = require("./app.component");
var hero_service_1 = require("./hero.service");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var app_routing_1 = require("./app.routing");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            angular2_polymer_1.PolymerElement('app-header-layout'),
            angular2_polymer_1.PolymerElement('app-header'),
            angular2_polymer_1.PolymerElement('app-toolbar'),
            angular2_polymer_1.PolymerElement('paper-icon-button'),
            heroes_component_1.HeroesComponent,
            angular2_polymer_1.PolymerElement('vaadin-grid'),
            hero_detail_component_1.HeroDetailComponent,
            angular2_polymer_1.PolymerElement('paper-input'),
            angular2_polymer_1.PolymerElement('vaadin-date-picker')
        ],
        providers: [
            hero_service_1.HeroService,
            app_routing_1.appRoutingProviders
        ],
        bootstrap: [app_component_1.AppComponent],
        schemas: [core_1.CUSTOM_ELEMENTS_SCHEMA]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map