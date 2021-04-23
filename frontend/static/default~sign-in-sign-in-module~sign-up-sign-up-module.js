(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~sign-in-sign-in-module~sign-up-sign-up-module"],{

/***/ "/Q+I":
/*!*****************************************************!*\
  !*** ./src/app/services/register-client.service.ts ***!
  \*****************************************************/
/*! exports provided: RegisterClientService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterClientService", function() { return RegisterClientService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _proto_StudentRegisterServiceClientPb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../proto/StudentRegisterServiceClientPb */ "9jl+");
/* harmony import */ var _proto_studentRegister_pb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../proto/studentRegister_pb */ "fanR");
/* harmony import */ var _proto_studentRegister_pb__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_proto_studentRegister_pb__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");

// Option 2: import_style=typescript



const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
class RegisterClientService {
    constructor() {
        this.validationResult = false;
        this.validationPwdResult = false;
        this.client = new _proto_StudentRegisterServiceClientPb__WEBPACK_IMPORTED_MODULE_1__["registerClient"]('http://localhost:8081');
    }
    static addMessage(message, cssClass) {
        //$('#first').after($('<div/>').addClass('row').append($('<h2/>').append(
        //  $('<span/>').addClass('label ' + cssClass).text(message))));
    }
    static ERROR(message) {
        this.addMessage(message, 'label-primary pull-left');
    }
    updateResult(status) {
        this.validationResult = status;
    }
    updatePwdResult(status) {
        this.validationPwdResult = status;
    }
    checkUsername(name) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("check username " + name);
            var request = new _proto_studentRegister_pb__WEBPACK_IMPORTED_MODULE_2__["Request"];
            request.setUsername(name);
            var response = this.client.validateUsername(request, { 'custom-header-1': 'value1' });
            yield response.then((res) => {
                var result = res.getSuccess();
                this.updateResult(result);
            });
            wait(4 * 1000).then(() => {
                console.log("wresult " + this.validationResult);
            }).catch(() => {
                console.log("Wait is over, callback");
            });
            console.log("ccheckUsername " + this.validationResult);
            return this.validationResult;
        });
    }
    checkPassword(name, pwd) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log("check password " + name);
            var request = new _proto_studentRegister_pb__WEBPACK_IMPORTED_MODULE_2__["Request"];
            request.setUsername(name);
            request.setPassword(pwd);
            var response = this.client.validatePassword(request, { 'custom-header-1': 'value1' });
            yield response.then((res) => {
                var result = res.getSuccess();
                this.updatePwdResult(result);
                console.log("checkPassword result " + this.validationPwdResult);
            });
            wait(4 * 1000).then(() => {
                console.log("wresult Pwd " + this.validationPwdResult);
            }).catch(() => {
                console.log("Wait is over, callback");
            });
            console.log("ccheckPassword " + this.validationPwdResult);
            return this.validationPwdResult;
        });
    }
    register(username, password, firstname, lastname) {
        console.log("register service");
        var request = new _proto_studentRegister_pb__WEBPACK_IMPORTED_MODULE_2__["Request"];
        request.setUsername(username);
        request.setPassword(password);
        request.setFirstname(firstname);
        request.setLastname(lastname);
        let result = true;
        this.client.register(request, { 'custom-header-1': 'value1' }, (err, response) => {
            if (err) {
                RegisterClientService.ERROR('Error code: ' + err.code + ' "' + err.message + '"');
            }
            result = response.getSuccess();
        });
        return result;
    }
}
RegisterClientService.ɵfac = function RegisterClientService_Factory(t) { return new (t || RegisterClientService)(); };
RegisterClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: RegisterClientService, factory: RegisterClientService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "9jl+":
/*!*************************************************!*\
  !*** ./proto/StudentRegisterServiceClientPb.ts ***!
  \*************************************************/
