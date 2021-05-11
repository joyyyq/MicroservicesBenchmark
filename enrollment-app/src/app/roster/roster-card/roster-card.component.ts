import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../../../../proto/classList_pb';

@Component({
  selector: 'app-roster-card',
  templateUrl: './roster-card.component.html',
  styleUrls: ['./roster-card.component.css']
})

export class RosterCardComponent implements OnInit {
  @Input() class: Class;

  constructor() { this.class = new Class();}

  ngOnInit(): void {
    // console.log(this.class); 
  }
}
