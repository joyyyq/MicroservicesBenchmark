import { Component, OnInit, ViewChild } from '@angular/core';
import { DataSource } from '@angular/cdk/table';
import { DatePipe} from '@angular/common';
// import {AuthService} from "../../services/auth.service";
// import {User} from "../../model/user";
import {Router} from "@angular/router";
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
// import {Transaction} from "../../model/transaction";
// import {CourseService} from "../../services/course.service";
export interface PeriodicElement {
  id: string;
  name: string;
  units: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 'ECE 5710', name: 'Datacenter Computing ', units: 4, status: 'Enrolled'},
  {id: 'CS 5789', name: 'Reinforcement Learning ', units: 3, status: 'Enrolled'},
  {id: 'CS 4450', name: 'Computer Networks ', units: 3, status: 'Dropped'},
  {id: 'CS 4300', name: 'Language and Information ', units: 3, status: 'Enrolled'},
];

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // displayedColumns: string[] = ['Class', 'Description', 'Days/Times', 'Room', 'Instructor','Units','Status'];
  displayedColumns: string[] = ['id', 'name', 'units', 'status'];
  dataSource = ELEMENT_DATA;
  // dataSource: MatTableDataSource<Transaction> = new MatTableDataSource();
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // @ViewChild(MatSort) sort: MatSort;

  // currentUser: User;
  // constructor(public authService: AuthService, public router: Router, private courseService :CourseService) {
  //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  // }

  ngOnInit() {
    // if(!this.currentUser){
    //   return;
    // }
    // this.courseService.filterTransactions(this.currentUser.id).subscribe(data => {
    //   this.dataSource.data = data;
    // });
  }

  ngAfterViewInit() {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    // this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
