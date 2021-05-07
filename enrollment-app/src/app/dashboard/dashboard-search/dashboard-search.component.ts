import { Component, Input, Inject, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {Class, Section} from '../../../../proto/classList_pb';
import { ActivatedRoute, Router } from '@angular/router';
import { CartClientService } from '../../services/cart-client.service';
import { cartSingleResponse,section } from '../../../../proto/studentCart_pb';
import { StudentStateService } from '../../services/student-state.service';

@Component({
  selector: 'app-dashboard-search',
  templateUrl: './dashboard-search.component.html',
  styleUrls: ['./dashboard-search.component.css']
})
export class DashboardSearchComponent {
  @Input() classes!: Class[];
  @Output() addClassEvent = new EventEmitter<boolean>();
  values = ''
  searchResults: Class[] = [];
  constructor(public dialog: MatDialog, private router: Router, private route: ActivatedRoute) { 
    console.log("INSIDE SEARCHHHH constructor");
  }

  openDialog(class_: Class): void {
    const dialogRef = this.dialog.open(DialogSearch, {
      data: class_
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addClassEvent.emit(result);
      console.log(result);
    });
  }

  ngAfterViewInit(): void {
  }

  search(event: any) {
    this.searchResults = []
    let query = event.target.value; 
    if (query != '') {
      this.searchResults = this.classes.filter(
        class_ => ( class_.getTitle().includes(query) || class_.getCode().includes(query) ));
    }
  }

  visitClass(classNum: any) {
    this.router.navigate(
      ['class/SP21/ECE/'+classNum], { relativeTo: this.route },
    );
  }
}

@Component({
  selector: 'dialog-search-add',
  templateUrl: 'add-dialog.html',
  styleUrls: ['./dashboard-search.component.css']
})
export class DialogSearch {
  lecs: Section[]=[]; 
  labs: Section[]=[]; 
  discs: Section[]=[];
  lecSuccess:boolean = true; 
  discSuccess:boolean = true;
  labSuccess:boolean = true;
  selectedLec = ""; 
  selectedLab = ""; 
  selectedDis = ""; 

  constructor(
    public dialogRef: MatDialogRef<DialogSearch>,
    @Inject(MAT_DIALOG_DATA) public data: Class, private cartClient: CartClientService, private student: StudentStateService) {
      this.lecs = data.getSectionsList().filter(section => section.getTitle().includes("LEC"));
      this.labs = data.getSectionsList().filter(section => section.getTitle().includes("LAB"));
      this.discs = data.getSectionsList().filter(section => section.getTitle().includes("DIS"));
      if (this.lecs.length > 0) this.selectedLec = this.lecs[0].getTitle(); 
      if (this.labs.length > 0) this.selectedLab = this.labs[0].getTitle(); 
      if (this.discs.length > 0) this.selectedDis = this.discs[0].getTitle(); 
    }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onSubmit() {
    var sectionList:section[] = [];
    //if( this.selectedLec != '') this.lecSuccess = this.cartClient.addClass(this.student.getUsername(), this.data.getCode(), this.selectedLec );
    let i=0
    if( this.selectedLec != '') {
      var newsection:section = new section();
      newsection.setSec(this.selectedLec);
      sectionList[i] = newsection;
      i++;
    } 
    if( this.selectedLab != '') {
      var newsection:section = new section();
      newsection.setSec(this.selectedLab);
      sectionList[i] = newsection;
      i++;
    } 
    if( this.selectedDis != '') {
      var newsection:section = new section();
      newsection.setSec(this.selectedDis);
      sectionList[i] = newsection;
      i++;
    } 
    this.cartClient.addClass(this.student.getUsername(), this.data.getCode(),sectionList );
    // add disc and lab only if the lec succeeds
    //console.log('lecsuccess is ', this.lecSuccess)
    //if (this.lecSuccess == true) {
    //  if( this.selectedLab != '') this.labSuccess = this.cartClient.addClass(this.student.getUsername(), this.data.getCode(), this.selectedLab );
    //  if (this.labSuccess == true) {
    //    if( this.selectedDis != '') this.discSuccess = this.cartClient.addClass(this.student.getUsername(), this.data.getCode(), this.selectedDis );
    //  }
    //}
    //this.lecSuccess= true; 
    //this.discSuccess = true;
    //this.labSuccess = true;
    
    // alert main component about the dialog result. 
    this.dialogRef.close(this.selectedLec != ''||this.selectedLec != ''||this.selectedLec != '');
  }
}