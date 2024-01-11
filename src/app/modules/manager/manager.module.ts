import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule} from '@angular/common';
import { ManagerRoutingModule } from './manager-routing.module';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { HomeComponent } from './components/home/home.component';
import { AgGridModule } from 'ag-grid-angular';
import { ExtraComponent } from './components/extra/extra.component';
import { MyCellComponent } from './components/my-cell/my-cell.component';

import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { AddWorkTypeComponent } from './components/add-work-type/add-work-type.component';
import { WorkTypeDetailsComponent } from './components/work-type-details/work-type-details.component';
import { WorkCategoryDetailsComponent } from './components/work-category-details/work-category-details.component';
import { AddWorkCategoryDetailsComponent } from './components/add-work-category-details/add-work-category-details.component';
import { AddWorkTypeDetailsComponent } from './components/add-work-type-details/add-work-type-details.component';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmDialogueComponent } from './components/confirm-dialogue/confirm-dialogue.component';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
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
import { NgSelectModule } from '@ng-select/ng-select';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    ManagerDashboardComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HomeComponent,
    ExtraComponent,
    MyCellComponent,
    AddWorkTypeComponent,
    WorkTypeDetailsComponent,
    WorkCategoryDetailsComponent,
    AddWorkCategoryDetailsComponent,
    AddWorkTypeDetailsComponent,
    ConfirmDialogueComponent,
    OnshoreManagerDetailsComponent,
    OnshoreDirectorDetailsComponent,
    OffshoreLeadDetailsComponent,
    OffshoreManagerDetailsComponent,
    ApplicationsDetailsComponent,
    ApplicationsGroupDetailsComponent,
    PrimaryTechnologyDetailsComponent,
    ApplicationTypeDetailsComponent,
    ManagerHomeComponent,
    SummaryReportComponent,     
  ],
  imports: [  
    CommonModule,  
    ManagerRoutingModule,
    AgGridModule,    
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule, 
    NgSelectModule,  
    FormsModule,
    NgxPaginationModule
   ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [ ManagerDashboardComponent ],  
})
export class ManagerModule { }