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
  classes: Class[] = []

  constructor(private client: ClasslistClientService) { }

  ngOnInit(): void {
    let a: Class = new Class();
    a.setCode("ECE 2300");
    a.setNbr("11324");
    a.setTitle("The Computing Technology Inside Your Smartphone");
    a.setDescription('The organization of the computer system found within devices used in everyday living, such as smartphones and tablets. Computer systems are presented in a bottom up fashion, from bits to digital logic, computer organization, instruction sets, assembly language, and the connection to high-level languages. Discussion of the computing engines found in smart phones, tablets, and wearables.');
    a.setCredit('3');
    let b: Section = new Section();
    b.setNumber("11324");
    b.setTitle("LEC 001");
    b.setInstructors("David Albonesi (dha7)");
    b.getInstructors
    b.setDays("TR");
    let d: Section = new Section();
    d.setNumber("1135");
    d.setTitle("LEC 002");
    d.setInstructors("David Albonesi (dha7)");
    d.getInstructors
    d.setDays("TR");
    let c: Time = new Time();
    c.setStart("11:225PM");
    c.setEnd("12:40PM");
    b.setTimes(c);
    d.setTimes(c);
    a.addSections(b);
    a.addSections(d);


    this.classes.push(a);
    
    console.log(a);
    // this.client.getClassList('SP21').asObservable().subscribe(val =>  {
    //   this.classes = val;
    //   console.log(this.classes);
    // }
    // )
  }

  call() {
    // this.client.getClassList('SP21'); 
  }

}
