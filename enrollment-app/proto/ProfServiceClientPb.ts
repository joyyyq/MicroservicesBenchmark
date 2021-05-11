/**
 * @fileoverview gRPC-Web generated client stub for prof
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as prof_pb from './prof_pb';


export class profClient {
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

  methodInfogetProf = new grpcWeb.AbstractClientBase.MethodInfo(
    prof_pb.Response,
    (request: prof_pb.Request) => {
      return request.serializeBinary();
    },
    prof_pb.Response.deserializeBinary
  );

  getProf(
    request: prof_pb.Request,
    metadata: grpcWeb.Metadata | null): Promise<prof_pb.Response>;

  getProf(
    request: prof_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: prof_pb.Response) => void): grpcWeb.ClientReadableStream<prof_pb.Response>;

  getProf(
    request: prof_pb.Request,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: prof_pb.Response) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/prof.prof/getProf',
        request,
        metadata || {},
        this.methodInfogetProf,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/prof.prof/getProf',
    request,
    metadata || {},
    this.methodInfogetProf);
  }

}

