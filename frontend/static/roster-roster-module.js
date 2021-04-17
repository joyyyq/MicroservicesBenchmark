(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roster-roster-module"],{

/***/ "Nv32":
/*!***************************************************!*\
  !*** ./src/app/roster/roster/roster.component.ts ***!
  \***************************************************/
/*! exports provided: RosterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterComponent", function() { return RosterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class RosterComponent {
    constructor() { }
    ngOnInit() {
    }
}
RosterComponent.ɵfac = function RosterComponent_Factory(t) { return new (t || RosterComponent)(); };
RosterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RosterComponent, selectors: [["app-roster"]], decls: 2, vars: 0, template: function RosterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "roster works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "aYUR":
/*!*************************************************!*\
  !*** ./src/app/roster/roster-routing.module.ts ***!
  \*************************************************/
/*! exports provided: RosterRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterRoutingModule", function() { return RosterRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");



const routes = [];
class RosterRoutingModule {
}
RosterRoutingModule.ɵfac = function RosterRoutingModule_Factory(t) { return new (t || RosterRoutingModule)(); };
RosterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RosterRoutingModule });
RosterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RosterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "vgxn":
/*!*****************************************!*\
  !*** ./src/app/roster/roster.module.ts ***!
  \*****************************************/
/*! exports provided: RosterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterModule", function() { return RosterModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _roster_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roster-routing.module */ "aYUR");
/* harmony import */ var _roster_roster_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roster/roster.component */ "Nv32");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class RosterModule {
}
RosterModule.ɵfac = function RosterModule_Factory(t) { return new (t || RosterModule)(); };
RosterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RosterModule });
RosterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _roster_routing_module__WEBPACK_IMPORTED_MODULE_1__["RosterRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RosterModule, { declarations: [_roster_roster_component__WEBPACK_IMPORTED_MODULE_2__["RosterComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _roster_routing_module__WEBPACK_IMPORTED_MODULE_1__["RosterRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=roster-roster-module.js.map