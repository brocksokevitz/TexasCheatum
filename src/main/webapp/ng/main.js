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
/* harmony import */ var _components_game_settings_game_settings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/game-settings/game-settings.component */ "./src/app/components/game-settings/game-settings.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_table_container_table_container_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/table-container/table-container.component */ "./src/app/components/table-container/table-container.component.ts");
/* harmony import */ var _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/rules/rules.component */ "./src/app/components/rules/rules.component.ts");
/* harmony import */ var _components_options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/options-menu/options-menu.component */ "./src/app/components/options-menu/options-menu.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");










var routes = [
    {
        path: "TexasCheatum",
        component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
    },
    {
        path: "register",
        component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"]
    },
    {
        path: "home",
        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    },
    {
        path: "game-settings",
        component: _components_game_settings_game_settings_component__WEBPACK_IMPORTED_MODULE_3__["GameSettingsComponent"]
    },
    {
        path: "table",
        component: _components_table_container_table_container_component__WEBPACK_IMPORTED_MODULE_6__["TableContainerComponent"]
    },
    {
        path: "rules",
        component: _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_7__["RulesComponent"]
    },
    {
        path: "options",
        component: _components_options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_8__["OptionsMenuComponent"]
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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div style=\"text-align:center\">\r\n  <h1>\r\n    Welcome to {{ title }}!\r\n  </h1>\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_table_container_table_container_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/table-container/table-container.component */ "./src/app/components/table-container/table-container.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_game_settings_game_settings_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/game-settings/game-settings.component */ "./src/app/components/game-settings/game-settings.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/rules/rules.component */ "./src/app/components/rules/rules.component.ts");
/* harmony import */ var _components_options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/options-menu/options-menu.component */ "./src/app/components/options-menu/options-menu.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_table_container_table_container_component__WEBPACK_IMPORTED_MODULE_7__["TableContainerComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_game_settings_game_settings_component__WEBPACK_IMPORTED_MODULE_9__["GameSettingsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _components_rules_rules_component__WEBPACK_IMPORTED_MODULE_11__["RulesComponent"],
                _components_options_menu_options_menu_component__WEBPACK_IMPORTED_MODULE_12__["OptionsMenuComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_13__["RegisterComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/game-settings/game-settings.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/game-settings/game-settings.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1zZXR0aW5ncy9nYW1lLXNldHRpbmdzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/game-settings/game-settings.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/game-settings/game-settings.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button (click)=\"newGame()\">New Game</button>\r\n\r\n  <form class=\"form-group\" (ngSubmit)=\"joinGame()\" method=\"POST\">\r\n    <Label>Enter an existing game session id: </Label>\r\n    <input type=\"text\" name=\"sesh\" [(ngModel)]=\"game.sesh\" #sesh=\"ngModel\">\r\n    <button class=\"btn btn-outline-info\">Join Game</button>\r\n  </form>\r\n  \r\n<button (click)=\"goBack()\">Back</button>\r\n</div>"

/***/ }),

/***/ "./src/app/components/game-settings/game-settings.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/game-settings/game-settings.component.ts ***!
  \*********************************************************************/
/*! exports provided: GameSettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSettingsComponent", function() { return GameSettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/settings.service */ "./src/app/services/settings.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var GameSettingsComponent = /** @class */ (function () {
    function GameSettingsComponent(settingServ, router) {
        this.settingServ = settingServ;
        this.router = router;
        this.game = {};
    }
    GameSettingsComponent.prototype.ngOnInit = function () { };
    GameSettingsComponent.prototype.newGame = function () {
        var _this = this;
        console.log("inside the newGame method in game-settings.component");
        this.settingServ.newGame().subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl("/table");
        });
    };
    GameSettingsComponent.prototype.joinGame = function () {
        var _this = this;
        console.log("inside joinGame method in game-settings.component");
        this.settingServ.joinGame(this.game.sesh).subscribe(function (data) {
            console.log(data);
            _this.router.navigateByUrl("/table");
        });
    };
    GameSettingsComponent.prototype.goBack = function () {
        window.history.back();
    };
    GameSettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-game-settings',
            template: __webpack_require__(/*! ./game-settings.component.html */ "./src/app/components/game-settings/game-settings.component.html"),
            styles: [__webpack_require__(/*! ./game-settings.component.css */ "./src/app/components/game-settings/game-settings.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GameSettingsComponent);
    return GameSettingsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button routerLink=\"/rules\">Game Rules</button>\r\n  <button routerLink=\"/game-settings\">Play!</button>\r\n  <button routerLink=\"/options\">Options</button>\r\n  <button (click)=\"logout()\">Logout</button>\r\n</div>"

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

module.exports = "#invalid {\r\n    color: red;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2ludmFsaWQge1xyXG4gICAgY29sb3I6IHJlZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <form class=\"form-group\" (ngSubmit)=\"login()\" method=\"POST\">\r\n    <input type=\"text\" name=\"username\" [(ngModel)]=\"credentials.username\" #username=\"ngModel\" placeholder=\"username\">\r\n    <input type=\"password\" name=\"password\" [(ngModel)]=\"credentials.password\" #password=\"ngModel\" placeholder=\"password\">\r\n    <button class=\"btn btn-outline-info\">Login</button>\r\n  </form>\r\n</div>\r\n<button routerLink=\"/register\">Register</button>\r\n<div id=\"invalid\" *ngIf=\"visible\">\r\n    <p>Invalid credentials. Please try again.</p>\r\n</div>"

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
                _this.visible = !_this.visible;
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

/***/ "./src/app/components/options-menu/options-menu.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/options-menu/options-menu.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvb3B0aW9ucy1tZW51L29wdGlvbnMtbWVudS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/options-menu/options-menu.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/options-menu/options-menu.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  options-menu works!\r\n</p>\r\n<!-- go back one step in history (look how they did it in ToH)-->\r\n<button routerLink=\"/home\">Back</button>\r\n"

/***/ }),

