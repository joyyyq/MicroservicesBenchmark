import { Component, OnInit } from '@angular/core';
import { ClasslistClientService } from '../../services/classlist-client.service';

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.css']
})
export class RosterComponent implements OnInit {

  constructor(private client: ClasslistClientService) { }

  ngOnInit(): void {
    this.client.getClassList('SP21'); 
  }

  call() {
    this.client.getClassList('SP21'); 
  }

}
