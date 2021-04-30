(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sign-out-sign-out-module"],{

/***/ "MMu4":
/*!*****************************************************!*\
  !*** ./src/app/sign-out/sign-out-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: SignOutRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutRoutingModule", function() { return SignOutRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-out/sign-out.component */ "fD1m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");




const routes = [
    {
        path: '',
        component: _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_1__["SignOutComponent"]
    }
];
class SignOutRoutingModule {
}
SignOutRoutingModule.ɵfac = function SignOutRoutingModule_Factory(t) { return new (t || SignOutRoutingModule)(); };
SignOutRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: SignOutRoutingModule });
SignOutRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](SignOutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "fD1m":
/*!*********************************************************!*\
  !*** ./src/app/sign-out/sign-out/sign-out.component.ts ***!
  \*********************************************************/
/*! exports provided: SignOutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutComponent", function() { return SignOutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_student_state_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/student-state.service */ "Ig3X");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



class SignOutComponent {
    constructor(studentState, router) {
        this.studentState = studentState;
        this.router = router;
    }
    ngOnInit() {
        console.log("user just signed  out");
        console.log("erasing username");
        this.studentState.setcurrentUserName('');
        this.studentState.setUsername('');
        this.router.navigate(['/roster']);
    }
}
SignOutComponent.ɵfac = function SignOutComponent_Factory(t) { return new (t || SignOutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_student_state_service__WEBPACK_IMPORTED_MODULE_1__["StudentStateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
SignOutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignOutComponent, selectors: [["app-sign-out"]], decls: 2, vars: 0, template: function SignOutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "sign-out works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduLW91dC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ "tsu1":
/*!*********************************************!*\
  !*** ./src/app/sign-out/sign-out.module.ts ***!
  \*********************************************/
/*! exports provided: SignOutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignOutModule", function() { return SignOutModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sign_out_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sign-out-routing.module */ "MMu4");
/* harmony import */ var _sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sign-out/sign-out.component */ "fD1m");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class SignOutModule {
}
SignOutModule.ɵfac = function SignOutModule_Factory(t) { return new (t || SignOutModule)(); };
SignOutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: SignOutModule });
SignOutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _sign_out_routing_module__WEBPACK_IMPORTED_MODULE_1__["SignOutRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](SignOutModule, { declarations: [_sign_out_sign_out_component__WEBPACK_IMPORTED_MODULE_2__["SignOutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _sign_out_routing_module__WEBPACK_IMPORTED_MODULE_1__["SignOutRoutingModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=sign-out-sign-out-module.js.map