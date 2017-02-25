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
var AppComponent = (function () {
    function AppComponent(_route, _router) {
        this._route = _route;
        this._router = _router;
        this.title = '';
        this.isInChildView = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._routerSubscription = this._router.events.subscribe(function (event) {
            if (event instanceof router_1.NavigationEnd) {
                var route = _this._route.snapshot;
                while (route.firstChild) {
                    route = route.firstChild;
                }
                _this.title = route.data['title'];
                _this.isInChildView = !route.data['root'];
            }
        });
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this._routerSubscription.unsubscribe();
    };
    AppComponent.prototype.goBack = function () {
        this._router.navigate(['/heroes']);
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        template: "\n    <app-header-layout has-scrolling-region>\n      <app-header fixed>\n        <app-toolbar [class.raised]=\"isInChildView\">\n          <paper-icon-button icon=\"arrow-back\" *ngIf=\"isInChildView\" (click)=\"goBack()\"></paper-icon-button>\n          <div title spacer>{{title}}</div>\n        </app-toolbar>\n      </app-header>\n      <router-outlet></router-outlet>\n    </app-header-layout>\n  ",
        styles: ["\n    app-toolbar {\n      background: var(--primary-color);\n      color: var(--dark-theme-text-color);\n    }\n\n    app-toolbar.raised {\n      @apply(--shadow-elevation-4dp);\n    }\n\n    paper-icon-button {\n      position: absolute;\n      top: 12px;\n      left: 8px;\n    }\n  "]
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map