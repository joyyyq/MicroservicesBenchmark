(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["roster-roster-module"],{

/***/ "3hIZ":
/*!*******************************************!*\
  !*** ./proto/ClassListServiceClientPb.ts ***!
  \*******************************************/
/*! exports provided: classlistClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classlistClient", function() { return classlistClient; });
/* harmony import */ var grpc_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grpc-web */ "TxjO");
/* harmony import */ var grpc_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grpc_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _classList_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classList_pb */ "s0aR");
/* harmony import */ var _classList_pb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_classList_pb__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview gRPC-Web generated client stub for classlist
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck


class classlistClient {
    constructor(hostname, credentials, options) {
        this.methodInfogetClassList = new grpc_web__WEBPACK_IMPORTED_MODULE_0__["AbstractClientBase"].MethodInfo(_classList_pb__WEBPACK_IMPORTED_MODULE_1__["classListResponse"], (request) => {
            return request.serializeBinary();
        }, _classList_pb__WEBPACK_IMPORTED_MODULE_1__["classListResponse"].deserializeBinary);
        if (!options)
            options = {};
        if (!credentials)
            credentials = {};
        options['format'] = 'text';
        this.client_ = new grpc_web__WEBPACK_IMPORTED_MODULE_0__["GrpcWebClientBase"](options);
        this.hostname_ = hostname;
        this.credentials_ = credentials;
        this.options_ = options;
    }
    getClassList(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/classlist.classlist/getClassList', request, metadata || {}, this.methodInfogetClassList, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/classlist.classlist/getClassList', request, metadata || {}, this.methodInfogetClassList);
    }
}


/***/ }),

/***/ "9GJm":
/*!******************************************************!*\
  !*** ./src/app/services/classlist-client.service.ts ***!
  \******************************************************/
/*! exports provided: ClasslistClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClasslistClientService", function() { return ClasslistClientService; });
/* harmony import */ var _proto_ClassListServiceClientPb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../proto/ClassListServiceClientPb */ "3hIZ");
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../proto/classList_pb */ "s0aR");
/* harmony import */ var _proto_classList_pb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_proto_classList_pb__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




class ClasslistClientService {
    constructor() {
        this.classCollections = {};
        this.client = new _proto_ClassListServiceClientPb__WEBPACK_IMPORTED_MODULE_0__["classlistClient"]('http://localhost:8081');
    }
    getClassList(year) {
        console.log("Classlist service");
        var request = new _proto_classList_pb__WEBPACK_IMPORTED_MODULE_1__["classListRequest"];
        var result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        request.setYear(year);
        this.client.getClassList(request, { 'custom-header-1': 'value1' }, (err, response) => {
            if (err) {
                console.log('Error code: ' + err.code + ' "' + err.message + '"');
            }
            result.next(response.getClassesList());
            console.log("response is", result);
        });
        return result;
    }
}
ClasslistClientService.ɵfac = function ClasslistClientService_Factory(t) { return new (t || ClasslistClientService)(); };
ClasslistClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ClasslistClientService, factory: ClasslistClientService.ɵfac, providedIn: 'root' });


