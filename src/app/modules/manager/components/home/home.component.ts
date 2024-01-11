import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, ViewChild, OnInit} from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable, Subject } from 'rxjs';
import { MyCellComponent } from '../my-cell/my-cell.component';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { ExtraComponent } from '../extra/extra.component';
import { MatDialog } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ConfirmDialogModel, ConfirmDialogueComponent } from '../confirm-dialogue/confirm-dialogue.component';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  dropdownList:any = [];
  selectedItems:any= [];
  dropdownSettings: IDropdownSettings= {};
  public uiBasicCollapsed = false;
  public ccbData:any = null;

  heroForm!: FormGroup;

  //selectedCityIds={};
  selectedCityIds?: any[] = [];

  variableName = [
    {
        id: 1,
        name: 'Karyn Wright',

    },
    {
        id: 2,
        name: 'Vaibhav',

    },
    {
      id: 3,
      name: 'Chetan',
  },
  {
    id: 4,
    name: 'Rudra',
},
{
  id: 5,
  name: 'Ganesh',
},
{
  id: 6,
  name: 'Saurabh',

},
{
  id: 7,
  name: 'Mahadev',
},


{
  id: 8,
  name: 'Ganesh hh',
},
{
  id: 9,
  name: 'Saurabh u',
},
{
  id: 10,
  name: 'Mahadev p',
},
  ]

  inputWidth: number = 200;

  mappedCountries = [];

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  public componentDestroyed = new Subject();

  constructor(private toastr: ToastrService, private http: HttpClient, public dialog: MatDialog, public apiService: ApiService, private fb: FormBuilder) {


  }
  collection:string[] = [];
  ngOnInit() {

    for (let i = 1; i <= 100; i++) {
      this.collection.push(`item ${i}`);
    }

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItems = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
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

    this.getAllCCBData();

    this.heroForm = this.fb.group({
      selectedCitiesIds: []
    });
    this.mappedCountries = this.getDataWithUniqueIds(this.cities);
  }

  page = 1;
  count = 0;
  pageSize = 4;
  pageSizes = [3, 6, 9];

  handlePageChange(event:any) {
    console.log("Page >>>>>>>>>>>>>>",event);
    console.log("Count is  >>>>>",this.count);
    console.log("Page is  >>>>>",this.page);
    console.log("Page Size is  >>>>>",this.pageSize);
    console.log("Page Sizes is  >>>>>",this.pageSizes);
    
    this.page = event;
  }

  getDataWithUniqueIds(data: any[]) {
    let result:any = [];
    data.forEach((x, index) => {
      result.push({
        name: x,
        id: index
      });
    });
    return result;
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
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

    openDialog() {
      const dialogRef = this.dialog.open(ExtraComponent, {
        // height: '550px',
        height: '548px',
        width: '2500px',
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 

  public getAllCCBData(): void {

    const request = {
      pageSize: 100,
      offset: 1
    }

    this.apiService.getCcbData(request)
      .pipe()
      .subscribe(
        (data: any) => {
          this.ccbData = data.response;
          console.log("All Type:", this.ccbData);

          console.log("All Categories:", this.ccbData[1].activityName.workName);
          console.log("All Categories:", this.ccbData[1].activityDescription);
          console.log("All Categories:", this.ccbData[1].applicationName.applicationAcronym);

          console.log("All Categories:", this.ccbData[1].applicationName.ccbLegacy);
          console.log("All Categories:", this.ccbData[1].projectStatus);
          console.log("All Categories:", this.ccbData[1].applicationName.onshoreDirector);

          console.log("All Categories:", this.ccbData[1].applicationName.offshoreLead);

          console.log("All Categories:", this.ccbData[1].applicationName.offshoreManager);

          console.log("All Categories:", this.ccbData[1].releaseId);

          console.log("All Categories:", this.ccbData[1].isCommited);
          console.log("All Categories:", this.ccbData[1].outlierReasons);
          console.log("All Categories:", this.ccbData[1].estimatedHours);

          console.log("All Categories:", this.ccbData[1].oct);
          console.log("All Categories:", this.ccbData[1].nov);
          console.log("All Categories:", this.ccbData[1].december);
          console.log("All Categories:", this.ccbData[1].jan);
          console.log("All Categories:", this.ccbData[1].feb);
          console.log("All Categories:", this.ccbData[1].mar);

          console.log("All Categories:", this.ccbData[1].apr);
          console.log("All Categories:", this.ccbData[1].may);
          console.log("All Categories:", this.ccbData[1].jun);
          console.log("All Categories:", this.ccbData[1].jul);
          console.log("All Categories:", this.ccbData[1].aug);
          console.log("All Categories:", this.ccbData[1].sep);
        },
        (error: HttpErrorResponse) => {

        });
  }

  isDropdownOpen: boolean = true;

  openDropdown(): void {
    this.isDropdownOpen = true;
    console.log("clicked on open");
    
  }

  closeDropdown(): void {
    this.isDropdownOpen = false;
  }

  clearSelectiona(): void {
    console.log("clicked on open clear");
    this.selectedCityIds = [];
  }


  cities: any[] = [
    { value: 1, text: "PID" },
    { value: 2, text: "SMB" },
    { value: 3, text: "CR" },
    { value: 4, text: "MWR" }
  ];

  isCitiesControlVisible = true;

  selectAll() {
    this.heroForm.get('selectedCitiesIds')?.setValue(this.cities);   
  }

  unselectAll() {
    this.heroForm.get("selectedCitiesIds")?.setValue([]);
  }

  arraylen:any = 0;

  onSelect(selectedItems: any): void {
    console.log('Selected Items:', this.heroForm.get('selectedCitiesIds')?.value);
    this.arraylen = this.heroForm.get('selectedCitiesIds')?.value.length
    console.log(this.arraylen);
    
    // Perform additional actions based on selected items
  }

  clearCities() {
    this.heroForm.get("selectedCitiesIds")?.patchValue([]);
    this.arraylen = this.heroForm.get('selectedCitiesIds')?.value.length
  }

  public updateCcbData(id: any): void {
    const dialogRef = this.dialog.open(ExtraComponent, {
      height: '548px',
      width: '2500px',
      // disableClose: true,
      data: id
    });
    dialogRef.afterClosed().subscribe(result => {
      this.getAllCCBData();
    });
  }

  public confirmDialog(id: number, name: any): void {
    let message = "Are you sure you want to delete?";
    let title = "Delete CCB Data";
    const dialogData = new ConfirmDialogModel(title, message);
    const dialogRef = this.dialog.open(ConfirmDialogueComponent, {
      width: '400px',
      height: '171px',
      data: dialogData
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {       
        this.deleteCcbData(id);
      }
    });
  }

  public deleteCcbData(id: any) {
    this.apiService.deleteCcbData(id)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {
          this.toastr.success('Successfully.', 'CCB Data Deleted', {
            titleClass: "center",
            messageClass: "center"
          });
          this.getAllCCBData();
        },
        (error: HttpErrorResponse) => {
          this.toastr.error('oops!! Something went wrong.', 'Error!!', {
            titleClass: "center",
            messageClass: "center"
          });
        });
  }

}