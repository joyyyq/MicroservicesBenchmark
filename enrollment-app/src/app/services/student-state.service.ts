import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class StudentStateService {
  private username:string = "";

  constructor() { }

  setUsername(name:string) {
    this.username = name;
  }
  getUsername() {
    return this.username;
  }
}
