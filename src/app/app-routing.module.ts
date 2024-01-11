import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { Role } from './_models';
import { AuthGuard } from './_helpers';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'manager', loadChildren:() => import('./modules/manager/manager.module').then((m)=> m.ManagerModule)},
  { path: 'admin', loadChildren:() => import('./modules/admin/admin.module').then((m)=> m.AdminModule)},
  { path: 'lead', loadChildren:() => import('./modules/lead/lead.module').then((m)=> m.LeadModule)},
  { path: '**', component: NotFoundComponent },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
