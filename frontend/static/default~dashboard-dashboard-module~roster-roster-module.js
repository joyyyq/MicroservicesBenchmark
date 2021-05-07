(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~dashboard-dashboard-module~roster-roster-module"],{

/***/ "3hIZ":
/*!*******************************************!*\
  !*** ./proto/ClassListServiceClientPb.ts ***!
  \*******************************************/
/*! exports provided: classlistClient */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classlistClient", function() { return classlistClient; });
/* harmony import */ var grpc_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! grpc-web */ "UVcI");
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
        var request = new _proto_classList_pb__WEBPACK_IMPORTED_MODULE_1__["classListRequest"];
        var result = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        request.setYear(year);
        this.client.getClassList(request, { 'custom-header-1': 'value1' }, (err, response) => {
            if (err) {
                console.log('Error code: ' + err.code + ' "' + err.message + '"');
            }
            result.next(response.getClassesList());
        });
        return result;
    }
}
ClasslistClientService.ɵfac = function ClasslistClientService_Factory(t) { return new (t || ClasslistClientService)(); };
ClasslistClientService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ClasslistClientService, factory: ClasslistClientService.ɵfac, providedIn: 'root' });


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


/***/ })

}]);
//# sourceMappingURL=default~dashboard-dashboard-module~roster-roster-module.js.map