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
  getName(): string;
  setName(value: string): profResponse;

  getRating(): number;
  setRating(value: number): profResponse;

  getWouldtakeagain(): number;
  setWouldtakeagain(value: number): profResponse;

  getLevelofdifficulty(): number;
  setLevelofdifficulty(value: number): profResponse;

  getToptagsList(): Array<string>;
  setToptagsList(value: Array<string>): profResponse;
  clearToptagsList(): profResponse;
  addToptags(value: string, index?: number): profResponse;

  getSimilarprofsList(): Array<Professor>;
  setSimilarprofsList(value: Array<Professor>): profResponse;
  clearSimilarprofsList(): profResponse;
  addSimilarprofs(value?: Professor, index?: number): Professor;

  getReviews(): string;
  setReviews(value: string): profResponse;

  getNumreviews(): number;
  setNumreviews(value: number): profResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): profResponse.AsObject;
  static toObject(includeInstance: boolean, msg: profResponse): profResponse.AsObject;
  static serializeBinaryToWriter(message: profResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): profResponse;
  static deserializeBinaryFromReader(message: profResponse, reader: jspb.BinaryReader): profResponse;
}

export namespace profResponse {
  export type AsObject = {
    name: string,
    rating: number,
    wouldtakeagain: number,
    levelofdifficulty: number,
    toptagsList: Array<string>,
    similarprofsList: Array<Professor.AsObject>,
    reviews: string,
    numreviews: number,
  }
}

export class Professor extends jspb.Message {
  getRating(): number;
  setRating(value: number): Professor;

  getName(): string;
  setName(value: string): Professor;

  getLink(): string;
  setLink(value: string): Professor;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Professor.AsObject;
  static toObject(includeInstance: boolean, msg: Professor): Professor.AsObject;
  static serializeBinaryToWriter(message: Professor, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Professor;
  static deserializeBinaryFromReader(message: Professor, reader: jspb.BinaryReader): Professor;
}

export namespace Professor {
  export type AsObject = {
    rating: number,
    name: string,
    link: string,
  }
}

