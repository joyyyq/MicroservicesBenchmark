import { Component, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from '@angular/router'; 
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Class, Section, Time, classListRequest, classListResponse } from '../../../../proto/classList_pb';
import { ClasslistClientService } from '../../services/classlist-client.service';


@Injectable({ providedIn: 'root' })
export class RosterClassResolver implements Resolve<Class[]> {
  constructor(private client: ClasslistClientService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Class[]> {
    return this.client.getClassList("SP21").asObservable().pipe(take(1)); 
  }
}