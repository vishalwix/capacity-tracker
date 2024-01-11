import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent {

  constructor(private authenticationService: AuthenticationService) {
  }

  public logout(){
    this.authenticationService.logout();
    location.reload();
  }

}
