import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef } from 'ag-grid-community';
import { Observable } from 'rxjs/internal/Observable';
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/api.service';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import Validation from 'src/app/_shared/validation';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-extra',
  templateUrl: './extra.component.html',
  styleUrls: ['./extra.component.scss']
})
export class ExtraComponent {

  public all_work_type: any = null;

  public updateId: any = null;

  public all_app_data: any = null;

  addccbProjectForm!: FormGroup;

  heroForm!: FormGroup;

  isSubmitted: boolean = false;

  public isEditing: boolean = false;

  public componentDestroyed = new Subject();

  selectedCityIds = {};

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


  mappedCountries = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: ExtraComponent, @Inject(MatDialogRef) public dilogRef: MatDialogRef<ExtraComponent>, private toastr: ToastrService, public dialogRef: MatDialogRef<ExtraComponent>, private http: HttpClient, public dialog: MatDialog, public apiService: ApiService, private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.getAllWorkType();
    this.getAllAppGroupData();

    console.log("Comming value", this.data);


    if (this.data) {
      this.getCcbDataById(this.data);
      this.updateId = this.data;
    }

    this.addccbProjectForm = this.formBuilder.group(
      {
        activityName: ['', [Validators.required]],
        activityDescription: ['',],
        applicationName: ['',],
        projectStatus: ['',],
        ccbLegacy: ['',],
        onshoreDirector: ['',],
        offshoreManger: ['',],
        offshoreLead: ['',],
        releaseId: ['',],
        isCommited: ['',],
        outlierReasons: ['',],
        estimatedHours: ['',],
        oct: ['',],
        nov: ['',],
        december: ['',],
        jan: ['',],
        feb: ['',],
        mar: ['',],
        apr: ['',],
        may: ['',],
        jun: ['',],
        jul: ['',],
        aug: ['',],
        sep: ['',],
      },
      {
        validators: [Validation.match('password', 'confirmPassword')]
      }
    );

    this.addccbProjectForm.get('applicationName')?.setValue(0);
    this.addccbProjectForm.get('activityName')?.setValue(0);
    this.addccbProjectForm.get('ccbLegacy')?.setValue(0);

    this.addccbProjectForm.get('releaseId')?.setValue(0);
    this.addccbProjectForm.get('offshoreLead')?.setValue(0);
    this.addccbProjectForm.get('offshoreManger')?.setValue(0);

    this.addccbProjectForm.get('onshoreDirector')?.setValue(0);
    this.addccbProjectForm.get('projectStatus')?.setValue(0);
    this.addccbProjectForm.get('isCommited')?.setValue(0);


