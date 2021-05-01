import * as grpcWeb from 'grpc-web';

import { Injectable } from '@angular/core';

import {classlistClient} from '../../../proto/ClassListServiceClientPb';

import {Class, Section, Time, classListRequest, classListResponse,} from '../../../proto/classList_pb';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ClasslistClientService {

  private client: classlistClient;
  classCollections: {[val: string]: BehaviorSubject<Class[]>} = {};

  constructor() {this.client = new classlistClient('http://localhost:8081');}
  
  getClassList(year: string): BehaviorSubject<Class[]> {
    if (this.classCollections[year] == undefined) {
      this.classCollections[year] = this.fakeClass();
    } 
    /** 
    console.log("Classlist service");
    var request = new classListRequest; 
    var result = new BehaviorSubject<Class[]>([]);
    request.setYear(year);
    this.client.getClassList(
      request,{'custom-header-1': 'value1'},
      ( err: grpcWeb.Error, response: classListResponse ) => {
        if (err) {
          console.log('Error code: ' + err.code + ' "' + err.message + '"');
        }
        result.next(response.getClassesList());
        console.log("response is", result);
      }
    )
    return result;*/
    return this.classCollections[year]; 
  }

  fakeClass(): BehaviorSubject<Class[]>  {
    let a: Class = new Class();
    a.setCode("ECE 2300");
    a.setNbr("2300");
    a.setTitle("The Computing Technology Inside Your Smartphone");
    a.setDescription('The organization of the computer system found within devices used in everyday living, such as smartphones and tablets. Computer systems are presented in a bottom up fashion, from bits to digital logic, computer organization, instruction sets, assembly language, and the connection to high-level languages. Discussion of the computing engines found in smart phones, tablets, and wearables.');
    a.setCredit('3');
    let b: Section = new Section();
    b.setNumber("11324");
    b.setTitle("LEC 001");
    b.setInstructors("David Albonesi (dha7)");
    b.setDays("TR");
    let eee: Section = new Section();
    eee.setNumber("1132d4");
    eee.setTitle("LEC 003");
    eee.setInstructors("David Albonesi (dha7)");
    eee.setDays("TR");
    let bb: Section = new Section();
    bb.setNumber("12332");
    bb.setTitle("LAB 002");
    bb.setInstructors("David Albonesi (dha7)");
    bb.setDays("TR");
    let bbb: Section = new Section();
    bbb.setNumber("12232");
    bbb.setTitle("DIS 002");
    bbb.setInstructors("David Albonesi (dha7)");
    bbb.setDays("TR");
    let d: Section = new Section();
    d.setNumber("1135");
    d.setTitle("LEC 002");
    d.setInstructors("David Albonesi (dha7)");
    d.setDays("TR");
    let c: Time = new Time();
    c.setStart("11:225PM");
    c.setEnd("12:40PM");
    b.setTimes(c);
    d.setTimes(c);
    bb.setTimes(c);
    bbb.setTimes(c);
    eee.setTimes(c);
    a.addSections(b);
    a.addSections(d);
    a.addSections(bb);
    a.addSections(bbb);
    a.addSections(eee);
    let aList: Class[] = [];
    aList.push(a);
    aList.push(a);    aList.push(a);    aList.push(a);
    return  new BehaviorSubject<Class[]>(aList);
  }
}
