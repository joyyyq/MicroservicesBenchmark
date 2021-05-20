import { Component, OnInit, Input } from '@angular/core';
import { Class } from '../../../../proto/classList_pb';
import { Professor } from '../../../../proto/prof_pb';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-roster-search',
  templateUrl: './roster-search.component.html',
  styleUrls: ['./roster-search.component.css']
})
export class RosterSearchComponent implements OnInit {
  @Input() classes: Class[];
  @Input() profs: Professor[];
  searchResults: Class[] = [];
  searchProfResults: Professor[] = [];
  constructor(private router: Router, private route: ActivatedRoute) { this.classes = []; this.profs = [];}

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

  searchProf(event: any) {
    this.searchProfResults = []
    let query = event.target.value; 
    if (query != '') {
      this.searchProfResults = this.profs.filter(
        prof_ => ( prof_.getName().includes(query) ));
    }
  }

  visitProf(profName: any) {
    this.router.navigate(
      ['prof/'+profName], { relativeTo: this.route },
    );
  }

}