import { Component, OnInit, Input } from '@angular/core';
import {Class} from '../../../../proto/classList_pb';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() classes: Class[];
  @Input() isRoster: boolean;

  values = ''
  searchResults: Class[] = []; 
  constructor(private router: Router, private route: ActivatedRoute) { this.classes = []; this.isRoster = false}

  ngOnInit(): void {
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
