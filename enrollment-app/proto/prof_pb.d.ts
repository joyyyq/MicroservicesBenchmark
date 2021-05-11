import * as jspb from 'google-protobuf'



export class Request extends jspb.Message {
  getName(): string;
  setName(value: string): Request;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Request.AsObject;
  static toObject(includeInstance: boolean, msg: Request): Request.AsObject;
  static serializeBinaryToWriter(message: Request, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Request;
  static deserializeBinaryFromReader(message: Request, reader: jspb.BinaryReader): Request;
}

export namespace Request {
  export type AsObject = {
    name: string,
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

export class Response extends jspb.Message {
  getName(): string;
  setName(value: string): Response;

  getRating(): number;
  setRating(value: number): Response;

  getWouldtakeagain(): number;
  setWouldtakeagain(value: number): Response;

  getLevelofdifficulty(): number;
  setLevelofdifficulty(value: number): Response;

  getToptagsList(): Array<string>;
  setToptagsList(value: Array<string>): Response;
  clearToptagsList(): Response;
  addToptags(value: string, index?: number): Response;

  getSimilarprofsList(): Array<Professor>;
  setSimilarprofsList(value: Array<Professor>): Response;
  clearSimilarprofsList(): Response;
  addSimilarprofs(value?: Professor, index?: number): Professor;

  getReviews(): string;
  setReviews(value: string): Response;

  getNumreviews(): number;
  setNumreviews(value: number): Response;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Response.AsObject;
  static toObject(includeInstance: boolean, msg: Response): Response.AsObject;
  static serializeBinaryToWriter(message: Response, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Response;
  static deserializeBinaryFromReader(message: Response, reader: jspb.BinaryReader): Response;
}

export namespace Response {
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

