import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/_services';

@Component({
  selector: 'app-lead-home',
  templateUrl: './lead-home.component.html',
  styleUrls: ['./lead-home.component.scss']
})
export class LeadHomeComponent {

  constructor(private authenticationService: AuthenticationService) {
  }

  public logout(){
    this.authenticationService.logout();
    location.reload();
  }

}
