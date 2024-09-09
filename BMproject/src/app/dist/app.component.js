"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppComponent = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var start_component_1 = require("./start/start.component");
var forum_component_1 = require("./forum/forum.component");
var nav_component_1 = require("./nav/nav.component");
var footer_component_1 = require("./footer/footer.component");
var application_component_1 = require("./application/application.component");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'BMproject';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            standalone: true,
            imports: [router_1.RouterOutlet, start_component_1.StartComponent, forum_component_1.ForumComponent, nav_component_1.NavComponent, footer_component_1.FooterComponent, application_component_1.ApplicationComponent],
            templateUrl: './app.component.html',
            styleUrl: './app.component.scss'
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
