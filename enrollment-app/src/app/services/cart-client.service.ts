import * as grpcWeb from 'grpc-web';
// Option 2: import_style=typescript
import { cartClient } from '../../../proto/StudentCartServiceClientPb';

import { cartRequest, cartResponse, cartSingleResponse } from '../../../proto/studentCart_pb';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
const wait=(ms: number)=>new Promise(resolve => setTimeout(resolve, ms))
export interface PeriodicElement {
  position: number;
  id: string;
  name: string;
  units: number;
  status: string;
}

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

  getCart(username: string): BehaviorSubject<cartSingleResponse[]> {
    console.log("getCart service");
    var request = new cartRequest; 
    request.setUsername(username);
    var result = new BehaviorSubject<cartSingleResponse[]>([]);
    this.client.getCart(
      request,{'custom-header-1': 'value1'},
      ( err: grpcWeb.Error, response: cartResponse ) => {
        if (err) {
          CartClientService.ERROR('Error code: ' + err.code + ' "' + err.message + '"');
        } 
        result.next(response.getListList());
        console.log("response is", result);
      }
    )
    wait(5*1000).then(() => {
    }).catch(() => {
      console.log("Wait is over, callback")
    });
    return result;
  }
}
