import * as grpcWeb from 'grpc-web';

import { Injectable } from '@angular/core';

import {classlistClient} from '../../../proto/ClassListServiceClientPb';

import {Class, Section, Time, classListRequest, classListResponse} from '../../../proto/classList_pb';

@Injectable({
  providedIn: 'root'
})
export class ClasslistClientService {

  private client: classlistClient;
  constructor() {this.client = new classlistClient('http://localhost:8081');}

  async getClassList(year: string) {
    console.log("Classlist service");
    var request = new classListRequest; 
    request.setYear(year);
    let result: any[] = [];
    var response = this.client.getClassList(request,{'custom-header-1': 'value1'})
    await response.then( (res) => {
      console.log("Waiting ... ")
      console.log(res)
      console.log("Done")
    })
  }
}
