import { FormGroup } from '@angular/forms';

export class Constants {
  public static PATTERN = '[A-Za-z0-9._%+-]{1,}@[a-zA-Z0-9]{1,}([.]{1}[a-zA-Z0-9]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})';
  public static PASSWORDPATTERN = '^[#.0-9a-zA-Z\s,-_@`~!%^&*()_+-=?<>${}[]|\/]+$';

  // public static NAMEPPATTERN = '^[a-zA-Z\s,[]|\/]+';
  public static NAMEPPATTERN = '^[a-zA-Z]*$';
  public static ADDRESSPATTERN = '^[#.0-9a-zA-Z\s,-_`~!%^&*()_+-=?<>${}[]|\/]+$';
  public static NO_START_END_SPACE_PATTERN = '^([a-zA-Z][a-zA-Z ]*[a-zA-Z])*$';
   public static LINK_PATTERN = '(https://)(www.)?([a-zA-Z0-9]+).[a-zA-Z0-9]*.[a-z]{3}.?([a-z]+)?';

}

export function MustMatch(controlName: string, matchingControlName: string) {
  return (formGroup: FormGroup) => {
    const control = formGroup.controls[controlName];
    const matchingControl = formGroup.controls[matchingControlName];

    if (matchingControl.errors && !matchingControl.errors['mustMatch']) {
      return;
    }
    if (control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
    } else {
      matchingControl.setErrors(null);
    }
  };

}
