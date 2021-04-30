import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RosterRoutingModule } from './roster-routing.module';
import { RosterComponent } from './roster/roster.component';
import { RosterCardComponent } from './roster-card/roster-card.component';

// material 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';  
import { MatSidenavModule } from '@angular/material/sidenav';  
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatCardModule } from '@angular/material/card';

// Shared 
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [RosterComponent, RosterCardComponent],
  imports: [
    CommonModule,
    RosterRoutingModule,
    SharedModule, 
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
