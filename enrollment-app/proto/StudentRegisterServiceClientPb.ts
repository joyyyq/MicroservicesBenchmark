/**
 * @fileoverview gRPC-Web generated client stub for register
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as studentRegister_pb from './studentRegister_pb';


export class registerClient {
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

  methodInforegister = new grpcWeb.AbstractClientBase.MethodInfo(
    studentRegister_pb.Response,
    (request: studentRegister_pb.Request) => {
      return request.serializeBinary();
    },
    studentRegister_pb.Response.deserializeBinary
  );

  register(
    request: studentRegister_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<studentRegister_pb.Response>;

  register(
    request: studentRegister_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studentRegister_pb.Response) => void): grpcWeb.ClientReadableStream<studentRegister_pb.Response>;

  register(
    request: studentRegister_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studentRegister_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/register.register/register',
        request,
        metadata || {},
        this.methodInforegister,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/register.register/register',
    request,
    metadata || {},
    this.methodInforegister);
  }

  methodInfovalidateUsername = new grpcWeb.AbstractClientBase.MethodInfo(
    studentRegister_pb.Response,
    (request: studentRegister_pb.Request) => {
      return request.serializeBinary();
    },
    studentRegister_pb.Response.deserializeBinary
  );

  validateUsername(
    request: studentRegister_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<studentRegister_pb.Response>;

  validateUsername(
    request: studentRegister_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studentRegister_pb.Response) => void): grpcWeb.ClientReadableStream<studentRegister_pb.Response>;

  validateUsername(
    request: studentRegister_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studentRegister_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/register.register/validateUsername',
        request,
        metadata || {},
        this.methodInfovalidateUsername,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/register.register/validateUsername',
    request,
    metadata || {},
    this.methodInfovalidateUsername);
  }

  methodInfovalidatePassword = new grpcWeb.AbstractClientBase.MethodInfo(
    studentRegister_pb.Response,
    (request: studentRegister_pb.Request) => {
      return request.serializeBinary();
    },
    studentRegister_pb.Response.deserializeBinary
  );

  validatePassword(
    request: studentRegister_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<studentRegister_pb.Response>;

  validatePassword(
    request: studentRegister_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: studentRegister_pb.Response) => void): grpcWeb.ClientReadableStream<studentRegister_pb.Response>;

  validatePassword(
    request: studentRegister_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: studentRegister_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/register.register/validatePassword',
        request,
        metadata || {},
        this.methodInfovalidatePassword,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/register.register/validatePassword',
    request,
    metadata || {},
    this.methodInfovalidatePassword);
  }

}

