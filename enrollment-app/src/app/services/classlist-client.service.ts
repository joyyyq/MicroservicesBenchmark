import * as grpcWeb from 'grpc-web';

import { Injectable } from '@angular/core';

import {classlistClient} from '../../../proto/ClassListServiceClientPb';

import {Class, classListRequest, classListResponse} from '../../../proto/classList_pb';

@Injectable({
  providedIn: 'root'
})
export class ClasslistClientService {

  private client: classlistClient;
  constructor() {this.client = new classlistClient('http://localhost:8081');}

  getClassList(year: string): Class[] {
    console.log("Classlist service");
    var request = new classListRequest; 
    request.setYear(year);
    let classes: Class[] = [];

    this.client.getClassList(
      request,{'custom-header-1': 'value1'},
      ( err: grpcWeb.Error, response: classListResponse) => {
        if (err) {
         console.log('Error code: ' + err.code + ' "' + err.message + '"');
        } 
        classes = response.getClassesList();
        // console.log(classes);
      }
    )

    return classes; 
  }
}
