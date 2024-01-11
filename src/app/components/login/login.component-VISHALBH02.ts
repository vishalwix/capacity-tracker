import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { Constants } from 'src/app/_helpers/constant';
import { AuthenticationService } from 'src/app/_services';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../../../assets/css/style.css', '../../../assets/vendors/css/vendor.bundle.base.css', '../../../assets/vendors/mdi/css/materialdesignicons.min.css'] 
})
export class LoginComponent {
  signInForm!: FormGroup;
  signInSubmitted = false;
  public componentDestroyed = new Subject();

  constructor(private formBuilder: FormBuilder, private authenticationService: AuthenticationService, ) { }

  ngOnInit(): void {

    this.signInForm = this.formBuilder.group({
      email: new FormControl('', Validators.compose([Validators.required])),
      password: new FormControl('', Validators.compose([Validators.required]))
    });
   
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.signInForm.controls;
  }

  onSignIn() {
    this.signInSubmitted = true;
    alert("Alert text")
    //alert(""+this.signInForm.get('email')?.value + this.signInForm.get('password')?.value)
    if (this.signInForm.invalid) {
      return;
    }

    const requestObject = {
      email: this.signInForm.value.email,
      password: this.signInForm.value.password,
    };
    this.authenticationService.login(requestObject)
      .pipe(takeUntil(this.componentDestroyed))
      .subscribe(
        (data: any) => {
          if( data.role=='ROLE_MANAGER'){
            
            localStorage.setItem('oldpw',this.signInForm.value.password);
          }else if(data.role=='ROLE_USER' ){
         
          }
          this.signInSubmitted = false;
          this.signInForm.reset();
        },
        (error: HttpErrorResponse) => {
          console.log(error);       
        });
  }

}