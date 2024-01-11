import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialogue',
  templateUrl: './confirm-dialogue.component.html',
  styleUrls: ['./confirm-dialogue.component.scss']
})
export class ConfirmDialogueComponent implements OnInit {
  title: string;
  message: string;

  constructor(@Inject(MatDialogRef) public dialogRef: MatDialogRef<ConfirmDialogueComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogueComponent) {
      this.title = data.title;
      this.message = data.message;
    }

    onNoClick(): void {
      this.dialogRef.close();
    }
    onConfirm(): void {
      // Close the dialog, return true
      this.dialogRef.close(true);
    }

    onDismiss(): void {
      // Close the dialog, return false
      this.dialogRef.close(false);
    }
  ngOnInit() {
  }
}
export class ConfirmDialogModel {

  constructor(public title: string, public message: string) {
  }
}
