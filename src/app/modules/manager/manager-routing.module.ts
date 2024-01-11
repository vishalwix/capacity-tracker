import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { ExtraComponent } from './components/extra/extra.component';
import { AddWorkTypeComponent } from './components/add-work-type/add-work-type.component';
import { WorkTypeDetailsComponent } from './components/work-type-details/work-type-details.component';
import { WorkCategoryDetailsComponent } from './components/work-category-details/work-category-details.component';
import { AuthGuard } from 'src/app/_helpers';
import { Role } from 'src/app/_models';
import { OnshoreManagerDetailsComponent } from './components/onshore-manager-details/onshore-manager-details.component';
import { OnshoreDirectorDetailsComponent } from './components/onshore-director-details/onshore-director-details.component';
import { OffshoreLeadDetailsComponent } from './components/offshore-lead-details/offshore-lead-details.component';
import { OffshoreManagerDetailsComponent } from './components/offshore-manager-details/offshore-manager-details.component';
import { ApplicationsDetailsComponent } from './components/applications-details/applications-details.component';
import { ApplicationsGroupDetailsComponent } from './components/applications-group-details/applications-group-details.component';
import { PrimaryTechnologyDetailsComponent } from './components/primary-technology-details/primary-technology-details.component';
import { ApplicationTypeDetailsComponent } from './components/application-type-details/application-type-details.component';
import { ManagerHomeComponent } from './components/manager-home/manager-home.component';
import { SummaryReportComponent } from './components/summary-report/summary-report.component';

const routes: Routes = [
  { path: '',   
    component:ManagerDashboardComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.MANAGER] },   
    children:[
      { path: 'home', component: HomeComponent,canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'extra', component: ExtraComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'add-work-type', component: AddWorkTypeComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'work-type-details', component: WorkTypeDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'work-category-details', component: WorkCategoryDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'onshore-manager-details', component: OnshoreManagerDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'onshore-director-details', component: OnshoreDirectorDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'offshore-lead-details', component: OffshoreLeadDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'offshore-manager-details', component: OffshoreManagerDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'applications-details', component: ApplicationsDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'applications-group-details', component: ApplicationsGroupDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'primary-technology-details', component: PrimaryTechnologyDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'application-type-details', component: ApplicationTypeDetailsComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'manager-home', component: ManagerHomeComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: 'summary-report', component: SummaryReportComponent, canActivate: [AuthGuard], data: { roles: [Role.MANAGER] } },
      { path: '', redirectTo: '/manager/home', pathMatch: 'full' },
    ]},  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagerRoutingModule { }
