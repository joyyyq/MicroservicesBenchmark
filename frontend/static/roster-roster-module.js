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
/* harmony import */ var _services_classlist_client_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/classlist-client.service */ "9GJm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _roster_search_roster_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../roster-search/roster-search.component */ "seXH");
/* harmony import */ var _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roster-card/roster-card.component */ "STuS");





function RosterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-roster-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](class_r1);
} }
class RosterComponent {
    constructor(client) {
        this.client = client;
        this.classes = [];
    }
    ngOnInit() {
        this.client.getClassList('SP21').asObservable().subscribe(val => {
            this.classes = val;
            console.log(this.classes);
        });
    }
}
RosterComponent.ɵfac = function RosterComponent_Factory(t) { return new (t || RosterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_classlist_client_service__WEBPACK_IMPORTED_MODULE_1__["ClasslistClientService"])); };
RosterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RosterComponent, selectors: [["app-roster"]], decls: 9, vars: 2, consts: [[1, "container"], ["id", "identity"], [1, "content"], [1, "roster-lists"], [4, "ngFor", "ngForOf"], [1, "search"], [3, "classes"]], template: function RosterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Electrical & Computer Engineering (ECE)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RosterComponent_div_6_Template, 2, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-roster-search", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classes", ctx.classes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _roster_search_roster_search_component__WEBPACK_IMPORTED_MODULE_3__["RosterSearchComponent"], _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_4__["RosterCardComponent"]], styles: ["#identity[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  background: #fff;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 35%; \n  padding: 0px 0px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InJvc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2lkZW50aXR5IHtcbiAgcGFkZGluZzogMjVweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zZWFyY2gge1xuICB3aWR0aDogMzUlOyBcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4IDIwcHg7XG59XG4iXX0= */"] });


/***/ }),

/***/ "STuS":
/*!*************************************************************!*\
  !*** ./src/app/roster/roster-card/roster-card.component.ts ***!
  \*************************************************************/
/*! exports provided: RosterCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterCardComponent", function() { return RosterCardComponent; });
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../proto/classList_pb */ "s0aR");
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");




function RosterCardComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Location: TBD");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const section_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("-- ", section_r1.getNumber(), " -- ", ctx_r0.class.getCredit(), " credits ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](section_r1.getTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"]("", section_r1.getTimes().getStart(), " - ", section_r1.getTimes().getEnd(), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](section_r1.getInstructors());
} }
class RosterCardComponent {
    constructor() { this.class = new _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__["Class"](); }
}
RosterCardComponent.ɵfac = function RosterCardComponent_Factory(t) { return new (t || RosterCardComponent)(); };
RosterCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RosterCardComponent, selectors: [["app-roster-card"]], inputs: { class: "class" }, decls: 12, vars: 4, consts: [[1, "title-container"], [1, "title-code"], [1, "drop-sections"], ["class", "section-container", 4, "ngFor", "ngForOf"], [1, "section-container"], [1, "section-details"]], template: function RosterCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h3", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-expansion-panel", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " List all sections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, RosterCardComponent_div_11_Template, 12, 6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.class.getCode(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.class.getTitle(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.class.getDescription(), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.class.getSectionsList());
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_2__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".title-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  background: #f2f2f2;\n  font-size: 1.18em;\n  font-weight: 300;\n  background: rgba(0,0,0,0.05);\n  border-left: 3px solid #b31b1b;\n  padding: 0.5em 66px 0.5em 0.75em;\n}\n\n.title-code[_ngcontent-%COMP%] {\n  width: 18%;\n  height: 100%;\n  text-align: left;\n  padding-right: 0.5em;\n  font-weight: bold;\n  float: left;\n}\n\n.section-container[_ngcontent-%COMP%] {\n  border: 1px dashed #b31b1b;\n  display: flex;\n  flex-direction: column;\n  background: #f2f2f2;\n  background: rgba(0,0,0,0.05);\n  padding: 0.5em;\n  margin-bottom: 1em;\n}\n\n.section-container[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.section-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n}\n\n.drop-sections[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvc3Rlci1jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJyb3N0ZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGZvbnQtc2l6ZTogMS4xOGVtO1xuICBmb250LXdlaWdodDogMzAwO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNiMzFiMWI7XG4gIHBhZGRpbmc6IDAuNWVtIDY2cHggMC41ZW0gMC43NWVtO1xufVxuXG4udGl0bGUtY29kZSB7XG4gIHdpZHRoOiAxOCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1yaWdodDogMC41ZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNlY3Rpb24tY29udGFpbmVyIHtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNiMzFiMWI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJhY2tncm91bmQ6ICNmMmYyZjI7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG5cbi5zZWN0aW9uLWNvbnRhaW5lciBoMyB7XG4gIG1hcmdpbjogMDtcbn1cblxuLnNlY3Rpb24tZGV0YWlscyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmRyb3Atc2VjdGlvbnMge1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG59XG4iXX0= */"] });


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
/* harmony import */ var _roster_roster_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./roster/roster.component */ "Nv32");
/* harmony import */ var _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roster-class/roster-class.component */ "gy0x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _roster_roster_component__WEBPACK_IMPORTED_MODULE_1__["RosterComponent"]
    },
    {
        path: 'class/:year/ECE/:code',
        component: _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_2__["RosterClassComponent"],
        data: { class: {} }
    }
];
class RosterRoutingModule {
}
RosterRoutingModule.ɵfac = function RosterRoutingModule_Factory(t) { return new (t || RosterRoutingModule)(); };
RosterRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RosterRoutingModule });
RosterRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RosterRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "gy0x":
/*!***************************************************************!*\
  !*** ./src/app/roster/roster-class/roster-class.component.ts ***!
  \***************************************************************/
