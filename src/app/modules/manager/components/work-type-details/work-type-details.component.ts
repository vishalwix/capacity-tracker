import { Component, OnInit } from '@angular/core';
import { AddWorkTypeComponent } from '../add-work-type/add-work-type.component';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { AddWorkCategoryDetailsComponent } from '../add-work-category-details/add-work-category-details.component';
import { AddWorkTypeDetailsComponent } from '../add-work-type-details/add-work-type-details.component';
import { ToastrService } from 'ngx-toastr';
import { ConfirmDialogModel, ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';
import { ApiService } from 'src/app/api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-work-type-details',
  templateUrl: './work-type-details.component.html',
  styleUrls: ['./work-type-details.component.scss']
})
export class WorkTypeDetailsComponent implements OnInit {

  public componentDestroyed = new Subject();

  constructor(private authenticationService: AuthenticationService, private http: HttpClient, public dialog: MatDialog, private toastr: ToastrService, public apiService: ApiService,) {
  }
  ngOnInit(): void {
    this.getAllWorkType();
  }
  openDialog() {
    const dialogRef = this.dialog.open(AddWorkTypeDetailsComponent, {
      height: '323px',
      width: '706px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      this.getAllWorkType();
    });
  }

  showSuccess() {
    this.toastr.success('Work Details Addedd Successfully..!!', 'Succeess!!');

  }
  showError() {
    this.toastr.error('Something went wrong..!!', 'Error!!');
  }

  showWarning() {
    this.toastr.warning('Something went wrong..!!', 'Error!!');
  }

  public confirmDialog(id: number, name: any): void {
    let message = "Are you sure you want to delete?";
    let title = "Delete Work Type";
    const dialogData = new ConfirmDialogModel(title, message);
    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      width: '400px',
      height: '171px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {       
        this.deleteWorkType(id);
      }
    });
  }

  public confirmActivateInactivate(active: any, id: any, workTypeName: any, workCategory: any): void {
    var msg = ""
    if(active){
      msg = "inactive"
    }else{
      msg = "active"
    }
    let message = "Are you sure you want to "+msg+" work type?";
    let title = "Change Work Type Status";
    const dialogData = new ConfirmDialogModel(title, message);
    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      width: '400px',
      height: '171px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.activeInactiveWorkType(active, id, workTypeName, workCategory);
      }
    });
  }

  public updateWorkTypeDetails(id: any): void {
    const dialogRef = this.dialog.open(AddWorkTypeDetailsComponent, {
      height: '323px',
      width: '706px',
      // disableClose: true,
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllWorkType();
    });
  }

  public all_work_type: any;

  public getAllWorkType(): void {
    this.apiService.getAllWorkType()
      .pipe()
      .subscribe(
        (data: any) => {
          this.all_work_type = data.response;
          console.log("All Type:", this.all_work_type);
          for (let i = 0; i < 4; i++) {
            console.log("All Categories:", this.all_work_type[i].workName);
          }
        },
        (error: HttpErrorResponse) => {

        });
  }
  public isActive: any = false;

  public activeInactiveWorkType(isActiveById: any, id: any, workName: any, workCategory: any) {


    if (isActiveById) {
      this.isActive = false;
    } else {
      this.isActive = true;
    }

    const work_type = {
      workName: workName,
      active: this.isActive,
      workCategory: workCategory
    }

    this.apiService.updateWorkType(id, work_type)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {
          this.toastr.success('Successfully.', 'Work Type Status Updated', {
            titleClass: "center",
            messageClass: "center"
          });
          this.getAllWorkType();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('oops!! Something went wrong.', 'Error!!');
        });
  }

  public deleteWorkType(id: any) {
    this.apiService.deleteWorkType(id)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {
          this.toastr.success('Successfully.', 'Work Type Deleted', {
            titleClass: "center",
            messageClass: "center"
          });
          this.getAllWorkType();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('oops!! Something went wrong.', 'Error!!', {
            titleClass: "center",
            messageClass: "center"
          });
        });
  }

 public logout(){
    this.authenticationService.logout();
    location.reload();
  }

}
