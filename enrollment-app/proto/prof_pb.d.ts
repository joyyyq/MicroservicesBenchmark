import * as jspb from 'google-protobuf'



export class profRequest extends jspb.Message {
  getName(): string;
  setName(value: string): profRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): profRequest.AsObject;
  static toObject(includeInstance: boolean, msg: profRequest): profRequest.AsObject;
  static serializeBinaryToWriter(message: profRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): profRequest;
  static deserializeBinaryFromReader(message: profRequest, reader: jspb.BinaryReader): profRequest;
}

export namespace profRequest {
  export type AsObject = {
    name: string,
  }
}

export class profResponse extends jspb.Message {
  getProf(): Professor;
  setProf(value?: Professor): profResponse;
  hasProf(): boolean;
  clearProf(): profResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): profResponse.AsObject;
  static toObject(includeInstance: boolean, msg: profResponse): profResponse.AsObject;
  static serializeBinaryToWriter(message: profResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): profResponse;
  static deserializeBinaryFromReader(message: profResponse, reader: jspb.BinaryReader): profResponse;
}

export namespace profResponse {
  export type AsObject = {
    prof?: Professor.AsObject,
  }
}

export class profListRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): profListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: profListRequest): profListRequest.AsObject;
  static serializeBinaryToWriter(message: profListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): profListRequest;
  static deserializeBinaryFromReader(message: profListRequest, reader: jspb.BinaryReader): profListRequest;
}

export namespace profListRequest {
  export type AsObject = {
  }
}

export class profListResponse extends jspb.Message {
  getProfsList(): Array<Professor>;
  setProfsList(value: Array<Professor>): profListResponse;
  clearProfsList(): profListResponse;
  addProfs(value?: Professor, index?: number): Professor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): profListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: profListResponse): profListResponse.AsObject;
  static serializeBinaryToWriter(message: profListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): profListResponse;
  static deserializeBinaryFromReader(message: profListResponse, reader: jspb.BinaryReader): profListResponse;
}

export namespace profListResponse {
  export type AsObject = {
    profsList: Array<Professor.AsObject>,
  }
}

export class Professor extends jspb.Message {
  getName(): string;
  setName(value: string): Professor;

  getRating(): string;
  setRating(value: string): Professor;

  getWouldtakeagain(): string;
  setWouldtakeagain(value: string): Professor;

  getLevelofdifficulty(): string;
  setLevelofdifficulty(value: string): Professor;

  getToptags(): string;
  setToptags(value: string): Professor;

  getReviews(): string;
  setReviews(value: string): Professor;

  getNumreviews(): string;
  setNumreviews(value: string): Professor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Professor.AsObject;
  static toObject(includeInstance: boolean, msg: Professor): Professor.AsObject;
  static serializeBinaryToWriter(message: Professor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Professor;
  static deserializeBinaryFromReader(message: Professor, reader: jspb.BinaryReader): Professor;
}

export namespace Professor {
  export type AsObject = {
    name: string,
    rating: string,
    wouldtakeagain: string,
    levelofdifficulty: string,
    toptags: string,
    reviews: string,
    numreviews: string,
  }
}

