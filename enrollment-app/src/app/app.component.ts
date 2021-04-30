import { Component } from '@angular/core';
import { StudentStateService } from './services/student-state.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'enrollment-app';
  user = ''
  constructor(
    private studentState: StudentStateService,
  ) {
  }
  ngOnInit() {
    this.studentState.currentUserName.subscribe(val => {
      this.user = val;
    });
  }
}
