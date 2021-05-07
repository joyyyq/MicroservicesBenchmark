import * as jspb from 'google-protobuf'



export class classRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): classRequest;

  getCoursecode(): string;
  setCoursecode(value: string): classRequest;

  getSectionlistList(): Array<section>;
  setSectionlistList(value: Array<section>): classRequest;
  clearSectionlistList(): classRequest;
  addSectionlist(value?: section, index?: number): section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): classRequest.AsObject;
  static toObject(includeInstance: boolean, msg: classRequest): classRequest.AsObject;
  static serializeBinaryToWriter(message: classRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): classRequest;
  static deserializeBinaryFromReader(message: classRequest, reader: jspb.BinaryReader): classRequest;
}

export namespace classRequest {
  export type AsObject = {
    username: string,
    coursecode: string,
    sectionlistList: Array<section.AsObject>,
  }
}

export class classResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): classResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): classResponse.AsObject;
  static toObject(includeInstance: boolean, msg: classResponse): classResponse.AsObject;
  static serializeBinaryToWriter(message: classResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): classResponse;
  static deserializeBinaryFromReader(message: classResponse, reader: jspb.BinaryReader): classResponse;
}

export namespace classResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class section extends jspb.Message {
  getSec(): string;
  setSec(value: string): section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): section.AsObject;
  static toObject(includeInstance: boolean, msg: section): section.AsObject;
  static serializeBinaryToWriter(message: section, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): section;
  static deserializeBinaryFromReader(message: section, reader: jspb.BinaryReader): section;
}

export namespace section {
  export type AsObject = {
    sec: string,
  }
}

export class cartRequest extends jspb.Message {
  getUsername(): string;
  setUsername(value: string): cartRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): cartRequest.AsObject;
  static toObject(includeInstance: boolean, msg: cartRequest): cartRequest.AsObject;
  static serializeBinaryToWriter(message: cartRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): cartRequest;
  static deserializeBinaryFromReader(message: cartRequest, reader: jspb.BinaryReader): cartRequest;
}

export namespace cartRequest {
  export type AsObject = {
    username: string,
  }
}

export class cartResponse extends jspb.Message {
  getListList(): Array<cartSingleResponse>;
  setListList(value: Array<cartSingleResponse>): cartResponse;
  clearListList(): cartResponse;
  addList(value?: cartSingleResponse, index?: number): cartSingleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): cartResponse.AsObject;
  static toObject(includeInstance: boolean, msg: cartResponse): cartResponse.AsObject;
  static serializeBinaryToWriter(message: cartResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): cartResponse;
  static deserializeBinaryFromReader(message: cartResponse, reader: jspb.BinaryReader): cartResponse;
}

export namespace cartResponse {
  export type AsObject = {
    listList: Array<cartSingleResponse.AsObject>,
  }
}

export class cartSingleResponse extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): cartSingleResponse;

  getSection(): string;
  setSection(value: string): cartSingleResponse;

  getClassnumber(): string;
  setClassnumber(value: string): cartSingleResponse;

  getDays(): string;
  setDays(value: string): cartSingleResponse;

  getTime(): string;
  setTime(value: string): cartSingleResponse;

  getInstructor(): string;
  setInstructor(value: string): cartSingleResponse;

  getCredit(): number;
  setCredit(value: number): cartSingleResponse;

  getCoursecode(): string;
  setCoursecode(value: string): cartSingleResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): cartSingleResponse.AsObject;
  static toObject(includeInstance: boolean, msg: cartSingleResponse): cartSingleResponse.AsObject;
  static serializeBinaryToWriter(message: cartSingleResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): cartSingleResponse;
  static deserializeBinaryFromReader(message: cartSingleResponse, reader: jspb.BinaryReader): cartSingleResponse;
}

export namespace cartSingleResponse {
  export type AsObject = {
    title: string,
    section: string,
    classnumber: string,
    days: string,
    time: string,
    instructor: string,
    credit: number,
    coursecode: string,
  }
}

