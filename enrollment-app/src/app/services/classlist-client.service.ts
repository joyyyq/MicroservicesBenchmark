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
  constructor() {this.client = new classlistClient('http://localhost:8081');}
  static addMessage(message: string, cssClass: string) {
    //$('#first').after($('<div/>').addClass('row').append($('<h2/>').append(
 //  $('<span/>').addClass('label ' + cssClass).text(message))));
 }
 static ERROR(message: string) {
     this.addMessage(message, 'label-primary pull-left');
 }
  getClassList(year: string): BehaviorSubject<Class[]> {
    console.log("Classlist service");
    var request = new classListRequest; 
    var result = new BehaviorSubject<Class[]>([]);
    request.setYear(year);
    this.client.getClassList(
      request,{'custom-header-1': 'value1'},
      ( err: grpcWeb.Error, response: classListResponse ) => {
        if (err) {
          ClasslistClientService.ERROR('Error code: ' + err.code + ' "' + err.message + '"');
        }
        result.next(response.getClassesList());
        console.log("response is", result);
      }
    )
    return result;
  }
}