/*! exports provided: registerClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerClient", function() { return registerClient; });
/* harmony import */ var grpc_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grpc-web */ "TxjO");
/* harmony import */ var grpc_web__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(grpc_web__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _studentRegister_pb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./studentRegister_pb */ "fanR");
/* harmony import */ var _studentRegister_pb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_studentRegister_pb__WEBPACK_IMPORTED_MODULE_1__);
/**
 * @fileoverview gRPC-Web generated client stub for register
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck


class registerClient {
    constructor(hostname, credentials, options) {
        this.methodInforegister = new grpc_web__WEBPACK_IMPORTED_MODULE_0__["AbstractClientBase"].MethodInfo(_studentRegister_pb__WEBPACK_IMPORTED_MODULE_1__["Response"], (request) => {
            return request.serializeBinary();
        }, _studentRegister_pb__WEBPACK_IMPORTED_MODULE_1__["Response"].deserializeBinary);
        this.methodInfovalidateUsername = new grpc_web__WEBPACK_IMPORTED_MODULE_0__["AbstractClientBase"].MethodInfo(_studentRegister_pb__WEBPACK_IMPORTED_MODULE_1__["Response"], (request) => {
            return request.serializeBinary();
        }, _studentRegister_pb__WEBPACK_IMPORTED_MODULE_1__["Response"].deserializeBinary);
        this.methodInfovalidatePassword = new grpc_web__WEBPACK_IMPORTED_MODULE_0__["AbstractClientBase"].MethodInfo(_studentRegister_pb__WEBPACK_IMPORTED_MODULE_1__["Response"], (request) => {
            return request.serializeBinary();
        }, _studentRegister_pb__WEBPACK_IMPORTED_MODULE_1__["Response"].deserializeBinary);
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
    register(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/register.register/register', request, metadata || {}, this.methodInforegister, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/register.register/register', request, metadata || {}, this.methodInforegister);
    }
    validateUsername(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/register.register/validateUsername', request, metadata || {}, this.methodInfovalidateUsername, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/register.register/validateUsername', request, metadata || {}, this.methodInfovalidateUsername);
    }
    validatePassword(request, metadata, callback) {
        if (callback !== undefined) {
            return this.client_.rpcCall(this.hostname_ +
                '/register.register/validatePassword', request, metadata || {}, this.methodInfovalidatePassword, callback);
        }
        return this.client_.unaryCall(this.hostname_ +
            '/register.register/validatePassword', request, metadata || {}, this.methodInfovalidatePassword);
    }
}


/***/ }),

/***/ "fanR":
/*!*************************************!*\
  !*** ./proto/studentRegister_pb.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// source: studentRegister.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
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

goog.exportSymbol('proto.register.Request', null, global);
goog.exportSymbol('proto.register.Response', null, global);
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
proto.register.Request = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.register.Request, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.register.Request.displayName = 'proto.register.Request';
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
proto.register.Response = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.register.Response, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.register.Response.displayName = 'proto.register.Response';
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
proto.register.Request.prototype.toObject = function(opt_includeInstance) {
  return proto.register.Request.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.register.Request} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.register.Request.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, ""),
    firstname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    lastname: jspb.Message.getFieldWithDefault(msg, 4, "")
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
 * @return {!proto.register.Request}
 */
proto.register.Request.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.register.Request;
  return proto.register.Request.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.register.Request} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.register.Request}
 */
proto.register.Request.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFirstname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setLastname(value);
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
proto.register.Request.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.register.Request.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.register.Request} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.register.Request.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFirstname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getLastname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string userName = 1;
 * @return {string}
 */
proto.register.Request.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.register.Request} returns this
 */
proto.register.Request.prototype.setUsername = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.register.Request.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.register.Request} returns this
 */
proto.register.Request.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string firstName = 3;
 * @return {string}
 */
proto.register.Request.prototype.getFirstname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.register.Request} returns this
 */
proto.register.Request.prototype.setFirstname = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string lastName = 4;
 * @return {string}
 */
proto.register.Request.prototype.getLastname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.register.Request} returns this
 */
proto.register.Request.prototype.setLastname = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
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
proto.register.Response.prototype.toObject = function(opt_includeInstance) {
  return proto.register.Response.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.register.Response} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.register.Response.toObject = function(includeInstance, msg) {
  var f, obj = {
    success: jspb.Message.getBooleanFieldWithDefault(msg, 1, false)
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
 * @return {!proto.register.Response}
 */
proto.register.Response.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.register.Response;
  return proto.register.Response.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.register.Response} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.register.Response}
 */
proto.register.Response.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuccess(value);
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
proto.register.Response.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.register.Response.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.register.Response} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.register.Response.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuccess();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
};


/**
 * optional bool success = 1;
 * @return {boolean}
 */
proto.register.Response.prototype.getSuccess = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 1, false));
};


/**
 * @param {boolean} value
 * @return {!proto.register.Response} returns this
 */
proto.register.Response.prototype.setSuccess = function(value) {
  return jspb.Message.setProto3BooleanField(this, 1, value);
};


goog.object.extend(exports, proto.register);


/***/ })

}]);
//# sourceMappingURL=default~sign-in-sign-in-module~sign-up-sign-up-module.js.map