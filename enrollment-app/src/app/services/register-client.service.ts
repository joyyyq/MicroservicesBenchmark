import * as grpcWeb from 'grpc-web';
// Option 2: import_style=typescript
import {registerClient} from '../../../proto/StudentRegisterServiceClientPb';

import {Request, Response} from '../../../proto/studentRegister_pb';

import { Injectable } from '@angular/core';

const wait=(ms: number)=>new Promise(resolve => setTimeout(resolve, ms))

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
  private validationResult: boolean = false;
  private client: registerClient;
  constructor() {this.client = new registerClient('http://localhost:8081');}
  
  static addMessage(message: string, cssClass: string) {
    //$('#first').after($('<div/>').addClass('row').append($('<h2/>').append(
    //  $('<span/>').addClass('label ' + cssClass).text(message))));
  }
  static ERROR(message: string) {
      this.addMessage(message, 'label-primary pull-left');
  }

  updateResult(status: boolean) {
    this.validationResult = status; 
  }

  async checkUsername(name : string){
    console.log("check username " + name);
    var request = new Request; 
    request.setUsername(name);
    var response = this.client.validateUsername(request,{'custom-header-1': 'value1'})
  
    await response.then((res) => {
      var result = res.getSuccess();
      this.updateResult(result); 
      console.log("cresult " + this.validationResult);
    })
    
    wait(4*1000).then(() => {
      console.log("wresult " + this.validationResult);
      return this.validationResult;
    }).catch(() => {
      console.log("Wait is over, callback")
    });
  
    console.log("ccresult " + this.validationResult);
    return this.validationResult;
  }

  register(username: string, password: string, firstname: string, lastname: string) {
    console.log("register service");
    var request = new Request; 
    request.setUsername(username);
    request.setPassword(password);
    request.setFirstname(firstname);
    request.setLastname(lastname);
    let result : boolean = true;
    this.client.register(
      request,{'custom-header-1': 'value1'},
      ( err: grpcWeb.Error, response: Response) => {
        if (err) {
          RegisterClientService.ERROR('Error code: ' + err.code + ' "' + err.message + '"');
        } 
        result = response.getSuccess();
      }
    )
    return result;
  }
}
