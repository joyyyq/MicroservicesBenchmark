import { Component, Input, OnInit } from '@angular/core';
import { Professor } from 'proto/prof_pb';

@Component({
  selector: 'app-professor-card',
  templateUrl: './professor-card.component.html',
  styleUrls: ['./professor-card.component.css']
})
export class ProfessorCardComponent implements OnInit {
  @Input() prof: Professor;
  reviewsString: string = '';
  reviews: Array<String> = [];

  constructor() { this.prof = new Professor(); }

  ngOnInit(): void {
    console.log(this.prof);
    this.reviewsString = this.prof.getReviews();
    this.reviews = this.reviewsString.split(';');
  }
}
