import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../../../../proto/classList_pb';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roster-card',
  templateUrl: './roster-card.component.html',
  styleUrls: ['./roster-card.component.css']
})

export class RosterCardComponent implements OnInit {
  @Input() class: Class;

  constructor(private router: Router, private route: ActivatedRoute) { this.class = new Class();}

  ngOnInit(): void {
    // console.log(this.class);
  }

  visitProf(profName: string) {
    var idx = profName.indexOf('(')-2
    profName = profName.substr(0,idx)
    console.log(profName)
    this.router.navigate(
      ['prof/'+profName], { relativeTo: this.route },
    );
  }
}
