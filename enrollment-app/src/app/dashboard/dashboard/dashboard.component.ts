import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';
import { CartClientService } from '../../services/cart-client.service';
import { StudentStateService } from '../../services/student-state.service';

export interface PeriodicElement {
  position: number;
  id: string;
  name: string;
  units: number;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, id: 'ECE 5710', name: 'Datacenter Computing ', units: 4, status: 'Enrolled'},
  {position: 2, id: 'CS 5789', name: 'Reinforcement Learning ', units: 3, status: 'Enrolled'},
  {position: 3, id: 'CS 4450', name: 'Computer Networks ', units: 3, status: 'Dropped'},
  {position: 4, id: 'CS 4300', name: 'Language and Information ', units: 3, status: 'Enrolled'},
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  // displayedColumns: string[] = ['Class', 'Description', 'Days/Times', 'Room', 'Instructor','Units','Status'];
  displayedColumns: string[] = ['select', 'position', 'id', 'name', 'units', 'status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
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
    var username = "ta326";
    let response = this.client.getCart(username);
    console.log(response);
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
