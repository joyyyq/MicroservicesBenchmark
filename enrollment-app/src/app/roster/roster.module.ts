import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RosterRoutingModule } from './roster-routing.module';
import { RosterComponent } from './roster/roster.component';


@NgModule({
  declarations: [RosterComponent],
  imports: [
    CommonModule,
    RosterRoutingModule
  ]
})
export class RosterModule { }
