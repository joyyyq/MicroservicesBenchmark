import { Component, OnInit } from '@angular/core';
import { ClasslistClientService } from '../../services/classlist-client.service';

import {Class, Section, Time, classListRequest, classListResponse} from '../../../../proto/classList_pb';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {
  classes: Class[] = [];
  constructor(private client: ClasslistClientService) { 
    // this.client.getClassList('SP21').
  }

  ngOnInit(): void {
  
  }

  call() {
    // this.client.getClassList('SP21'); 
  }

}
