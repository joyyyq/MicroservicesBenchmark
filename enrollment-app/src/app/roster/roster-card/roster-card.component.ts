import { Component, Input, OnInit } from '@angular/core';
import { Class } from '../../../../proto/classList_pb';
import { Router } from '@angular/router';

@Component({
  selector: 'app-roster-card',
  templateUrl: './roster-card.component.html',
  styleUrls: ['./roster-card.component.css']
})

export class RosterCardComponent implements OnInit {
  @Input() class: Class;
  recommendationsString: string = '';
  recommendations: Array<String> = [];

  constructor(private router: Router) { this.class = new Class(); }

  ngOnInit(): void {
    console.log(this.class);
    this.recommendationsString = this.class.getRecommendation();
    this.recommendations = this.recommendationsString.split(';');
  }

  visitProf(profName: string) {
    var idx = profName.indexOf('(')-2
    profName = profName.substr(0,idx)
    console.log(profName)
    this.router.navigate(
      ['roster/prof/'+profName], 
    );
  }
}