/***/ }),

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
/* harmony import */ var _shared_search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/search/search.component */ "9H8w");
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
        // let a: Class = new Class();
        // a.setCode("ECE 2300");
        // a.setNbr("2300");
        // a.setTitle("The Computing Technology Inside Your Smartphone");
        // a.setDescription('The organization of the computer system found within devices used in everyday living, such as smartphones and tablets. Computer systems are presented in a bottom up fashion, from bits to digital logic, computer organization, instruction sets, assembly language, and the connection to high-level languages. Discussion of the computing engines found in smart phones, tablets, and wearables.');
        // a.setCredit('3');
        // let b: Section = new Section();
        // b.setNumber("11324");
        // b.setTitle("LEC 001");
        // b.setInstructors("David Albonesi (dha7)");
        // b.getInstructors
        // b.setDays("TR");
        // let d: Section = new Section();
        // d.setNumber("1135");
        // d.setTitle("LEC 002");
        // d.setInstructors("David Albonesi (dha7)");
        // d.getInstructors
        // d.setDays("TR");
        // let c: Time = new Time();
        // c.setStart("11:225PM");
        // c.setEnd("12:40PM");
        // b.setTimes(c);
        // d.setTimes(c);
        // a.addSections(b);
        // a.addSections(d);
        // this.classes.push(a);
        // this.classes.push(a);
        // this.classes.push(a);
        // this.classes.push(a);
        // let DD = JSON.stringify(a.toObject()); 
        // let DD = a.serializeBinary()
        // console.log(DD);
        // let x = Class.deserializeBinary(DD);
        // console.log(x.getDescription());
        this.client.getClassList('SP21').asObservable().subscribe(val => {
            this.classes = val;
            console.log(this.classes);
            this.client.classCollections['SP21'] = this.classes;
        });
        // this.client.classCollections['SP21'] = this.classes;
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-search", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.classes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("classes", ctx.classes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _shared_search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"], _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_4__["RosterCardComponent"]], styles: ["#identity[_ngcontent-%COMP%] {\n  padding: 25px 0;\n  background: #fff;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n.search[_ngcontent-%COMP%] {\n  width: 35%; \n  padding: 0px 0px 20px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsMEJBQTBCO0FBQzVCIiwiZmlsZSI6InJvc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2lkZW50aXR5IHtcbiAgcGFkZGluZzogMjVweCAwO1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG5cbi5zZWFyY2gge1xuICB3aWR0aDogMzUlOyBcbiAgcGFkZGluZzogMHB4IDBweCAyMHB4IDIwcHg7XG59XG4iXX0= */"] });


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
    }
    ngOnInit() {
        this.semester = this.route.snapshot.url[1].path;
        this.group = this.route.snapshot.url[2].path;
        this.classNum = this.route.snapshot.url[3].path;
        let classes = this.client.classCollections[this.semester];
        this.class_ = classes.filter(temp => temp.getCode() == (this.group + " " + this.classNum))[0];
    }
}
RosterClassComponent.ɵfac = function RosterClassComponent_Factory(t) { return new (t || RosterClassComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_classlist_client_service__WEBPACK_IMPORTED_MODULE_2__["ClasslistClientService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
RosterClassComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RosterClassComponent, selectors: [["app-roster-class"]], decls: 1, vars: 2, template: function RosterClassComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "app-roster-card");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.class_);
    } }, directives: [_roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_4__["RosterCardComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb3N0ZXItY2xhc3MuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "s0aR":
/*!*******************************!*\
  !*** ./proto/classList_pb.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// source: classList.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = __webpack_require__(/*! google-protobuf */ "hRO2");
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.classlist.Class', null, global);
goog.exportSymbol('proto.classlist.Section', null, global);
goog.exportSymbol('proto.classlist.Time', null, global);
goog.exportSymbol('proto.classlist.classListRequest', null, global);
goog.exportSymbol('proto.classlist.classListResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.classlist.classListRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.classlist.classListRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.classlist.classListRequest.displayName = 'proto.classlist.classListRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.classlist.classListResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.classlist.classListResponse.repeatedFields_, null);
};
goog.inherits(proto.classlist.classListResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.classlist.classListResponse.displayName = 'proto.classlist.classListResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.classlist.Class = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.classlist.Class.repeatedFields_, null);
};
goog.inherits(proto.classlist.Class, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.classlist.Class.displayName = 'proto.classlist.Class';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.classlist.Section = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.classlist.Section, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.classlist.Section.displayName = 'proto.classlist.Section';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.classlist.Time = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.classlist.Time, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.classlist.Time.displayName = 'proto.classlist.Time';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.classlist.classListRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.classlist.classListRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.classlist.classListRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.classListRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    year: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.classlist.classListRequest}
 */
proto.classlist.classListRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.classlist.classListRequest;
  return proto.classlist.classListRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.classlist.classListRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.classlist.classListRequest}
 */
proto.classlist.classListRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setYear(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.classlist.classListRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.classlist.classListRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.classlist.classListRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.classListRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getYear();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string year = 1;
 * @return {string}
 */
proto.classlist.classListRequest.prototype.getYear = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.classListRequest} returns this
 */
