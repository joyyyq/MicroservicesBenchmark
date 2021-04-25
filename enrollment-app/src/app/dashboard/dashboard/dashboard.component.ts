import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { CartClientService } from '../../services/cart-client.service';
import { StudentStateService } from '../../services/student-state.service';
import { classRequest, classResponse, cartRequest, cartResponse, cartSingleResponse } from '../../../../proto/studentCart_pb';
const wait=(ms: number)=>new Promise(resolve => setTimeout(resolve, ms))
export interface PeriodicElement {
  position: number;
  //course: string; //need to add course code in add drop cart proto  missing currently
  name: string;
  units: number;
  number: string;
  days: string;
  time: string;
  instructor: string;
  status: string;
}


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // displayedColumns: string[] = ['Class', 'Description', 'Days/Times', 'Room', 'Instructor','Units','Status'];
  public cart:cartSingleResponse[]  = [];
  ELEMENT_DATA: PeriodicElement[] = [
    //{position: 1, id: 'ECE 5710', name: 'Datacenter Computing ', units: 4, status: 'Enrolled'},
    //{position: 2, id: 'CS 5789', name: 'Reinforcement Learning ', units: 3, status: 'Enrolled'},
    //{position: 3, id: 'CS 4450', name: 'Computer Networks ', units: 3, status: 'Dropped'},
    //{position: 4, id: 'CS 4300', name: 'Language and Information ', units: 3, status: 'Enrolled'},
  ];
  displayedColumns: string[] = ['select', 'position', 'name', 'units', 'number', 'days', 'time', 'instructor', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(
    private client: CartClientService,
    private studentState: StudentStateService,
    private router: Router
  ) {
    console.log("construct");
    console.log("Username is", studentState.getUsername() );

  }

  ngOnInit(): void {
    console.log("onInit");
    var username = this.studentState.getUsername();
    console.log("getting response");
    this.client.getCart(username).asObservable().subscribe(val =>  {
      this.cart = val;
      for (let i=0; i<this.cart.length; i++) {
        var element : PeriodicElement = { position:i+1, name: this.cart[i].getTitle(), units: this.cart[i].getCredit(), status: "Enrolled",
         number: this.cart[i].getClassnumber(), days: this.cart[i].getDays(), time: this.cart[i].getTime(), instructor:this.cart[i].getInstructor() } ;
        this.ELEMENT_DATA.push(element);
      }
      console.log("cart after subscribing is is", this.cart);
    });
  }
  
  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

}
