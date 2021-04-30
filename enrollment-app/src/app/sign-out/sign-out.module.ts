import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignOutRoutingModule } from './sign-out-routing.module';
import { SignOutComponent } from './sign-out/sign-out.component';


@NgModule({
  declarations: [SignOutComponent],
  imports: [
    CommonModule,
    SignOutRoutingModule
  ]
})
export class SignOutModule { }
