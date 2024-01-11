import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, Inject } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MyCellComponent } from '../my-cell/my-cell.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, Validators, FormGroup, AbstractControl } from '@angular/forms';
import Validation from 'src/app/_shared/validation';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { formatDate } from '@angular/common';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-work-type-details',
  templateUrl: './add-work-type-details.component.html',
  styleUrls: ['./add-work-type-details.component.scss'],
  providers: [DatePipe]
})
export class AddWorkTypeDetailsComponent implements OnInit {

  addWorkForm!: FormGroup;
  isSubmitted: boolean = false;
  extra: any = null;
  public updateId: any = null;
  public isEditing: boolean = false;
  public componentDestroyed = new Subject();
  public all_work_category: any = null;
  currentDate: any = null; 
  isActiveById: boolean = false;

  constructor(private toastr: ToastrService, private http: HttpClient, public dialog: MatDialog, public apiService: ApiService, private formBuilder: FormBuilder, @Inject(MatDialogRef) public dilogRef: MatDialogRef<AddWorkTypeDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AddWorkTypeDetailsComponent, private datePipe: DatePipe) {
    
  }

  ngOnInit(): void {

    this.currentDate = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.addWorkForm = this.formBuilder.group({
      workType: ['', [Validators.required]],
      workCategory: ['', [Validators.required]],
    });

    if (this.data) {
      this.getProductsById(this.data);
      this.updateId = this.data; 
    }
    this.getAllWorkCategory();
  }

  onDismiss(): void {
    this.dilogRef.close({ status: false });
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.addWorkForm.controls;
  }

  onReset(): void {
    this.addWorkForm.reset();
  }

  getProductsById(id: any) {
    this.isEditing = true;
    this.apiService.getWorkTypeById(id)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {

          this.addWorkForm.get('workType')?.setValue(data.response.workName);
          this.addWorkForm.get('workCategory')?.setValue(data.response.workCategory.id);
          this.isActiveById = data.response.active;
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        });
  }

  public getAllWorkCategory(): void {
    this.apiService.getAllWorkCategory()
      .pipe()
      .subscribe(
        (data: any) => {
          this.all_work_category = data.response;          
        },
        (error: HttpErrorResponse) => {

        });
  }


  public addWorkTypeDetails() {

    this.isSubmitted = true;

    if (this.addWorkForm.invalid) {
      this.extra = "error"
      return;
    }

    const work_type = {
      workName: this.addWorkForm.get('workType')?.value,
      createdOn: this.currentDate.toString(),
      updatedOn: null,
      active: true,
      workCategory: this.addWorkForm.get('workCategory')?.value
    }

    this.apiService.addWorkType(work_type)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {
          this.isSubmitted = false;
          this.onDismiss();
          this.toastr.success('Successfully.', 'Work Type Created', {
            titleClass: "center",
            messageClass: "message-text"
          });
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('oops!! Something went wrong.', 'Error!!', {
            titleClass: "center",
            messageClass: "center"
          });
          console.log(error);
          console.log(error.error);
        });
  }

  public updateWorkTypeDetails() {

    this.isSubmitted = true;

    if (this.addWorkForm.invalid) {  
      return;
    }

    const work_type = {
      workName: this.addWorkForm.get('workType')?.value,
      createdOn: this.currentDate.toString(),
      updatedOn: this.currentDate.toString(),
      active: this.isActiveById,
      workCategory: this.addWorkForm.get('workCategory')?.value
    }

    this.apiService.updateWorkType(this.updateId, work_type)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {
          this.isSubmitted = false;
          this.onDismiss();
          this.toastr.success('Successfully.', 'Work Type Updated', {
            titleClass: "center",
            messageClass: "center"
          });
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('oops!! Something went wrong.', 'Error!!', {
            titleClass: "center",
            messageClass: "center"
          });
          console.log(error);
          console.log(error.error);
        });
  }
}

