(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_table_container_table_container_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/table-container/table-container.component */ "./src/app/components/table-container/table-container.component.ts");
/* harmony import */ var _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/rules/rules.component */ "./src/app/components/rules/rules.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");








var routes = [
    {
        path: "TexasCheatum",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: "register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_7__["RegisterComponent"]
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: "table",
        component: _components_table_container_table_container_component__WEBPACK_IMPORTED_MODULE_5__["TableContainerComponent"]
    },
    {
        path: "rules",
        component: _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_6__["RulesComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "div {\r\n    text-align: center;\r\n    margin-top: 150px;\r\n}\r\n\r\nh1 {\r\n    color: whitesmoke;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTUwcHg7XHJcbn1cclxuXHJcbmgxIHtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n  <router-outlet></router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Texas Cheatum';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_google_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-google-charts */ "./node_modules/angular-google-charts/fesm5/angular-google-charts.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_table_container_table_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/table-container/table-container.component */ "./src/app/components/table-container/table-container.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rules/rules.component */ "./src/app/components/rules/rules.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _components_gameplay_gameplay_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/gameplay/gameplay.component */ "./src/app/components/gameplay/gameplay.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                _components_table_container_table_container_component__WEBPACK_IMPORTED_MODULE_8__["TableContainerComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__["RulesComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_12__["RegisterComponent"],
                _components_gameplay_gameplay_component__WEBPACK_IMPORTED_MODULE_13__["GameplayComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular_google_charts__WEBPACK_IMPORTED_MODULE_5__["GoogleChartsModule"].forRoot()
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/gameplay/gameplay.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/gameplay/gameplay.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZXBsYXkvZ2FtZXBsYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/gameplay/gameplay.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/gameplay/gameplay.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>Current Bet: {{status.minimum}}, Total Pot: {{status.pot}}</h4>\r\n<div class=\"container justify-content-center\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"postFlop\" class=\"col-lg-4\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-6\">\r\n          <form class=\"form-group\" (ngSubmit)=\"checking()\" method=\"POST\">\r\n            <button class=\"btn btn-outline-light\">Check</button>\r\n          </form>\r\n        </div>\r\n\r\n        <div class=\"col-lg-6\">\r\n          <form class=\"form-group\" (ngSubmit)=\"betting()\" method=\"POST\">\r\n            <input type=\"number\" name=\"bet\" [(ngModel)]=\"betAmount\" #bet=\"ngModel\" min=\"500\" step=\"25\" placeholder=\"Bet Amount\" required><br>\r\n            <button class=\"btn btn-outline-light\">Bet</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n      <div class=\"col-lg-3\">\r\n        <form class=\"form-group\" (ngSubmit)=\"calling()\" method=\"POST\">\r\n          <button class=\"btn btn-outline-light\">Call</button>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"col-lg-3\">\r\n        <form class=\"form-group\" (ngSubmit)=\"raising()\" method=\"POST\">\r\n          <input type=\"number\" name=\"raise\" [(ngModel)]=\"raiseAmount\" #raise=\"ngModel\" min=\"500\" step=\"25\" placeholder=\"Raise Amount\" required><br>\r\n          <button class=\"btn btn-outline-light\">Raise</button>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"col-lg-2\">\r\n        <form class=\"form-group\" (ngSubmit)=\"folding()\" method=\"POST\">\r\n          <button class=\"btn btn-outline-light\">Fold</button>\r\n        </form>\r\n      </div>\r\n    \r\n  </div>\r\n</div>\r\n<br>\r\n<h4>Player Balance: {{status.balance}}</h4>"

/***/ }),

/***/ "./src/app/components/gameplay/gameplay.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/gameplay/gameplay.component.ts ***!
  \***********************************************************/
/*! exports provided: GameplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameplayComponent", function() { return GameplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var rxjs_observable_IntervalObservable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/observable/IntervalObservable */ "./node_modules/rxjs-compat/_esm5/observable/IntervalObservable.js");
/* harmony import */ var rxjs_add_operator_takeWhile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/takeWhile */ "./node_modules/rxjs-compat/_esm5/add/operator/takeWhile.js");





var GameplayComponent = /** @class */ (function () {
    function GameplayComponent(gameServ) {
        this.gameServ = gameServ;
        this.status = {};
        this.alive = true;
    }
    GameplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        rxjs_observable_IntervalObservable__WEBPACK_IMPORTED_MODULE_3__["IntervalObservable"].create(2500).takeWhile(function () { return _this.alive; }).subscribe(function () {
            _this.gameServ.whosTurnIsItAnyways().subscribe(function (data) {
                console.log(_this.status);
                _this.status.pot = data.pot;
                _this.status.balance = data.balance;
                _this.status.minimum = data.minimum;
            });
        });
    };
    GameplayComponent.prototype.ngOnDestroy = function () {
        this.alive = false;
    };
    GameplayComponent.prototype.checking = function () {
        console.log("inside the checking method of gameplay.component");
        this.action = "check";
        this.gameServ.checking(this.action).subscribe();
    };
    GameplayComponent.prototype.betting = function () {
        console.log("inside the betting method of gameplay.component");
        this.action = "bet";
        this.gameServ.betting(this.betAmount, this.action).subscribe();
        this.betAmount = null;
    };
    GameplayComponent.prototype.calling = function () {
        console.log("inside the calling method of gameplay.component");
        this.action = "call";
        this.gameServ.calling(this.action).subscribe();
    };
    GameplayComponent.prototype.raising = function () {
        console.log("inside the raising method of gameplay.component");
        this.action = "raise";
        this.gameServ.raising(this.raiseAmount, this.action).subscribe();
        this.raiseAmount = null;
    };
    GameplayComponent.prototype.folding = function () {
        console.log("inside the folding method of gameplay.component");
        this.action = "fold";
        this.gameServ.folding(this.action).subscribe();
    };
    GameplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gameplay',
            template: __webpack_require__(/*! ./gameplay.component.html */ "./src/app/components/gameplay/gameplay.component.html"),
            styles: [__webpack_require__(/*! ./gameplay.component.css */ "./src/app/components/gameplay/gameplay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"]])
    ], GameplayComponent);
    return GameplayComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background-color: darkgreen;\r\n    color: whitesmoke;\r\n    padding: 50px;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHVCQUF1QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG4gICAgcGFkZGluZzogNTBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container rounded col-lg-4 offset-lg-4\">\r\n        <button class=\"btn btn-outline-light\" routerLink=\"/table\">Play!</button><br>\r\n        <br>\r\n        <button class=\"btn btn-outline-light\" routerLink=\"/rules\">Game Rules</button><br>\r\n        <br>\r\n        <button class=\"btn btn-outline-light\" (click)=\"logout()\">Logout</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_credentials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/credentials.service */ "./src/app/services/credentials.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(credService, router) {
        this.credService = credService;
        this.router = router;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.logout = function () {
        var _this = this;
        console.log("inside the logout method in home.component");
        this.credService.logout().subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl("/TexasCheatum");
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_credentials_service__WEBPACK_IMPORTED_MODULE_2__["CredentialsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#invalid {\r\n    color: red;\r\n}\r\n\r\n.container {\r\n    background-color: darkgreen;\r\n    color: whitesmoke;\r\n    padding: 50px;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ludmFsaWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container rounded col-lg-6 offset-lg-3\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-6 offset-lg-3\">\r\n      <form class=\"form-group\" (ngSubmit)=\"login()\" method=\"POST\">\r\n        <label>Username:</label><br>\r\n        <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"credentials.username\" #username=\"ngModel\" required><br>\r\n        <label>Password:</label><br>\r\n        <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"credentials.password\" #password=\"ngModel\" required>\r\n        <button class=\"btn btn-outline-light\">Login</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n  \r\n  <button class=\"btn btn-outline-light\" routerLink=\"/register\">Register</button>\r\n  <br>\r\n  <br>\r\n  <div id=\"invalid\" *ngIf=\"visible\">\r\n      <p>Invalid credentials. Please try again.</p>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_credentials_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/credentials.service */ "./src/app/services/credentials.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginComponent = /** @class */ (function () {
    function LoginComponent(credService, router) {
        this.credService = credService;
        this.router = router;
        this.credentials = {};
        this.visible = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        console.log("inside the login method in login.component");
        this.credService.login(this.credentials.username, this.credentials.password).subscribe(function (data) {
            if (data !== null) {
                console.log(data);
                _this.router.navigateByUrl("/home");
            }
            else {
                _this.visible = true;
                _this.credentials.username = "";
                _this.credentials.password = "";
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_credentials_service__WEBPACK_IMPORTED_MODULE_2__["CredentialsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background-color: darkgreen;\r\n    color: whitesmoke;\r\n    padding: 50px;\r\n    justify-content: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"container rounded col-lg-4 offset-lg-4\">\r\n      <div>\r\n          <form class=\"form-group\" (ngSubmit)=\"register()\" method=\"POST\">\r\n            <label>Username:</label><br>\r\n            <input type=\"text\" name=\"username\" [(ngModel)]=\"credentials.username\" #username=\"ngModel\" required><br>\r\n            <br>\r\n            <label>Email:</label><br>\r\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"credentials.email\" #email=\"ngModel\" required><br>\r\n            <br>\r\n            <label>Password:</label><br>\r\n            <input type=\"password\" name=\"password\" [(ngModel)]=\"credentials.password\" #password=\"ngModel\" required><br>\r\n            <button class=\"btn btn-outline-light\">Register</button>\r\n          </form>\r\n      </div>\r\n      <button class=\"btn btn-outline-light\" (click)=\"goBack()\">Back</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_credentials_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/credentials.service */ "./src/app/services/credentials.service.ts");




var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(credService, router) {
        this.credService = credService;
        this.router = router;
        this.credentials = {};
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.register = function () {
        var _this = this;
        console.log("inside register method of register.component");
        this.credService.register(this.credentials.username, this.credentials.email, this.credentials.password)
            .subscribe(function (data) { return _this.router.navigateByUrl("/TexasCheatum"); });
    };
    RegisterComponent.prototype.goBack = function () {
        window.history.back();
    };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_credentials_service__WEBPACK_IMPORTED_MODULE_3__["CredentialsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/rules/rules.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/rules/rules.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    background-color: darkgreen;\r\n    color: whitesmoke;\r\n    padding: 50px;\r\n    justify-content: center;\r\n}\r\n\r\nol {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ydWxlcy9ydWxlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ydWxlcy9ydWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxub2wge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/rules/rules.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/rules/rules.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container rounded\">\r\n  <h2>How to Play</h2>\r\n  <div>\r\n    <h4>Winning Hands (ranked by priority):</h4>\r\n    <dl>\r\n      <dt><b>Royal Flush</b> - five cards of the same suit, ordered ace through ten.</dt>\r\n      <dt><b>Straight Flush</b> - five cards of the same suit, ordered consecutively.</dt>\r\n      <dt><b>Four of a Kind</b> - four cards of the same value.</dt>\r\n      <dt><b>Full House</b> - three cards of the same value and two cards of the same value.</dt>\r\n      <dt><b>Flush</b> - any five cards of the same suit.</dt>\r\n      <dt><b>Straight</b> - any five cards ordered consecutively.</dt>\r\n      <dt><b>Three of a Kind</b> - three cards of the same value.</dt>\r\n      <dt><b>Two Pair</b> - two cards of the same value and two more cards of the same value.</dt>\r\n      <dt><b>One Pair</b> - two cards of the same value.</dt>\r\n      <dt><b>High Card</b> - highest value card, if no other hand can be formed.</dt>\r\n    </dl>\r\n  </div>\r\n\r\n  <div>\r\n    <h4>Rules of Play:</h4>\r\n    <dl>\r\n      <dt><b>Pre-flop</b></dt>\r\n        <dd>In this initial betting stage, players can either call to match the table minimum bet, raise the current bet, or fold. Play continues in a clockwise cycle until the last bet is called.</dd>\r\n      <dt><b>The Flop</b></dt>\r\n        <dd>Following the final call of the pre-flop stage, the first three table cards are drawn and placed face up. Play continues where the previous stage left off. In this stage, however, players have the option to place a bet, call, raise, or fold. Additionally, Players can now check, which simply passes play on to the next player, if no bet was placed by the previous player. This stage ends when either the last bet/raise is called, or if all players check in a given cycle.</dd>\r\n      <dt><b>The Turn</b></dt>\r\n        <dd>After the flop stage, a fourth card is added to the table face up. Betting for this stage follows the same rules as the flop stage.</dd>\r\n      <dt><b>The River</b></dt>\r\n        <dd>Following the turn stage, the fifth table card is laid down, and players go through one final round of betting following the same rules as the previous stages. Once all betting is complete, the remaining players reveal their hands to determine a winner.</dd>\r\n      <dt><b>Winning the Hand</b></dt>\r\n        <dd>The winning hand is determined once all five table cards have been laid down. Players construct their best possible five-card hand from the seven available cards (two hand cards and five table cards). The hand with the highest overall priority wins.</dd>\r\n    </dl>\r\n  </div>\r\n  <br>\r\n  <button class=\"btn btn-outline-light\" (click)=\"goBack()\">Back</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/rules/rules.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/rules/rules.component.ts ***!
  \*****************************************************/
/*! exports provided: RulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RulesComponent", function() { return RulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RulesComponent = /** @class */ (function () {
    function RulesComponent() {
    }
    RulesComponent.prototype.ngOnInit = function () {
    };
    RulesComponent.prototype.goBack = function () {
        window.history.back();
    };
    RulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-rules',
            template: __webpack_require__(/*! ./rules.component.html */ "./src/app/components/rules/rules.component.html"),
            styles: [__webpack_require__(/*! ./rules.component.css */ "./src/app/components/rules/rules.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RulesComponent);
    return RulesComponent;
}());



/***/ }),

/***/ "./src/app/components/table-container/table-container.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/components/table-container/table-container.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#handCard {\r\n    width: 100%;\r\n    padding: 3px;\r\n}\r\n\r\n#tableCard {\r\n    width: 100%;\r\n    padding: 3px;\r\n}\r\n\r\n#tableCell {\r\n    width: 20%;\r\n}\r\n\r\n#handCell {\r\n    width: 50%;\r\n}\r\n\r\n#chart {\r\n    padding: 10px;\r\n}\r\n\r\n#invalidGame {\r\n    color: red;\r\n}\r\n\r\n.container {\r\n    background-color: darkgreen;\r\n    color: whitesmoke;\r\n    padding: 50px;\r\n}\r\n\r\n#tableRegion, #handRegion {\r\n    border: 3px solid whitesmoke;\r\n    margin: auto;\r\n}\r\n\r\nh3 {\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90YWJsZS1jb250YWluZXIvdGFibGUtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDJCQUEyQjtJQUMzQixpQkFBaUI7SUFDakIsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90YWJsZS1jb250YWluZXIvdGFibGUtY29udGFpbmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaGFuZENhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbiN0YWJsZUNhcmQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAzcHg7XHJcbn1cclxuXHJcbiN0YWJsZUNlbGwge1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuI2hhbmRDZWxsIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbiNjaGFydCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jaW52YWxpZEdhbWUge1xyXG4gICAgY29sb3I6IHJlZDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrZ3JlZW47XHJcbiAgICBjb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIHBhZGRpbmc6IDUwcHg7XHJcbn1cclxuXHJcbiN0YWJsZVJlZ2lvbiwgI2hhbmRSZWdpb24ge1xyXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGVzbW9rZTtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuaDMge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/table-container/table-container.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/table-container/table-container.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"lobbyView\">\r\n  <div class=\"row\">\r\n    <div class=\"container rounded col-lg-4 offset-lg-4\">\r\n\r\n        <button class=\"btn btn-outline-light\" (click)=\"newGame()\">New Game</button>\r\n        <br>\r\n        <br>\r\n        <form class=\"form-group\" (ngSubmit)=\"joinGame()\" method=\"POST\">\r\n          <label>Enter an existing game session id:</label><br>\r\n          <input type=\"text\" name=\"sesh\" [(ngModel)]=\"game.sesh\" #sesh=\"ngModel\" required>\r\n          <br>\r\n          <button class=\"btn btn-outline-light\">Join Game</button>\r\n        </form>\r\n\r\n        <div id=\"invalidGame\" *ngIf=\"visible\">\r\n          <p>Invalid Game Session. Try again, or start a new game.</p>\r\n        </div>\r\n        \r\n        <button class=\"btn btn-outline-light\" (click)=\"goBack()\">Back</button>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"gameView\">\r\n  <div class=\"container rounded\">\r\n\r\n      <div class=\"col-lg-6 offset-lg-3 rounded\" id=\"tableRegion\">\r\n        <h3>Table Cards</h3>\r\n        <table>\r\n          <tr>\r\n            <td *ngFor=\"let card of tableCards\" id=\"tableCell\">\r\n              <img src={{card}} id=\"tableCard\">\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    \r\n    <br>\r\n    <div>\r\n      <!-- <button class=\"btn btn-outline-light\" (click)=\"getFlop()\">Get Flop</button>\r\n      <button class=\"btn btn-outline-light\" (click)=\"getTurn()\">Get Turn</button>\r\n      <button class=\"btn btn-outline-light\" (click)=\"getRiver()\">Get River</button> -->\r\n      <button class=\"btn btn-outline-light\" (click)=\"cheat()\">Cheat</button>\r\n    </div>\r\n    <br>\r\n  \r\n    <div>\r\n      <app-gameplay></app-gameplay>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4 rounded\" id=\"handRegion\">\r\n      <h3>Player Hand</h3>\r\n      <table>\r\n        <tr>\r\n          <td *ngFor=\"let card of handCards\" id=\"handCell\">\r\n            <img src={{card}} id=\"handCard\">\r\n          </td>\r\n        </tr>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"col-lg-4\" id=\"chart\">\r\n      <div *ngIf=\"chart.data\">\r\n        <google-chart\r\n          [title]=\"chart.title\"\r\n          [type]=\"chart.type\"\r\n         [data]=\"chart.data\">\r\n        </google-chart>\r\n      </div>\r\n      <br>\r\n    </div>\r\n    <p>Click \"Start Game\" to manually begin play without four players</p>\r\n    <button class=\"btn btn-outline-light\" (click)=\"startGame()\">Start Game</button>\r\n    <br>\r\n    <button class=\"btn btn-outline-light\" (click)=\"pause()\">Pause</button>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"pauseMenu\">\r\n  <div class=\"row\">\r\n    <div class=\"container rounded col-lg-4 offset-lg-4\">\r\n          <button class=\"btn btn-outline-light\" (click)=\"resume()\">Resume Game</button><br>\r\n          <br>\r\n          <button class=\"btn btn-outline-light\" routerLink=\"/home\">Quit Game</button><br>\r\n          <br>\r\n          <button class=\"btn btn-outline-light\" (click)=\"logout()\">Logout</button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/table-container/table-container.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/table-container/table-container.component.ts ***!
  \*************************************************************************/
/*! exports provided: TableContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableContainerComponent", function() { return TableContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
/* harmony import */ var _services_credentials_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/credentials.service */ "./src/app/services/credentials.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");






var TableContainerComponent = /** @class */ (function () {
    function TableContainerComponent(gameService, credService, router, settingServ) {
        this.gameService = gameService;
        this.credService = credService;
        this.router = router;
        this.settingServ = settingServ;
        this.tableCards = [];
        this.handCards = [];
        this.game = {};
        this.chart = {
            title: "Odds to Get Hand",
            type: "ColumnChart",
            data: null
        };
        this.lobbyView = true;
        this.gameView = false;
        this.pauseMenu = false;
        this.visible = false;
    }
    TableContainerComponent.prototype.ngOnInit = function () { };
    TableContainerComponent.prototype.newGame = function () {
        var _this = this;
        console.log("inside the newGame method in table-container.component");
        this.settingServ.newGame().subscribe(function (data) {
            console.log(data);
            _this.lobbyView = false;
            _this.gameView = true;
            _this.getHand();
        });
    };
    TableContainerComponent.prototype.joinGame = function () {
        var _this = this;
        console.log("inside joinGame method in table-container.component");
        this.settingServ.joinGame(this.game.sesh).subscribe(function (data) {
            console.log(data);
            if (data !== null) {
                _this.lobbyView = false;
                _this.gameView = true;
                for (_this.i = 0; _this.i < data.hand.length; _this.i++) {
                    _this.handCards[_this.i] = data.hand[_this.i].image;
                }
                for (_this.i = 0; _this.i < data.table.length; _this.i++) {
                    _this.tableCards[_this.i] = data.table[_this.i].image;
                }
            }
            else {
                _this.visible = true;
                _this.lobbyView = true;
                _this.gameView = false;
                _this.game.sesh = "";
            }
        });
    };
    TableContainerComponent.prototype.startGame = function () {
        console.log("inside startGame method in thable-container.component");
        this.gameService.startGame().subscribe();
    };
    TableContainerComponent.prototype.getHand = function () {
        var _this = this;
        console.log("inside getHand method in table-container.component");
        this.gameService.getHand().subscribe(function (data) {
            console.log(data);
            for (_this.i = 0; _this.i < data.length; _this.i += 1) {
                _this.handCards[_this.i] = data[_this.i].image;
            }
        });
    };
    TableContainerComponent.prototype.getFlop = function () {
        var _this = this;
        console.log("inside getFlop method in table-container.component");
        this.gameService.getFlop().subscribe(function (data) {
            console.log(data);
            for (_this.i = 0; _this.i < data.length; _this.i += 1) {
                _this.tableCards[_this.i] = data[_this.i].image;
            }
        });
    };
    TableContainerComponent.prototype.getTurn = function () {
        var _this = this;
        console.log("inside getTurn method in table-container.component");
        this.gameService.getTurn().subscribe(function (data) {
            console.log(data);
            for (_this.i = 0; _this.i < data.length; _this.i += 1) {
                _this.tableCards[_this.i] = data[_this.i].image;
            }
        });
    };
    TableContainerComponent.prototype.getRiver = function () {
        var _this = this;
        console.log("inside getRiver method in table-container.component");
        this.gameService.getRiver().subscribe(function (data) {
            console.log(data);
            for (_this.i = 0; _this.i < data.length; _this.i += 1) {
                _this.tableCards[_this.i] = data[_this.i].image;
            }
        });
    };
    TableContainerComponent.prototype.cheat = function () {
        var _this = this;
        console.log("inside cheat method in table-container.component");
        this.gameService.cheat().subscribe(function (data) {
            console.log(data);
            _this.chart.data = data;
        });
    };
    TableContainerComponent.prototype.logout = function () {
        var _this = this;
        console.log("inside the logout method in home.component");
        this.credService.logout().subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl("/TexasCheatum");
        });
    };
    TableContainerComponent.prototype.pause = function () {
        this.gameView = false;
        this.lobbyView = false;
        this.pauseMenu = true;
    };
    TableContainerComponent.prototype.resume = function () {
        this.gameView = true;
        this.lobbyView = false;
        this.pauseMenu = false;
    };
    TableContainerComponent.prototype.goBack = function () {
        window.history.back();
    };
    TableContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-container',
            template: __webpack_require__(/*! ./table-container.component.html */ "./src/app/components/table-container/table-container.component.html"),
            styles: [__webpack_require__(/*! ./table-container.component.css */ "./src/app/components/table-container/table-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _services_credentials_service__WEBPACK_IMPORTED_MODULE_3__["CredentialsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"]])
    ], TableContainerComponent);
    return TableContainerComponent;
}());



/***/ }),

/***/ "./src/app/services/credentials.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/credentials.service.ts ***!
  \*************************************************/
/*! exports provided: CredentialsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CredentialsService", function() { return CredentialsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var CredentialsService = /** @class */ (function () {
    function CredentialsService(http) {
        this.http = http;
    }
    CredentialsService.prototype.login = function (username, password) {
        console.log("inside the login method in credentials.service");
        return this.http.post("/TexasCheatum/servlet/login", { username: username, password: password });
    };
    CredentialsService.prototype.register = function (username, email, password) {
        console.log("inside register method in credentials.service");
        return this.http.post("/TexasCheatum/servlet/register", { username: username, email: email, password: password });
    };
    CredentialsService.prototype.logout = function () {
        console.log("inside the logout method in credentials.service");
        return this.http.get("/TexasCheatum/servlet/logout");
    };
    CredentialsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CredentialsService);
    return CredentialsService;
}());



/***/ }),

/***/ "./src/app/services/game.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/game.service.ts ***!
  \******************************************/
/*! exports provided: GameService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function() { return GameService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GameService = /** @class */ (function () {
    function GameService(http) {
        this.http = http;
    }
    GameService.prototype.startGame = function () {
        console.log("inside startGame method of game.service");
        return this.http.get("/TexasCheatum/servlet/startGame");
    };
    GameService.prototype.getHand = function () {
        console.log("inside the getHand method of game.service");
        return this.http.get("/TexasCheatum/servlet/getHand");
    };
    GameService.prototype.getFlop = function () {
        console.log("inside the getFlop method of game.service");
        return this.http.get("/TexasCheatum/servlet/getFlop");
    };
    GameService.prototype.getTurn = function () {
        console.log("inside the getTurn method of game.service");
        return this.http.get("/TexasCheatum/servlet/getTurn");
    };
    GameService.prototype.getRiver = function () {
        console.log("inside the getRiver method of game.service");
        return this.http.get("/TexasCheatum/servlet/getRiver");
    };
    GameService.prototype.cheat = function () {
        console.log("inside the cheat method of game.service");
        return this.http.get("/TexasCheatum/servlet/cheat");
    };
    GameService.prototype.whosTurnIsItAnyways = function () {
        console.log("inside whosTurnIsItAnyways method of game.service");
        return this.http.get("/TexasCheatum/servlet/status");
    };
    GameService.prototype.checking = function (action) {
        console.log("inside checking method of game.service");
        return this.http.post("/TexasCheatum/servlet/action", { action: action });
    };
    GameService.prototype.betting = function (amount, action) {
        console.log("inside betting method of game.service");
        return this.http.post("/TexasCheatum/servlet/action", { amount: amount, action: action });
    };
    GameService.prototype.calling = function (action) {
        console.log("inside calling method of game.service");
        return this.http.post("/TexasCheatum/servlet/action", { action: action });
    };
    GameService.prototype.raising = function (amount, action) {
        console.log("inside raising method of game.service");
        return this.http.post("/TexasCheatum/servlet/action", { amount: amount, action: action });
    };
    GameService.prototype.folding = function (action) {
        console.log("inside folding method of game.service");
        return this.http.post("/TexasCheatum/servlet/action", { action: action });
    };
    GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GameService);
    return GameService;
}());



/***/ }),

/***/ "./src/app/services/settings.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/settings.service.ts ***!
  \**********************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.newGame = function () {
        console.log("inside the newGame method of settings.service");
        return this.http.post("/TexasCheatum/servlet/start", "", { responseType: "text" });
    };
    SettingsService.prototype.joinGame = function (gameID) {
        console.log("inside the joinGame method of settings.service");
        return this.http.post("/TexasCheatum/servlet/join", { gameID: gameID });
    };
    SettingsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\my_git_repos\1901_jan07_pe\Nathan_Losee_Code\TexasCheatem\TexasCheatum\src\main\ngapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map