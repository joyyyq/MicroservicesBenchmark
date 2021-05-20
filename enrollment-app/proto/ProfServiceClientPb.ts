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
    prof_pb.profResponse,
    (request: prof_pb.profRequest) => {
      return request.serializeBinary();
    },
    prof_pb.profResponse.deserializeBinary
  );

  getProf(
    request: prof_pb.profRequest,
    metadata: grpcWeb.Metadata | null): Promise<prof_pb.profResponse>;

  getProf(
    request: prof_pb.profRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: prof_pb.profResponse) => void): grpcWeb.ClientReadableStream<prof_pb.profResponse>;

  getProf(
    request: prof_pb.profRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: prof_pb.profResponse) => void) {
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

  methodInfogetProfList = new grpcWeb.AbstractClientBase.MethodInfo(
    prof_pb.profListResponse,
    (request: prof_pb.profListRequest) => {
      return request.serializeBinary();
    },
    prof_pb.profListResponse.deserializeBinary
  );

  getProfList(
    request: prof_pb.profListRequest,
    metadata: grpcWeb.Metadata | null): Promise<prof_pb.profListResponse>;

  getProfList(
    request: prof_pb.profListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: prof_pb.profListResponse) => void): grpcWeb.ClientReadableStream<prof_pb.profListResponse>;

  getProfList(
    request: prof_pb.profListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: prof_pb.profListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/prof.prof/getProfList',
        request,
        metadata || {},
        this.methodInfogetProfList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/prof.prof/getProfList',
    request,
    metadata || {},
    this.methodInfogetProfList);
  }

}

