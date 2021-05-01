import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RosterComponent } from './roster/roster.component'; 
import { RosterClassComponent } from './roster-class/roster-class.component';

const routes: Routes = [
  {
    path: '', 
    component: RosterComponent
  }, 
  {
    path: 'class/:year/ECE/:code', 
    component: RosterClassComponent,
    data : {class : {}}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RosterRoutingModule { }
