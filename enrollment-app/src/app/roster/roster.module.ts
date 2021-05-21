import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// material
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';  
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

import { RosterRoutingModule } from './roster-routing.module';
import { RosterComponent } from './roster/roster.component';
import { RosterCardComponent } from './roster-card/roster-card.component';
import { RosterClassComponent } from './roster-class/roster-class.component';
import { RosterSearchComponent } from './roster-search/roster-search.component';
import { RosterProfessorComponent } from './roster-professor/roster-professor.component';
import { ProfessorCardComponent } from './professor-card/professor-card.component';

@NgModule({
  declarations: [RosterComponent, RosterCardComponent, RosterClassComponent, RosterSearchComponent, RosterProfessorComponent, ProfessorCardComponent],
  imports: [
    CommonModule,
    RosterRoutingModule, 
    MatExpansionModule, 
    MatButtonModule, 
    MatIconModule, 
    MatSidenavModule, 
    FormsModule, 
    ReactiveFormsModule, 
    MatInputModule, 
    MatFormFieldModule, 
    MatSelectModule, 
    MatBadgeModule, 
    MatCardModule
  ]
})
export class RosterModule { }