proto.classlist.classListRequest.prototype.setYear = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.classlist.classListResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.classlist.classListResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.classlist.classListResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.classlist.classListResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.classListResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    classesList: jspb.Message.toObjectList(msg.getClassesList(),
    proto.classlist.Class.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.classlist.classListResponse}
 */
proto.classlist.classListResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.classlist.classListResponse;
  return proto.classlist.classListResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.classlist.classListResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.classlist.classListResponse}
 */
proto.classlist.classListResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.classlist.Class;
      reader.readMessage(value,proto.classlist.Class.deserializeBinaryFromReader);
      msg.addClasses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.classlist.classListResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.classlist.classListResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.classlist.classListResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.classListResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClassesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.classlist.Class.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Class classes = 1;
 * @return {!Array<!proto.classlist.Class>}
 */
proto.classlist.classListResponse.prototype.getClassesList = function() {
  return /** @type{!Array<!proto.classlist.Class>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.classlist.Class, 1));
};


/**
 * @param {!Array<!proto.classlist.Class>} value
 * @return {!proto.classlist.classListResponse} returns this
*/
proto.classlist.classListResponse.prototype.setClassesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.classlist.Class=} opt_value
 * @param {number=} opt_index
 * @return {!proto.classlist.Class}
 */
proto.classlist.classListResponse.prototype.addClasses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.classlist.Class, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.classlist.classListResponse} returns this
 */
proto.classlist.classListResponse.prototype.clearClassesList = function() {
  return this.setClassesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.classlist.Class.repeatedFields_ = [7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.classlist.Class.prototype.toObject = function(opt_includeInstance) {
  return proto.classlist.Class.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.classlist.Class} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.Class.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    code: jspb.Message.getFieldWithDefault(msg, 2, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 3, ""),
    nbr: jspb.Message.getFieldWithDefault(msg, 4, ""),
    credit: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    sectionsList: jspb.Message.toObjectList(msg.getSectionsList(),
    proto.classlist.Section.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.classlist.Class}
 */
proto.classlist.Class.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.classlist.Class;
  return proto.classlist.Class.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.classlist.Class} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.classlist.Class}
 */
proto.classlist.Class.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setCode(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNbr(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCredit(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = new proto.classlist.Section;
      reader.readMessage(value,proto.classlist.Section.deserializeBinaryFromReader);
      msg.addSections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.classlist.Class.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.classlist.Class.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.classlist.Class} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.Class.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCode();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getNbr();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCredit();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getSectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      7,
      f,
      proto.classlist.Section.serializeBinaryToWriter
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.classlist.Class.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Class} returns this
 */
proto.classlist.Class.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string code = 2;
 * @return {string}
 */
proto.classlist.Class.prototype.getCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Class} returns this
 */
proto.classlist.Class.prototype.setCode = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string subject = 3;
 * @return {string}
 */
proto.classlist.Class.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Class} returns this
 */
proto.classlist.Class.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string nbr = 4;
 * @return {string}
 */
proto.classlist.Class.prototype.getNbr = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Class} returns this
 */
proto.classlist.Class.prototype.setNbr = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string credit = 5;
 * @return {string}
 */
proto.classlist.Class.prototype.getCredit = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Class} returns this
 */
proto.classlist.Class.prototype.setCredit = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.classlist.Class.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Class} returns this
 */
proto.classlist.Class.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * repeated Section sections = 7;
 * @return {!Array<!proto.classlist.Section>}
 */
proto.classlist.Class.prototype.getSectionsList = function() {
  return /** @type{!Array<!proto.classlist.Section>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.classlist.Section, 7));
};


/**
 * @param {!Array<!proto.classlist.Section>} value
 * @return {!proto.classlist.Class} returns this
*/
proto.classlist.Class.prototype.setSectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 7, value);
};


/**
 * @param {!proto.classlist.Section=} opt_value
 * @param {number=} opt_index
 * @return {!proto.classlist.Section}
 */
proto.classlist.Class.prototype.addSections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 7, opt_value, proto.classlist.Section, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.classlist.Class} returns this
 */
