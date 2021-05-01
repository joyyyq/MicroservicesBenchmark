import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { CartClientService } from '../../services/cart-client.service';
import { StudentStateService } from '../../services/student-state.service';
import { cartSingleResponse } from '../../../../proto/studentCart_pb';

export interface PeriodicElement {
  position: number;
  course: string;
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
export class DashboardComponent implements OnInit {
  public cart:cartSingleResponse[] = [];
  public dropList:string[] = [];
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['select', 'position', 'course', 'name', 'units', 'number', 'days', 'time', 'instructor', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  loading = false;
  submitted = false;

  constructor(
    private client: CartClientService,
    private studentState: StudentStateService,
    private router: Router
  ) {
    console.log("construct");
    // console.log("Username is", studentState.getUsername());
  }

  ngOnInit(): void {
    console.log("onInit");
    // var username = this.studentState.getUsername();
    // console.log("getting response");
    // this.client.getCart(username).asObservable().subscribe(val =>  {
    //   this.cart = val;
    //   for (let i=0; i<this.cart.length; i++) {
    //     var element : PeriodicElement = { position:i+1, course: this.cart[i].getCoursecode(), name: this.cart[i].getTitle(), units: this.cart[i].getCredit(), status: "Enrolled",
    //      number: this.cart[i].getClassnumber(), days: this.cart[i].getDays(), time: this.cart[i].getTime(), instructor:this.cart[i].getInstructor() } ;
    //     this.ELEMENT_DATA.push(element);
    //   }
    //   console.log("cart after subscribing is is", this.cart);
    // });
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
      this.dropList.push()
    
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }

  buttonSubmit() {
    for (let item of this.selection.selected) {
        this.client.dropClass(this.studentState.getUsername(),item.course)      
    }
  }
}
