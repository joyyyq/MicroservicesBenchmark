import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { CartClientService } from '../../services/cart-client.service';
import { StudentStateService } from '../../services/student-state.service';
import { cartSingleResponse } from '../../../../proto/studentCart_pb';
import { Class } from '../../../../proto/classList_pb';
import { ClasslistClientService } from '../../services/classlist-client.service';

export interface PeriodicElement {
  position: number;
  course: string;
  name: string;
  units: number;
  //number: string;
  section: string;
  days: string;
  time: string;
  instructor: string;
  //status: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  classes: Class[] = []
  public cart:cartSingleResponse[] = [];
  public dropList:string[] = [];
  ELEMENT_DATA: PeriodicElement[] = [];
  displayedColumns: string[] = ['select', 'position', 'course', 'name', 'units', 'section', 'days', 'time', 'instructor'];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  loading = false;
  submitted = false;

  constructor(
    private cartClient: CartClientService,
    private classlistClient: ClasslistClientService,
    private studentState: StudentStateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.classlistClient.getClassList('SP21').asObservable().pipe().subscribe(val =>  {
      this.classes = val;
      console.log(this.classes);
    })  
    var username = this.studentState.getUsername();
    this.loadCart();
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

  dropSubmit() {
    console.log(this.selection.selected.length)
    //var sectionList:section[] = [];
    for (let item of this.selection.selected) {
      console.log(item)
      this.cartClient.dropClass(this.studentState.getUsername(),item.course)      
    }

    if(this.selection.selected != undefined && this.selection.selected != []) this.loadCart();
    this.selection.clear()
  }

  addSubmit(event: any) {
    //for (let item of this.selection.selected) {
    //    this.cartClient.addClass(this.studentState.getUsername(),item.course,item.)      
    //}
    //if(this.selection.selected != undefined && this.selection.selected != []) this.loadCart();
    this.loadCart();
  }

  loadCart() {
    this.cartClient.getCart(this.studentState.getUsername()).asObservable().subscribe(val =>  {
      this.ELEMENT_DATA = [];
      this.cart = val;
      for (let i=0; i<this.cart.length; i++) {
        var element : PeriodicElement = { position:i+1, course: this.cart[i].getCoursecode(), name: this.cart[i].getTitle(), units: this.cart[i].getCredit(), //status: "Enrolled",
         //number: this.cart[i].getClassnumber(), 
         section:this.cart[i].getSection(), days: this.cart[i].getDays(), time: this.cart[i].getTime(), instructor:this.cart[i].getInstructor() } ;
        this.ELEMENT_DATA.push(element);
      }
      this.dataSource.data = this.ELEMENT_DATA;
    });
  }
}
