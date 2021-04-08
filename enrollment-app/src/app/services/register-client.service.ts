//import { element } from 'protractor';
import * as grpcWeb from 'grpc-web';
import { credentials } from "grpc"
//import * as $ from 'jquery';
// Option 2: import_style=typescript
import {registerClient} from '../../../proto/StudentRegisterServiceClientPb';

import {Request, Response} from '../../../proto/studentRegister_pb';

import { Injectable } from '@angular/core';

type profile = {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}

@Injectable({
  providedIn: 'root'
})
export class RegisterClientService {
  private client: registerClient;
  //constructor(public service: registerClient) { 'http://localhost:8080' }
  constructor() {this.client = new registerClient(
    'http://localhost:8081');}
  
  static addMessage(message: string, cssClass: string) {
    //$('#first').after($('<div/>').addClass('row').append($('<h2/>').append(
    //  $('<span/>').addClass('label ' + cssClass).text(message))));
  }
  static ERROR(message: string) {
      this.addMessage(message, 'label-primary pull-left');
  }
  register(newProfile : profile ) {
    console.log("service")
    var request = new Request; 
    request.setUsername(newProfile.username);
    request.setPassword(newProfile.password);
    request.setFirstname(newProfile.firstname);
    request.setLastname(newProfile.lastname);
    this.client.register(
      request,{'custom-header-1': 'value1'},
      ( err: grpcWeb.Error, response: Response) => {
        if (err) {
          RegisterClientService.ERROR
          (
                'Error code: ' + err.code + ' "' + err.message + '"');
        } 
      }
    )
  }
  /*
  static ERROR(message: string) {
    this.addMessage(message, 'label-primary pull-left');
  }
  register(newProfile : profile ) {
    var request = new Request; 
    request.setUsername(newProfile.username);
    request.setPassword(newProfile.password);
    request.setFirstname(newProfile.firstname);
    request.setLastname(newProfile.lastname);
    const call = this.service.register(
      request,{'custom-header-1': 'value1'},
      ( err: grpcWeb.Error, response: Response) => {
        if (err) {
          RegisterClientService.ERROR
          (
                'Error code: ' + err.code + ' "' + err.message + '"');
        } 
      }
    );
    call.on('status', (status: grpcWeb.Status) => {
      if (status.metadata) {
        console.log('Received metadata');
        console.log(status.metadata);
      }
    });
  }*/
}
