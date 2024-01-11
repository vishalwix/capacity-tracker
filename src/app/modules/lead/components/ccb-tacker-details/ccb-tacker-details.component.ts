import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthenticationService } from 'src/app/_services';
import { ExtraComponent } from 'src/app/modules/manager/components/extra/extra.component';

@Component({
  selector: 'app-ccb-tacker-details',
  templateUrl: './ccb-tacker-details.component.html',
  styleUrls: ['./ccb-tacker-details.component.scss']
})
export class CcbTackerDetailsComponent {

  constructor(private authenticationService: AuthenticationService, public dialog: MatDialog) {
  }

  public logout(){
    this.authenticationService.logout();
    location.reload();
  }

  openDialog() {
    const dialogRef = this.dialog.open(ExtraComponent, {
      height: '610px',
      width: '1300px',
    });

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}

}
