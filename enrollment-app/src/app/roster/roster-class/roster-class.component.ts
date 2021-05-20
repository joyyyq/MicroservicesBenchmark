import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 
import { Class } from '../../../../proto/classList_pb';

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
  classes: Class[] = []; 
  constructor(private route: ActivatedRoute) {
    this.semester = this.route.snapshot.url[1].path; 
    this.group    = this.route.snapshot.url[2].path; 
    this.classNum    = this.route.snapshot.url[3].path; 
    this.route.data.subscribe((r) => console.log(r));
    this.classes = this.route.snapshot.data['classes'];
    console.log(this.classes);
    this.class_ = this.classes.filter(temp => temp.getCode() == (this.group + " " + this.classNum))[0];
  }

  ngOnInit(): void {  
  }

}
