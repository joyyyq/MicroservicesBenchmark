import * as grpcWeb from 'grpc-web';

import { Injectable } from '@angular/core';

import {classlistClient} from '../../../proto/ClassListServiceClientPb';

import {Class, Section, Time, classListRequest, classListResponse,} from '../../../proto/classList_pb';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClasslistClientService {

  private client: classlistClient;
  classCollections: {[val: string]: Class[]} = {};

  constructor() {this.client = new classlistClient('http://localhost:8081');}
  
  getClassList(year: string): BehaviorSubject<Class[]> {
    console.log("Classlist service");
    var request = new classListRequest; 
    var result = new BehaviorSubject<Class[]>([]);
    request.setYear(year);
    this.client.getClassList(
      request,{'custom-header-1': 'value1'},
      ( err: grpcWeb.Error, response: classListResponse ) => {
        if (err) {
          console.log('Error code: ' + err.code + ' "' + err.message + '"');
        }
        result.next(response.getClassesList());
        console.log("response is", result);
      }
    )
    return result;
  }
}

