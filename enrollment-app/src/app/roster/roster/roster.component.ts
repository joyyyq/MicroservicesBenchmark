import { Component, OnInit } from '@angular/core';
import { ClasslistClientService } from '../../services/classlist-client.service';
import {Class, Section, Time, classListRequest, classListResponse,} from '../../../../proto/classList_pb';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  public classList:Class[] = []

  constructor(private client: ClasslistClientService) { }

  ngOnInit(): void {
    this.client.getClassList('SP21').asObservable().subscribe(val =>  {
      this.classList = val;
      console.log(this.classList);
    }
    )
  }

  call() {
    this.client.getClassList('SP21'); 
  }

}
