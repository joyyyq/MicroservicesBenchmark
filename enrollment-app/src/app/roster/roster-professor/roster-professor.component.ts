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
  profs: Professor[] = [];
  constructor(private client: ProfClientService, private route: ActivatedRoute) {
    this.profName = this.route.snapshot.url[1].path;
    console.log(this.profName)
    // this.client.getProf(this.profName).asObservable().subscribe(val => {
    //   this.prof_ = val;
    //   console.log(this.prof_);
    // })
    this.route.data.subscribe((r) => console.log(r));
    this.profs = this.route.snapshot.data['profs'];
    console.log(this.profs);
    this.prof_ = this.profs.filter(temp => temp.getName().includes(this.profName))[0];
    console.log(this.prof_)
  }

  ngOnInit(): void {
  }

}