/*! exports provided: RosterClassComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterClassComponent", function() { return RosterClassComponent; });
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../proto/classList_pb */ "s0aR");
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_classlist_client_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/classlist-client.service */ "9GJm");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../roster-card/roster-card.component */ "STuS");





class RosterClassComponent {
    constructor(client, router, route) {
        this.client = client;
        this.router = router;
        this.route = route;
        this.semester = '';
        this.group = '';
        this.classNum = '';
        this.class_ = new _proto_classList_pb__WEBPACK_IMPORTED_MODULE_0__["Class"]();
        this.classes = [];
    }
    ngOnInit() {
        this.semester = this.route.snapshot.url[1].path;
        this.group = this.route.snapshot.url[2].path;
        this.classNum = this.route.snapshot.url[3].path;
        this.client.getClassList("SP21").asObservable().subscribe(val => {
            this.classes = val;
            console.log("amigo");
            console.log(this.classes);
            this.class_ = this.classes.filter(temp => temp.getCode() == (this.group + " " + this.classNum))[0];
        });
    }
}
RosterClassComponent.ɵfac = function RosterClassComponent_Factory(t) { return new (t || RosterClassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_classlist_client_service__WEBPACK_IMPORTED_MODULE_2__["ClasslistClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
RosterClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RosterClassComponent, selectors: [["app-roster-class"]], decls: 1, vars: 2, template: function RosterClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-roster-card");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.class_);
    } }, directives: [_roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_4__["RosterCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXItY2xhc3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "seXH":
/*!*****************************************************************!*\
  !*** ./src/app/roster/roster-search/roster-search.component.ts ***!
  \*****************************************************************/
/*! exports provided: RosterSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RosterSearchComponent", function() { return RosterSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");






function RosterSearchComponent_mat_card_7_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RosterSearchComponent_mat_card_7_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const class_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.visitClass(class_r2.getNbr()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const class_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", class_r2.getCode(), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", class_r2.getTitle(), " ");
} }
function RosterSearchComponent_mat_card_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, RosterSearchComponent_mat_card_7_a_1_Template, 4, 2, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchResults);
} }
class RosterSearchComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.values = '';
        this.searchResults = [];
        this.classes = [];
    }
    ngOnInit() {
    }
    search(event) {
        this.searchResults = [];
        let query = event.target.value;
        if (query != '') {
            this.searchResults = this.classes.filter(class_ => (class_.getTitle().includes(query) || class_.getCode().includes(query)));
        }
    }
    visitClass(classNum) {
        this.router.navigate(['class/SP21/ECE/' + classNum], { relativeTo: this.route });
    }
}
RosterSearchComponent.ɵfac = function RosterSearchComponent_Factory(t) { return new (t || RosterSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
RosterSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RosterSearchComponent, selectors: [["app-roster-search"]], inputs: { classes: "classes" }, decls: 8, vars: 1, consts: [[1, "container"], ["appearance", "outline", 2, "margin-bottom", "-1.25em"], ["matInput", "", "type", "text", "autocomplete", "off", "required", "", 3, "input"], [4, "ngIf"], ["class", "search-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "search-card", 3, "click"]], template: function RosterSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SEARCH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function RosterSearchComponent_Template_input_input_6_listener($event) { return ctx.search($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RosterSearchComponent_mat_card_7_Template, 2, 1, "mat-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResults.length != 0);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["mat-card[_ngcontent-%COMP%] {\n  padding: 0.2em; \n  display: flex;\n  flex-direction: column;\n}\n\n.search-card[_ngcontent-%COMP%] {\n  margin: 0px; \n  height: 3em;\n  overflow: hidden;\n  text-decoration: none;\n  color:black;\n}\n\n.search-card[_ngcontent-%COMP%]:hover {\n  border-left: 3px solid #b31b1b;\n  background: #f2f2f2;\n  background: rgba(0,0,0,0.05);\n  cursor: pointer;\n}\n\n[_ngcontent-%COMP%]:not(mat-card:hover)    > .search-card[_ngcontent-%COMP%]:first-child {\n  border-left: 3px solid #b31b1b;\n  background: #f2f2f2;\n  background: rgba(0,0,0,0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvc3Rlci1zZWFyY2guY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIscUJBQXFCO0VBQ3JCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLDRCQUE0QjtBQUM5Qjs7QUFFQTs7Ozs7R0FLRyIsImZpbGUiOiJyb3N0ZXItc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDAuMmVtOyBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnNlYXJjaC1jYXJkIHtcbiAgbWFyZ2luOiAwcHg7IFxuICBoZWlnaHQ6IDNlbTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjb2xvcjpibGFjaztcbn1cblxuLnNlYXJjaC1jYXJkOmhvdmVyIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYjMxYjFiO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbjpub3QobWF0LWNhcmQ6aG92ZXIpID4gLnNlYXJjaC1jYXJkOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjYjMxYjFiO1xuICBiYWNrZ3JvdW5kOiAjZjJmMmYyO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xufVxuXG4vKiA6bm90KG1hdElucHV0OmZvY3VzKSA+IG1hdC1jYXJkIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbm1hdElucHV0OmZvY3VzID4gbWF0LWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbn0gKi8iXX0= */"] });


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
/* harmony import */ var _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roster-card/roster-card.component */ "STuS");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/badge */ "TU8p");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./roster-class/roster-class.component */ "gy0x");
/* harmony import */ var _roster_search_roster_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./roster-search/roster-search.component */ "seXH");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");




// material 













class RosterModule {
}
RosterModule.ɵfac = function RosterModule_Factory(t) { return new (t || RosterModule)(); };
RosterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: RosterModule });
RosterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _roster_routing_module__WEBPACK_IMPORTED_MODULE_1__["RosterRoutingModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
            _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](RosterModule, { declarations: [_roster_roster_component__WEBPACK_IMPORTED_MODULE_2__["RosterComponent"], _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_3__["RosterCardComponent"], _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_14__["RosterClassComponent"], _roster_search_roster_search_component__WEBPACK_IMPORTED_MODULE_15__["RosterSearchComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _roster_routing_module__WEBPACK_IMPORTED_MODULE_1__["RosterRoutingModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_5__["MatExpansionModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormFieldModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
        _angular_material_badge__WEBPACK_IMPORTED_MODULE_12__["MatBadgeModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_13__["MatCardModule"]] }); })();


/***/ })

}]);
//# sourceMappingURL=roster-roster-module.js.map