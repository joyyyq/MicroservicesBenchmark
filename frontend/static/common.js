(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Ig3X":
/*!***************************************************!*\
  !*** ./src/app/services/student-state.service.ts ***!
  \***************************************************/
/*! exports provided: StudentStateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentStateService", function() { return StudentStateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class StudentStateService {
    constructor() {
        this.username = "";
    }
    setUsername(name) {
        this.username = name;
    }
    getUsername() {
        return this.username;
    }
}
StudentStateService.ɵfac = function StudentStateService_Factory(t) { return new (t || StudentStateService)(); };
StudentStateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StudentStateService, factory: StudentStateService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map