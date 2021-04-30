import * as jspb from 'google-protobuf'



export class classListRequest extends jspb.Message {
  getYear(): string;
  setYear(value: string): classListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): classListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: classListRequest): classListRequest.AsObject;
  static serializeBinaryToWriter(message: classListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): classListRequest;
  static deserializeBinaryFromReader(message: classListRequest, reader: jspb.BinaryReader): classListRequest;
}

export namespace classListRequest {
  export type AsObject = {
    year: string,
  }
}

export class classListResponse extends jspb.Message {
  getClassesList(): Array<Class>;
  setClassesList(value: Array<Class>): classListResponse;
  clearClassesList(): classListResponse;
  addClasses(value?: Class, index?: number): Class;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): classListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: classListResponse): classListResponse.AsObject;
  static serializeBinaryToWriter(message: classListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): classListResponse;
  static deserializeBinaryFromReader(message: classListResponse, reader: jspb.BinaryReader): classListResponse;
}

export namespace classListResponse {
  export type AsObject = {
    classesList: Array<Class.AsObject>,
  }
}

export class Class extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Class;

  getCode(): string;
  setCode(value: string): Class;

  getSubject(): string;
  setSubject(value: string): Class;

  getNbr(): string;
  setNbr(value: string): Class;

  getCredit(): string;
  setCredit(value: string): Class;

  getDescription(): string;
  setDescription(value: string): Class;

  getSectionsList(): Array<Section>;
  setSectionsList(value: Array<Section>): Class;
  clearSectionsList(): Class;
  addSections(value?: Section, index?: number): Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Class.AsObject;
  static toObject(includeInstance: boolean, msg: Class): Class.AsObject;
  static serializeBinaryToWriter(message: Class, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Class;
  static deserializeBinaryFromReader(message: Class, reader: jspb.BinaryReader): Class;
}

export namespace Class {
  export type AsObject = {
    title: string,
    code: string,
    subject: string,
    nbr: string,
    credit: string,
    description: string,
    sectionsList: Array<Section.AsObject>,
  }
}

export class Section extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Section;

  getNumber(): string;
  setNumber(value: string): Section;

  getInstructors(): string;
  setInstructors(value: string): Section;

  getTimes(): Time | undefined;
  setTimes(value?: Time): Section;
  hasTimes(): boolean;
  clearTimes(): Section;

  getDays(): string;
  setDays(value: string): Section;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Section.AsObject;
  static toObject(includeInstance: boolean, msg: Section): Section.AsObject;
  static serializeBinaryToWriter(message: Section, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Section;
  static deserializeBinaryFromReader(message: Section, reader: jspb.BinaryReader): Section;
}

export namespace Section {
  export type AsObject = {
    title: string,
    number: string,
    instructors: string,
    times?: Time.AsObject,
    days: string,
  }
}

export class Time extends jspb.Message {
  getStart(): string;
  setStart(value: string): Time;

  getEnd(): string;
  setEnd(value: string): Time;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Time.AsObject;
  static toObject(includeInstance: boolean, msg: Time): Time.AsObject;
  static serializeBinaryToWriter(message: Time, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Time;
  static deserializeBinaryFromReader(message: Time, reader: jspb.BinaryReader): Time;
}

export namespace Time {
  export type AsObject = {
    start: string,
    end: string,
  }
}

