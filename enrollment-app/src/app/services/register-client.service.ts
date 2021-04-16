import * as grpcWeb from 'grpc-web';
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

  checkUsername(newProfile : profile){
    console.log("check username");
    var request = new Request; 
    request.setUsername(newProfile.username);
    var result : boolean = true;
    // this.validationResult = true;
    var response = this.client.validateUsername(request,{'custom-header-1': 'value1'})
    response.then((res) => {
      console.log(res); // 123
      result = res.getSuccess();
      console.log("cresult " + result);
      this.updateResult(result); 
      return this.validationResult;
    })
    // this.client.validateUsername(
    //   request,{'custom-header-1': 'value1'},
    //   ( err: grpcWeb.Error, response: Response) => {
    //     if (err) {
    //       RegisterClientService.ERROR('Error code: ' + err.code + ' "' + err.message + '"');
    //     } 
    //     result = response.getSuccess();
    //     this.validationResult = response.getSuccess();
    //     console.log("cresult " + result);
    //     return result;
    //   }
    // )
    console.log("ccresult " + this.validationResult);
    // return result;
    return this.validationResult;
  }

  register(newProfile : profile) {
    console.log("register service");
    var request = new Request; 
    request.setUsername(newProfile.username);
    request.setPassword(newProfile.password);
    request.setFirstname(newProfile.firstname);
    request.setLastname(newProfile.lastname);
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