/***/ "./src/app/components/options-menu/options-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/options-menu/options-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: OptionsMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsMenuComponent", function() { return OptionsMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OptionsMenuComponent = /** @class */ (function () {
    function OptionsMenuComponent() {
    }
    OptionsMenuComponent.prototype.ngOnInit = function () {
    };
    OptionsMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-options-menu',
            template: __webpack_require__(/*! ./options-menu.component.html */ "./src/app/components/options-menu/options-menu.component.html"),
            styles: [__webpack_require__(/*! ./options-menu.component.css */ "./src/app/components/options-menu/options-menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], OptionsMenuComponent);
    return OptionsMenuComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n    <form class=\"form-group\" (ngSubmit)=\"register()\" method=\"POST\">\r\n      <input type=\"text\" name=\"username\" [(ngModel)]=\"credentials.username\" #username=\"ngModel\" placeholder=\"username\">\r\n      <input type=\"email\" name=\"email\" [(ngModel)]=\"credentials.email\" #email=\"ngModel\" placeholder=\"email\">\r\n      <input type=\"password\" name=\"password\" [(ngModel)]=\"credentials.password\" #password=\"ngModel\" placeholder=\"password\">\r\n      <button class=\"btn btn-outline-info\">Register</button>\r\n    </form>\r\n</div>\r\n<button (click)=\"goBack()\">Back</button>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcnVsZXMvcnVsZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/rules/rules.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/rules/rules.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  rules works!\r\n</p>\r\n<!-- go back one step in history (look how they did it in ToH)-->\r\n<button routerLink=\"/home\">Back</button>"

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

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGFibGUtY29udGFpbmVyL3RhYmxlLWNvbnRhaW5lci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/table-container/table-container.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/table-container/table-container.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <button (click)=\"getHand()\">getHand</button>\r\n  <button (click)=\"getFlop()\">getFlop</button>\r\n  <button (click)=\"getTurn()\">getTurn</button>\r\n  <button (click)=\"getRiver()\">getRiver</button>\r\n  <button (click)=\"cheat()\">Cheat</button>\r\n</div>\r\n<br>\r\n<button>Pause</button>\r\n<button (click)=\"logout()\">Logout</button>\r\n"

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





var TableContainerComponent = /** @class */ (function () {
    function TableContainerComponent(gameService, credService, router) {
        this.gameService = gameService;
        this.credService = credService;
        this.router = router;
    }
    TableContainerComponent.prototype.ngOnInit = function () { };
    TableContainerComponent.prototype.getHand = function () {
        console.log("inside getHand method in table-container.component");
        this.gameService.getHand().subscribe(function (data) {
            console.log(data);
        });
    };
    TableContainerComponent.prototype.getFlop = function () {
        console.log("inside getFlop method in table-container.component");
        this.gameService.getFlop().subscribe(function (data) {
            console.log(data);
        });
    };
    TableContainerComponent.prototype.getTurn = function () {
        console.log("inside getTurn method in table-container.component");
        this.gameService.getTurn().subscribe(function (data) {
            console.log(data);
        });
    };
    TableContainerComponent.prototype.getRiver = function () {
        console.log("inside getRiver method in table-container.component");
        this.gameService.getRiver().subscribe(function (data) {
            console.log(data);
        });
    };
    TableContainerComponent.prototype.cheat = function () {
        console.log("inside cheat method in table-container.component");
        this.gameService.cheat().subscribe(function (data) {
            console.log(data);
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
    TableContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-table-container',
            template: __webpack_require__(/*! ./table-container.component.html */ "./src/app/components/table-container/table-container.component.html"),
            styles: [__webpack_require__(/*! ./table-container.component.css */ "./src/app/components/table-container/table-container.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_game_service__WEBPACK_IMPORTED_MODULE_2__["GameService"],
            _services_credentials_service__WEBPACK_IMPORTED_MODULE_3__["CredentialsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
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
    GameService.prototype.getHand = function () {
        console.log("inside the getHand method of game.service");
        return this.http.get("/TexasCheatum/servlet/getHand", { responseType: "text" });
    };
    GameService.prototype.getFlop = function () {
        console.log("inside the getFlop method of game.service");
        return this.http.get("/TexasCheatum/servlet/getFlop", { responseType: "text" });
    };
    GameService.prototype.getTurn = function () {
        console.log("inside the getTurn method of game.service");
        return this.http.get("/TexasCheatum/servlet/getTurn", { responseType: "text" });
    };
    GameService.prototype.getRiver = function () {
        console.log("inside the getRiver method of game.service");
        return this.http.get("/TexasCheatum/servlet/getRiver", { responseType: "text" });
    };
    GameService.prototype.cheat = function () {
        console.log("inside the cheat method of game.service");
        return this.http.get("/TexasCheatum/servlet/cheat");
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