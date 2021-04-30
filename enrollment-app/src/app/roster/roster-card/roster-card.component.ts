import { Component, Input } from '@angular/core';

import {Class, Section, Time, classListRequest, classListResponse} from '../../../../proto/classList_pb';

@Component({
  selector: 'app-roster-card',
  templateUrl: './roster-card.component.html',
  styleUrls: ['./roster-card.component.css']
})

export class RosterCardComponent {
  @Input() class: Class;

  constructor() { this.class = new Class(); }

}
