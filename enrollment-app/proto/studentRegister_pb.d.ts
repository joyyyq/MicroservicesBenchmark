import * as jspb from 'google-protobuf'



export class Request extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): Request;

  getPassword(): string;
  setPassword(value: string): Request;

  getFirstname(): string;
  setFirstname(value: string): Request;

  getLastname(): string;
  setLastname(value: string): Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    username: string,
    password: string,
    firstname: string,
    lastname: string,
  }
}

export class Response extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
  export type AsObject = {
    success: boolean,
  }
}

