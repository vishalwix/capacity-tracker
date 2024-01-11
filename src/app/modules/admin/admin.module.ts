import { AdminRoutingModule } from './admin-routing.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AgGridModule } from 'ag-grid-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { ToastrModule } from 'ngx-toastr';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminHomeComponent
  ],
  imports: [  
    CommonModule,  
    AdminRoutingModule,
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
  bootstrap: [ AdminDashboardComponent ],  
})
export class AdminModule { }
