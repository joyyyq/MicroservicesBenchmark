import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard', 
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) 
  },
  {
    path: 'sign-up', 
    loadChildren: () => import('./sign-up/sign-up.module').then(m => m.SignUpModule) 
  },
  {
    path: 'sign-in', 
    loadChildren: () => import('./sign-in/sign-in.module').then(m => m.SignInModule) 
  },  
  {
    path: 'home', 
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule) 
  },
  {
    path: '', 
    redirectTo: 'home', 
    pathMatch: 'full'
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'}, )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
