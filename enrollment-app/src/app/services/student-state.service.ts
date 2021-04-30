import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentStateService {
  private username:string="";
  public currentUserName = new BehaviorSubject('');

  constructor() { }

  setUsername(name:string) {
    this.username = name;
  }
  setcurrentUserName (name:string) {
    this.currentUserName.next(name);
  }
  getUsername() {
    return this.username;
  }
}
