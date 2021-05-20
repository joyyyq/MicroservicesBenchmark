import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Professor } from 'proto/prof_pb';
import { ProfClientService } from 'src/app/services/prof-client.service';

@Component({
  selector: 'app-roster-professor',
  templateUrl: './roster-professor.component.html',
  styleUrls: ['./roster-professor.component.css']
})
export class RosterProfessorComponent implements OnInit {
  profName: string = '';
  prof_: Professor = new Professor();
  constructor(private client: ProfClientService, private route: ActivatedRoute) {
    this.profName = this.route.snapshot.url[1].path;
  }

  ngOnInit(): void {
    this.client.getProf(this.profName).asObservable().subscribe(val => {
      this.prof_ = val;
      console.log(this.prof_);
    })
  }

}