proto.classlist.Class.prototype.clearSectionsList = function() {
  return this.setSectionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.classlist.Section.prototype.toObject = function(opt_includeInstance) {
  return proto.classlist.Section.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.classlist.Section} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.Section.toObject = function(includeInstance, msg) {
  var f, obj = {
    title: jspb.Message.getFieldWithDefault(msg, 1, ""),
    number: jspb.Message.getFieldWithDefault(msg, 2, ""),
    instructors: jspb.Message.getFieldWithDefault(msg, 3, ""),
    times: (f = msg.getTimes()) && proto.classlist.Time.toObject(includeInstance, f),
    days: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.classlist.Section}
 */
proto.classlist.Section.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.classlist.Section;
  return proto.classlist.Section.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.classlist.Section} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.classlist.Section}
 */
proto.classlist.Section.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNumber(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstructors(value);
      break;
    case 4:
      var value = new proto.classlist.Time;
      reader.readMessage(value,proto.classlist.Time.deserializeBinaryFromReader);
      msg.setTimes(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDays(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.classlist.Section.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.classlist.Section.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.classlist.Section} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.Section.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumber();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInstructors();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTimes();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.classlist.Time.serializeBinaryToWriter
    );
  }
  f = message.getDays();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string title = 1;
 * @return {string}
 */
proto.classlist.Section.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Section} returns this
 */
proto.classlist.Section.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string number = 2;
 * @return {string}
 */
proto.classlist.Section.prototype.getNumber = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Section} returns this
 */
proto.classlist.Section.prototype.setNumber = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string instructors = 3;
 * @return {string}
 */
proto.classlist.Section.prototype.getInstructors = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Section} returns this
 */
proto.classlist.Section.prototype.setInstructors = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Time times = 4;
 * @return {?proto.classlist.Time}
 */
proto.classlist.Section.prototype.getTimes = function() {
  return /** @type{?proto.classlist.Time} */ (
    jspb.Message.getWrapperField(this, proto.classlist.Time, 4));
};


/**
 * @param {?proto.classlist.Time|undefined} value
 * @return {!proto.classlist.Section} returns this
*/
proto.classlist.Section.prototype.setTimes = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.classlist.Section} returns this
 */
proto.classlist.Section.prototype.clearTimes = function() {
  return this.setTimes(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.classlist.Section.prototype.hasTimes = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional string days = 5;
 * @return {string}
 */
proto.classlist.Section.prototype.getDays = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Section} returns this
 */
proto.classlist.Section.prototype.setDays = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.classlist.Time.prototype.toObject = function(opt_includeInstance) {
  return proto.classlist.Time.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.classlist.Time} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.Time.toObject = function(includeInstance, msg) {
  var f, obj = {
    start: jspb.Message.getFieldWithDefault(msg, 1, ""),
    end: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.classlist.Time}
 */
proto.classlist.Time.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.classlist.Time;
  return proto.classlist.Time.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.classlist.Time} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.classlist.Time}
 */
proto.classlist.Time.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStart(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEnd(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.classlist.Time.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.classlist.Time.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.classlist.Time} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.classlist.Time.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStart();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEnd();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string start = 1;
 * @return {string}
 */
proto.classlist.Time.prototype.getStart = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Time} returns this
 */
proto.classlist.Time.prototype.setStart = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string end = 2;
 * @return {string}
 */
proto.classlist.Time.prototype.getEnd = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.classlist.Time} returns this
 */
proto.classlist.Time.prototype.setEnd = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


goog.object.extend(exports, proto.classlist);


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
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../shared/shared.module */ "PCNd");
/* harmony import */ var _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./roster-class/roster-class.component */ "gy0x");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");




// material 










// Shared 



class RosterModule {
}
RosterModule.ɵfac = function RosterModule_Factory(t) { return new (t || RosterModule)(); };
RosterModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: RosterModule });
RosterModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _roster_routing_module__WEBPACK_IMPORTED_MODULE_1__["RosterRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](RosterModule, { declarations: [_roster_roster_component__WEBPACK_IMPORTED_MODULE_2__["RosterComponent"], _roster_card_roster_card_component__WEBPACK_IMPORTED_MODULE_3__["RosterCardComponent"], _roster_class_roster_class_component__WEBPACK_IMPORTED_MODULE_15__["RosterClassComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _roster_routing_module__WEBPACK_IMPORTED_MODULE_1__["RosterRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"],
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