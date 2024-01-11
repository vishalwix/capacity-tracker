import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from 'src/app/_helpers';
import { Role } from 'src/app/_models';
import { LeadDashboardComponent } from './components/lead-dashboard/lead-dashboard.component';
import { LeadHomeComponent } from './components/lead-home/lead-home.component';
import { CcbTackerDetailsComponent } from './components/ccb-tacker-details/ccb-tacker-details.component';


const routes: Routes = [
  { path: '',   
    component: LeadDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.LEAD] },   
    children:[
      { path: 'home', component: LeadHomeComponent,canActivate: [AuthGuard], data: { roles: [Role.LEAD] } },   
      { path: 'dashboard', component: CcbTackerDetailsComponent,canActivate: [AuthGuard], data: { roles: [Role.LEAD] } },     
      { path: '', redirectTo: '/lead/home', pathMatch: 'full' },
    ]},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeadRoutingModule { }
