import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, OnInit, Inject} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MyCellComponent } from '../my-cell/my-cell.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { MatDialog } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, Validators, FormGroup, FormControl, AbstractControl } from '@angular/forms';
import Validation from 'src/app/_shared/validation';
// import * as _ from 'lodash';


@Component({
  selector: 'app-add-work-type',
  templateUrl: './add-work-type.component.html',
  styleUrls: ['./add-work-type.component.scss']
})

export class AddWorkTypeComponent implements OnInit{

  dropdownList:any = [];
  selectedItems:any= [];
  public componentDestroyed = new Subject();
  isSubmitted: boolean = false;
  dropdownSettings: IDropdownSettings= {};

  addWorkTypeForm!: FormGroup;
  formData = new FormData();
  public uiBasicCollapsed = false;


  form: FormGroup = new FormGroup({
    workName: new FormControl(''),
    workCategory: new FormControl(''),
    active: new FormControl(''),
    updatedOn: new FormControl(''), 
    createdOn: new FormControl(''),
  });



  constructor(private http: HttpClient, public dialog: MatDialog, public apiService: ApiService, private formBuilder: FormBuilder) {


  }

  ngOnInit(): void {
    this.getAllWorkCategory();  // calling the function for add category
    this.getAllWorkType();

    this.addWorkTypeForm = this.formBuilder.group(
      {
        workName: ['', Validators.required],
        workCategory: ['', Validators.required],
        active: ['', Validators.required],
        updatedOn: ['', Validators.required],
        createdOn: ['', Validators.required],        
      }, 
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }     
    );
  

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];

    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },   
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }

 get f(): { [key: string]: AbstractControl } {
  return this.addWorkTypeForm.controls;
}
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make', cellRenderer: MyCellComponent},
    { field: 'model'},
    { field: 'price' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    sortable: true,
    filter: true,
  };
  
  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

 
  // Example load data from server
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.http.get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

  clearFilter(): void {
    this.agGrid.api.setFilterModel(null);
  } 


 /* openDialog() {
    const dialogRef = this.dialog.open(ExtraComponent, {
      height: '533px',
      width: '1100px',
    });
//*/
    openDialog() {
      const dialogRef = this.dialog.open(AddWorkTypeComponent, {
        height: '433px',
        width: '1000px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

// To fetch all work type/category from backend.
public all_work_category:any


public getAllWorkCategory(): void {
  this.apiService.getAllWorkCategory()
    .pipe()
    .subscribe(
      (data: any) => { 
        this.all_work_category = data.response;
        console.log("All Categories:", this.all_work_category[1].categoryName);
        for(let i =0; i<4; i++){
          console.log("All Categories:", this.all_work_category[i].categoryName);
        }
      },
      (error: HttpErrorResponse) => {

      });
}

public all_work_type : any;

public getAllWorkType(): void {
  this.apiService.getAllWorkType()
    .pipe()
    .subscribe(
      (data: any) => { 
        this.all_work_type = data.response;
        console.log("All Type:", this.all_work_type[1].workName);
        for(let i =0; i<4; i++){
          console.log("All Categories:", this.all_work_type[i].workName);
        }
      },
      (error: HttpErrorResponse) => {

      });
}

addWorkType() {

  console.log("Hello This add Work Type");
  

  this.isSubmitted = true;

    if (this.addWorkTypeForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));


const work_type = {
  workName: "string",
  createdOn: "2023-11-28",
  updatedOn: "2023-11-28",
  active: true,
  workCategory: 1
}

  this.apiService.addWorkType(work_type)
    .pipe(takeUntil(this.componentDestroyed))
    .subscribe(
      (data: any) => {
        this.isSubmitted = false;
      },
      (error: HttpErrorResponse) => {
        console.log(error);
        console.log(error.error);       
      });
}

}

