import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

// Shared 
import { SharedModule } from '../shared/shared.module';

// Materials
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


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    SharedModule, 
    MatTableModule, 
    MatCheckboxModule,
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
export class DashboardModule { }