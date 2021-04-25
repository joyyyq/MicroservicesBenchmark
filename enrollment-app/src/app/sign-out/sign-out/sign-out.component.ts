import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentStateService } from '../../services/student-state.service';

@Component({
  selector: 'app-sign-out',
  templateUrl: './sign-out.component.html',
  styleUrls: ['./sign-out.component.css']
})
export class SignOutComponent implements OnInit {

  constructor(
    private studentState: StudentStateService,
    private router: Router
    
    ) { }

  ngOnInit(): void {
    console.log("user just signed out");
    console.log("erasing username")
    this.studentState.setcurrentUserName('');
    this.studentState.setUsername('');
    this.router.navigate(['/roster']);
  }
}
