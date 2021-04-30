import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RosterRoutingModule } from './roster-routing.module';
import { RosterComponent } from './roster/roster.component';
import { RosterCardComponent } from './roster-card/roster-card.component';


@NgModule({
  declarations: [RosterComponent, RosterCardComponent],
  imports: [
    CommonModule,
    RosterRoutingModule
  ]
})
export class RosterModule { }
