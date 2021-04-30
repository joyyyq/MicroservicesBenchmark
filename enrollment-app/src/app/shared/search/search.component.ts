import { Component, OnInit, Input } from '@angular/core';
import {Class} from '../../../../proto/classList_pb';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() classes: Class[];
  values = ''
  searchResults: Class[] = []; 
  constructor() { this.classes = [];}

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
}
