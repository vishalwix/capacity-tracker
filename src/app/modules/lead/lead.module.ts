import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';


import { LeadRoutingModule } from './lead-routing.module';
import { LeadHomeComponent } from './components/lead-home/lead-home.component';
import { LeadDashboardComponent } from './components/lead-dashboard/lead-dashboard.component';
import { LeftSideNavComponent } from './components/left-side-nav/left-side-nav.component';
import { CcbTackerDetailsComponent } from './components/ccb-tacker-details/ccb-tacker-details.component';


@NgModule({
  declarations: [
    LeadHomeComponent,
    LeadDashboardComponent,
    LeftSideNavComponent,
    CcbTackerDetailsComponent
  ],
  imports: [  
    CommonModule,  
    LeadRoutingModule,
    AgGridModule,    
    NgMultiSelectDropDownModule.forRoot(),
    MatDialogModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    MdbCheckboxModule, 
   ],
   schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  bootstrap: [ LeadDashboardComponent ],  
})
export class LeadModule { }
