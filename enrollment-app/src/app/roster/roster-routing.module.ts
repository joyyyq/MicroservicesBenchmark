import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster/roster.component'; 
import { RosterClassComponent } from './roster-class/roster-class.component';
import { RosterClassResolver } from './roster-class/roster-class.resolver';

const routes: Routes = [
  {
    path: '', 
    component: RosterComponent
  }, 
  {
    path: 'class/:year/ECE/:code', 
    component: RosterClassComponent,
    resolve: {
      classes: RosterClassResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule], 
})
export class RosterRoutingModule { }