    this.heroForm = this.formBuilder.group({
      selectedCitiesIds: []
    });
    this.mappedCountries = this.getDataWithUniqueIds(this.cities);

  }

  get f(): { [key: string]: AbstractControl; } {
    return this.addccbProjectForm.controls;
  }

  getDataWithUniqueIds(data: any[]) {
    let result: any = [];
    data.forEach((x, index) => {
      result.push({
        name: x,
        id: index
      });
    });
    return result;
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  public getAllWorkType(): void {
    this.apiService.getAllWorkType()
      .pipe()
      .subscribe(
        (data: any) => {
          this.all_work_type = data.response;
          console.log("All Type ######:", this.all_work_type);
          console.log("All Type:", this.all_work_type[1].workName);
          for (let i = 0; i < 4; i++) {
            console.log("All Categories: nnnn", this.all_work_type[i].workName);
          }
        },
        (error: HttpErrorResponse) => {

        });
  }

  public getAllAppGroupData(): void {
    this.apiService.getAllAppGroupData()
      .pipe()
      .subscribe(
        (data: any) => {
          this.all_app_data = data.response;
        },
        (error: HttpErrorResponse) => {

        });
  }


  public addCcbProjectData() {

    console.log("Hello This add Work Type");

    this.isSubmitted = true;

    if (this.addccbProjectForm.get('activityName')?.value.toString() == "0" || this.addccbProjectForm.get('ccbLegacy')?.value.toString() == "0" || this.addccbProjectForm.get('isCommited')?.value.toString() == "0" ||
      this.addccbProjectForm.get('applicationName')?.value.toString() == "0" || this.addccbProjectForm.get('releaseId')?.value.toString() == "0" || this.addccbProjectForm.get('offshoreLead')?.value.toString() == "0" ||
      this.addccbProjectForm.get('offshoreManger')?.value.toString() == "0" || this.addccbProjectForm.get('onshoreDirector')?.value.toString() == "0" || this.addccbProjectForm.get('projectStatus')?.value.toString() == "0") {
      this.toastr.error('Please fill all required inputs', '', {
        titleClass: "center",
        messageClass: "message-text"
      });
      return;
    }

    if (this.addccbProjectForm.invalid) {
      return;
    }


    const ccb_project = {
      activityName: this.addccbProjectForm.get('activityName')?.value.toString(),
      activityDescription: this.addccbProjectForm.get('activityDescription')?.value.toString(),
      applicationName: this.addccbProjectForm.get('applicationName')?.value.toString(),
      projectStatus: this.addccbProjectForm.get('projectStatus')?.value.toString(),
      releaseId: this.addccbProjectForm.get('releaseId')?.value.toString(),
      isCommited: this.addccbProjectForm.get('isCommited')?.value.toString(),
      outlierReasons: this.addccbProjectForm.get('outlierReasons')?.value.toString(),
      estimatedHours: this.addccbProjectForm.get('estimatedHours')?.value.toString(),
      oct: this.addccbProjectForm.get('oct')?.value.toString(),
      nov: this.addccbProjectForm.get('nov')?.value.toString(),
      december: this.addccbProjectForm.get('december')?.value.toString(),
      jan: this.addccbProjectForm.get('jan')?.value.toString(),
      feb: this.addccbProjectForm.get('feb')?.value.toString(),
      mar: this.addccbProjectForm.get('mar')?.value.toString(),
      apr: this.addccbProjectForm.get('apr')?.value.toString(),
      may: this.addccbProjectForm.get('may')?.value.toString(),
      jun: this.addccbProjectForm.get('jun')?.value.toString(),
      jul: this.addccbProjectForm.get('jul')?.value.toString(),
      aug: this.addccbProjectForm.get('aug')?.value.toString(),
      sep: this.addccbProjectForm.get('sep')?.value.toString(),
    }

    this.apiService.addCCBProject(ccb_project)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {
          this.isSubmitted = false;
          this.onDismiss();
          this.toastr.success('Successfully.', 'Application Added', {
            titleClass: "center",
            messageClass: "message-text"
          });
        },
        (error: HttpErrorResponse) => {
          console.log(error);
          console.log(error.error);
          this.toastr.error('Opps..!', 'Something went wrong', {
            titleClass: "center",
            messageClass: "message-text"
          });
        });
  }


  //num: number = 0;
  public selectedValue: any = null;

  public onChangeApplication(value: any) {
    console.log(value);

    var num = parseInt(value.id)
    this.getAppGroupById(num)
  }



  public getAppGroupById(id: any) {
    this.apiService.getAppGroupById(id)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {
          console.log();

          console.log(this.fetchApplication(data.response));

          //this.addccbProjectForm.get('ccbLegacy')?.setValue(Number(this.fetchApplication(data.response.ccbLegacy)));
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        });
  }

  public getValue(id: any) {
    type account_type = {
      [key: number]: string
    }

    const account: account_type = {
      1: 'CCB',
      2: 'Chetan',
    }
    return account[id];
  }

  public fetchApplication(value: any) {

    type data = {
      [key: number]: string
    }

    const account: data = {
      1: 'CCB',
      2: 'Legacy T',
    }

    const project_status: data = {
      1: 'R',
      2: 'Y',
      3: 'G',
    }

    const onshore_director: data = {
      1: 'Jim Koernig',
      2: 'Jonie Greenwood',
      3: 'Muawiah Qaimari',
    }

    const offshore_manager: data = {
      1: 'Tarun Raghuwanshi',
      2: 'Daljeet Arora',
      3: 'Himanshu Mathur',
      4: 'Amit Patidar',
      5: 'Ranjit Rai',
      6: 'Dinesh Bansal (Gurgaon)',
      7: 'Prasad Kulkarni',
    }

    const onshore_lead: data = {
      1: 'Ankita Mittal',
      2: 'Ashish Bartwal',
      3: 'Ashish Ranjan',
      4: 'Darsha Naik',
      5: 'Gourav Patidar',
      6: 'Hrishikesh Kamthe',
      7: 'Istiyaqahmed Shaikh',
      8: 'Kushagra Mathur',
      9: 'Lalit Bhagwat',
      10: 'Narmada Nelluri',
      11: 'Poonam Trimukhe',
      12: 'Rajan Patil',
      13: 'Rakesh Koli',
      14: 'Rakesh Kumar Rout',
      15: 'Ravinder Kumar',
      16: 'Rudradeep Mandal',
      17: 'Sahil Jain',
      18: 'Sanjay Lokhande',
      19: 'Shefali Hambire',
      20: 'Suraj Shette',
      21: 'Swapnil Patil',
      22: 'Tushar Vispute',
      23: 'Vipin Kumar',
      24: 'Tarun Raghuwanshi',
      25: 'Daljeet Arora',
      26: 'Himanshu Mathur',
      27: 'Amit Patidar',
      28: 'Ranjit Rai',
      29: 'Dinesh Bansal (Gurgaon)',
      30: 'Prasad Kulkarni',
    }

    for (let key in account) {
      if (account[key] === value.ccbLegacy) {
        this.addccbProjectForm.get('ccbLegacy')?.setValue(Number(key));
      }
    }

    for (let key in onshore_director) {
      if (onshore_director[key] === value.onshoreDirector) {
        this.addccbProjectForm.get('onshoreDirector')?.setValue(Number(key));
      }
    }


    for (let key in offshore_manager) {
      if (offshore_manager[key] === value.offshoreManager) {
        this.addccbProjectForm.get('offshoreManger')?.setValue(Number(key));
      }
    }

    for (let key in onshore_lead) {
      if (onshore_lead[key] === value.offshoreLead) {
        this.addccbProjectForm.get('offshoreLead')?.setValue(Number(key));
      }
    }
  }


  onSelect(selectedItems: any): void {
    console.log('Selected Items:', selectedItems);
    // Perform additional actions based on selected items
  }

  cities: any[] = [
    { value: 1, text: "Vilnius" },
    { value: 2, text: "Kaunas" },
    { value: 3, text: "Pavilnys (Disabled)" },
    { value: 4, text: "Pabradė" }
  ];

  isCitiesControlVisible = true;

  selectAll() {
    this.heroForm.get('selectedCitiesIds')?.setValue(this.cities);
  }

  unselectAll() {
    this.heroForm.get("selectedCitiesIds")?.setValue([]);
  }

  onDismiss(): void {
    this.dilogRef.close({ status: false });
  }

  public updateCcbProjectData() {

    this.isSubmitted = true;

    if (this.addccbProjectForm.invalid) {
      return;
    }

    const ccb_project = {
      activityName: this.addccbProjectForm.get('activityName')?.value.toString(),
      activityDescription: this.addccbProjectForm.get('activityDescription')?.value.toString(),
      applicationName: this.addccbProjectForm.get('applicationName')?.value.toString(),
      projectStatus: this.addccbProjectForm.get('projectStatus')?.value.toString(),
      releaseId: this.addccbProjectForm.get('releaseId')?.value.toString(),
      isCommited: this.addccbProjectForm.get('isCommited')?.value.toString(),
      outlierReasons: this.addccbProjectForm.get('outlierReasons')?.value.toString(),
      estimatedHours: this.addccbProjectForm.get('estimatedHours')?.value.toString(),
      oct: this.addccbProjectForm.get('oct')?.value.toString(),
      nov: this.addccbProjectForm.get('nov')?.value.toString(),
      december: this.addccbProjectForm.get('december')?.value.toString(),
      jan: this.addccbProjectForm.get('jan')?.value.toString(),
      feb: this.addccbProjectForm.get('feb')?.value.toString(),
      mar: this.addccbProjectForm.get('mar')?.value.toString(),
      apr: this.addccbProjectForm.get('apr')?.value.toString(),
      may: this.addccbProjectForm.get('may')?.value.toString(),
      jun: this.addccbProjectForm.get('jun')?.value.toString(),
      jul: this.addccbProjectForm.get('jul')?.value.toString(),
      aug: this.addccbProjectForm.get('aug')?.value.toString(),
      sep: this.addccbProjectForm.get('sep')?.value.toString(),
    }

    this.apiService.updateCCBData(this.updateId, ccb_project)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {
          this.isSubmitted = false;
          this.onDismiss();
          this.toastr.success('Successfully.', 'CCB Data Updated', {
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

  getCcbDataById(id: any) {
    this.isEditing = true;
    this.apiService.getCcbDataById(id)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {

          type data_type = {
            [key: number]: string
          }

          const commited: data_type = {
            1: 'Y',
            2: 'N',
          }
          
          for (let key in commited) {
            if (commited[key] === data.response.isCommited.trim()) {             
              this.addccbProjectForm.get('isCommited')?.setValue(Number(key));
            }
          }

          const project_status: data_type = {
            1: 'R',
            2: 'Y',
            3: 'G',
          }
          
          for (let key in project_status) {
            if (project_status[key] === data.response.projectStatus.trim()) {             
              this.addccbProjectForm.get('projectStatus')?.setValue(Number(key));
            }
          }
          const release_id: data_type = {
            1: '22.04',
            2: '22.07',
            3: '22.08',
            4: '22.09',
            5: '22.10',
            6: '22.11',
            7: '22.12',
            8: '23.01',
            9: '23.02',
            10: '23.03',
            11: '23.04',
            12: '23.05',
            13: '23.06',
            14: '23.07',
            15: '23.08',
            16: '23.09',
            17: '23.10',
            18: '23.11',
            19: '23.12',
            20: '24.01',
            21: '24.02',
            22: '24.03',
            23: '24.04',
            24: '24.05',
            25: '24.06',
            26: '24.07',
            27: '24.08',
            28: '24.09',
            29: '24.10',
            30: '24.11',
            31: '24.12',
            32: 'OnHold',
            33: 'Ongoing',
            34: 'TBD',
          }      

          for (let key in release_id) {
            if (release_id[key] === data.response.releaseId.trim()) {             
              this.addccbProjectForm.get('releaseId')?.setValue(Number(key));
            }
          }

          this.fetchApplication(data.response.applicationName);
          this.addccbProjectForm.get('activityName')?.setValue(data.response.id);
          this.addccbProjectForm.get('activityDescription')?.setValue(data.response.activityDescription);
          this.addccbProjectForm.get('applicationName')?.setValue(data.response.applicationName.id); 
          this.addccbProjectForm.get('outlierReasons')?.setValue(data.response.outlierReasons);
          this.addccbProjectForm.get('estimatedHours')?.setValue(data.response.estimatedHours);
          this.addccbProjectForm.get('oct')?.setValue(data.response.oct);
          this.addccbProjectForm.get('nov')?.setValue(data.response.nov);
          this.addccbProjectForm.get('december')?.setValue(data.response.december);
          this.addccbProjectForm.get('jan')?.setValue(data.response.jan);
          this.addccbProjectForm.get('mar')?.setValue(data.response.mar);
          this.addccbProjectForm.get('feb')?.setValue(data.response.feb);
          this.addccbProjectForm.get('apr')?.setValue(data.response.apr);
          this.addccbProjectForm.get('may')?.setValue(data.response.may);
          this.addccbProjectForm.get('jun')?.setValue(data.response.jun);
          this.addccbProjectForm.get('jul')?.setValue(data.response.jul);
          this.addccbProjectForm.get('aug')?.setValue(data.response.aug);
          this.addccbProjectForm.get('sep')?.setValue(data.response.sep);     
        },
        (error: HttpErrorResponse) => {
          console.log(error);
        });
  }

}

