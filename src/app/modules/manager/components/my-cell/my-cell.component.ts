import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

export interface MyCellParams {
  buttonText?: string;
}

@Component({
  selector: 'app-my-cell',
  template: `    
    
    <div *ngIf="value=='Porsche'" class="btn btn-inverse-primary btn-fw">{{value}}</div>
    <div *ngIf="value=='Toyota'" class="btn btn-inverse-warning btn-fw">{{value}}</div>
    <div *ngIf="value=='Ford'" class="btn btn-inverse-secondary btn-fw">{{value}}</div>
  `,
  styles: [
  ]
})
export class MyCellComponent implements OnInit, ICellRendererAngularComp {

  value: any;
  buttonText: string = 'Default';

  agInit(params: ICellRendererParams & MyCellParams): void {
   this.value = params.value
   this.buttonText = params.buttonText ?? 'Default';
  }

  refresh(params: ICellRendererParams & MyCellParams): boolean {
    return false;
  }

  onClick(event: any){
    alert('Cell value is ' + this.value);
  }

  ngOnInit(): void {
  }

}