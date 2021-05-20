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

  getRating(): string;
  setRating(value: string): profResponse;

  getWouldtakeagain(): string;
  setWouldtakeagain(value: string): profResponse;

  getLevelofdifficulty(): string;
  setLevelofdifficulty(value: string): profResponse;

  getToptagsList(): Array<string>;
  setToptagsList(value: Array<string>): profResponse;
  clearToptagsList(): profResponse;
  addToptags(value: string, index?: number): profResponse;

  getReviews(): string;
  setReviews(value: string): profResponse;

  getNumreviews(): string;
  setNumreviews(value: string): profResponse;

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
    rating: string,
    wouldtakeagain: string,
    levelofdifficulty: string,
    toptagsList: Array<string>,
    reviews: string,
    numreviews: string,
  }
}

