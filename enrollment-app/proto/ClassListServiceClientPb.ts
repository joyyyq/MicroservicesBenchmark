/**
 * @fileoverview gRPC-Web generated client stub for classlist
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as classList_pb from './classList_pb';


export class classlistClient {
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

  methodInfogetClassList = new grpcWeb.AbstractClientBase.MethodInfo(
    classList_pb.classListResponse,
    (request: classList_pb.classListRequest) => {
      return request.serializeBinary();
    },
    classList_pb.classListResponse.deserializeBinary
  );

  getClassList(
    request: classList_pb.classListRequest,
    metadata: grpcWeb.Metadata | null): Promise<classList_pb.classListResponse>;

  getClassList(
    request: classList_pb.classListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.Error,
               response: classList_pb.classListResponse) => void): grpcWeb.ClientReadableStream<classList_pb.classListResponse>;

  getClassList(
    request: classList_pb.classListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.Error,
               response: classList_pb.classListResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/classlist.classlist/getClassList',
        request,
        metadata || {},
        this.methodInfogetClassList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/classlist.classlist/getClassList',
    request,
    metadata || {},
    this.methodInfogetClassList);
  }

}

