/**
 * @fileoverview gRPC-Web generated client stub for cart
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as studentCart_pb from './studentCart_pb';


export class cartClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodInfoaddClass = new grpcWeb.AbstractClientBase.MethodInfo(
    studentCart_pb.classResponse,
    (request: studentCart_pb.classRequest) => {
      return request.serializeBinary();
    },
    studentCart_pb.classResponse.deserializeBinary
  );

  addClass(
    request: studentCart_pb.classRequest,
    metadata: grpcWeb.Metadata | null): Promise<studentCart_pb.classResponse>;

  addClass(
    request: studentCart_pb.classRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studentCart_pb.classResponse) => void): grpcWeb.ClientReadableStream<studentCart_pb.classResponse>;

  addClass(
    request: studentCart_pb.classRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studentCart_pb.classResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cart.cart/addClass',
        request,
        metadata || {},
        this.methodInfoaddClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cart.cart/addClass',
    request,
    metadata || {},
    this.methodInfoaddClass);
  }

  methodInfodropClass = new grpcWeb.AbstractClientBase.MethodInfo(
    studentCart_pb.classResponse,
    (request: studentCart_pb.classRequest) => {
      return request.serializeBinary();
    },
    studentCart_pb.classResponse.deserializeBinary
  );

  dropClass(
    request: studentCart_pb.classRequest,
    metadata: grpcWeb.Metadata | null): Promise<studentCart_pb.classResponse>;

  dropClass(
    request: studentCart_pb.classRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studentCart_pb.classResponse) => void): grpcWeb.ClientReadableStream<studentCart_pb.classResponse>;

  dropClass(
    request: studentCart_pb.classRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studentCart_pb.classResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cart.cart/dropClass',
        request,
        metadata || {},
        this.methodInfodropClass,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cart.cart/dropClass',
    request,
    metadata || {},
    this.methodInfodropClass);
  }

  methodInfogetCart = new grpcWeb.AbstractClientBase.MethodInfo(
    studentCart_pb.cartResponse,
    (request: studentCart_pb.cartRequest) => {
      return request.serializeBinary();
    },
    studentCart_pb.cartResponse.deserializeBinary
  );

  getCart(
    request: studentCart_pb.cartRequest,
    metadata: grpcWeb.Metadata | null): Promise<studentCart_pb.cartResponse>;

  getCart(
    request: studentCart_pb.cartRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studentCart_pb.cartResponse) => void): grpcWeb.ClientReadableStream<studentCart_pb.cartResponse>;

  getCart(
    request: studentCart_pb.cartRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studentCart_pb.cartResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/cart.cart/getCart',
        request,
        metadata || {},
        this.methodInfogetCart,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/cart.cart/getCart',
    request,
    metadata || {},
    this.methodInfogetCart);
  }

}

