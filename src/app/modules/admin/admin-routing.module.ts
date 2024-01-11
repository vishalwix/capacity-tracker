import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { AuthGuard } from 'src/app/_helpers';
import { Role } from 'src/app/_models';

const routes: Routes = [
  { path: '',   
    component: AdminDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.ADMIN] },   
    children:[
      { path: 'home', component: AdminHomeComponent,canActivate: [AuthGuard], data: { roles: [Role.ADMIN] } },        
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ]},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
