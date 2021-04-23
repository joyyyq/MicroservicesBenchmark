import * as grpcWeb from 'grpc-web';
// Option 2: import_style=typescript
import { cartClient } from '../../../proto/StudentCartServiceClientPb';

import { classRequest, classResponse, cartRequest, cartResponse } from '../../../proto/studentCart_pb';

import { Injectable } from '@angular/core';

const wait=(ms: number)=>new Promise(resolve => setTimeout(resolve, ms))

@Injectable({
  providedIn: 'root'
})
export class CartClientService {
  private client: cartClient;
  constructor() {this.client = new cartClient('http://localhost:8081');}
  
  static addMessage(message: string, cssClass: string) {
    //$('#first').after($('<div/>').addClass('row').append($('<h2/>').append(
    //  $('<span/>').addClass('label ' + cssClass).text(message))));
  }
  static ERROR(message: string) {
      this.addMessage(message, 'label-primary pull-left');
  }

  async getCart(username: string) {
    console.log("getCart service");
    var request = new cartRequest; 
    request.setUsername(username);
    let result;
    await this.client.getCart(
      request,{'custom-header-1': 'value1'},
      ( err: grpcWeb.Error, response: cartResponse ) => {
        if (err) {
          CartClientService.ERROR('Error code: ' + err.code + ' "' + err.message + '"');
        } 
        console.log(response);
        result = response;
      }
    )
    return result;
  }
}
