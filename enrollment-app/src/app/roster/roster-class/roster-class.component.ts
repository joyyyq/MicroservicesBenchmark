import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
import {Class, Section, Time, classListRequest, classListResponse,} from '../../../../proto/classList_pb';
import { ClasslistClientService } from '../../services/classlist-client.service';

@Component({
  selector: 'app-roster-class',
  templateUrl: './roster-class.component.html',
  styleUrls: ['./roster-class.component.css']
})
export class RosterClassComponent implements OnInit {
  semester: string = ''; 
  group: string = ''; 
  classNum: string = ''; 
  class_: Class = new Class(); 

  constructor(private client: ClasslistClientService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.semester = this.route.snapshot.url[1].path; 
    this.group    = this.route.snapshot.url[2].path; 
    this.classNum    = this.route.snapshot.url[3].path; 
    let classes = this.client.classCollections[this.semester]; 
    this.class_ = classes.filter(temp => temp.getCode() == (this.group + " " + this.classNum))[0];
  }

}
