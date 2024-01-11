import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-manager-home',
  templateUrl: './manager-home.component.html',
  styleUrls: ['./manager-home.component.scss']
})
export class ManagerHomeComponent {

  constructor(private authenticationService: AuthenticationService) {
  }


  public logout(){
    this.authenticationService.logout();
    location.reload();
  }
}
