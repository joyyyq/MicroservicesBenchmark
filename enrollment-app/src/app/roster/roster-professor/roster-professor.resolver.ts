import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router'; 
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { Professor } from '../../../../proto/prof_pb';
import { ProfClientService } from '../../services/prof-client.service';


@Injectable({ providedIn: 'root' })
export class RosterProfessorResolver implements Resolve<Professor[]> {
  constructor(private client: ProfClientService) {}

  resolve(
  ): Observable<Professor[]> {
    let ob = this.client.getProfList().asObservable(); 
    ob.subscribe(x => console.log(x));
    return ob.pipe(take(2));
  }
}