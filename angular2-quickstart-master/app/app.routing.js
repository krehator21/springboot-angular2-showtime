"use strict";
var router_1 = require("@angular/router");
var heroes_component_1 = require("./heroes.component");
var hero_detail_component_1 = require("./hero-detail.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/heroes',
        pathMatch: 'full',
    },
    {
        path: 'heroes',
        children: [
            {
                path: '',
                component: heroes_component_1.HeroesComponent,
                data: {
                    title: 'All heroes',
                    root: true
                }
            },
            {
                path: ':id',
                component: hero_detail_component_1.HeroDetailComponent,
                data: {
                    title: 'Hero detail'
                }
            }
        ]
    }
];
exports.appRoutingProviders = [];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map