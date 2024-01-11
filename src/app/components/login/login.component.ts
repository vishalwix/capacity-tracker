import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/_helpers/constant';
import { AuthenticationService } from 'src/app/_services';
import { takeUntil } from 'rxjs/operators';
import { ApiService } from 'src/app/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../assets/css/style.css', '../../../assets/vendors/css/vendor.bundle.base.css', '../../../assets/vendors/mdi/css/materialdesignicons.min.css']
})
export class LoginComponent implements OnInit {


  loginForm!: FormGroup;
  signInSubmitted = false;
  public componentDestroyed = new Subject();

  constructor(private router: Router, private formBuilder: FormBuilder, private authenticationService: AuthenticationService, public apiService: ApiService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.loginForm.controls;
  }

  onSignIn() {
    this.signInSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    const requestObject = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };

    this.authenticationService.login(requestObject)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => { 
          if (data.response.role == 'ROLE_MANAGER') {
            //localStorage.setItem('oldpw', this.loginForm.value.password);
            this.router.navigate(['/manager/manager-home']);
          } else if (data.response.role == 'ROLE_LEAD') {
            this.router.navigate(['/lead/home']);
          } else if (data.response.role == 'ROLE_ADMIN') {
            this.router.navigate(['/admin/home']);
          }
          this.signInSubmitted = false;
          this.loginForm.reset();
        },
        (error: HttpErrorResponse) => {          
          console.log(error);
        });
  }
}
