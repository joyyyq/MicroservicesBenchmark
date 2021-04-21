import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AsyncValidatorFn, ValidationErrors, AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterClientService } from '../../services/register-client.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl?: string;
  showMessage = false;
  pwdNotMatch = false;
  username?: string;

  constructor(
      private formBuilder: FormBuilder,
      private client: RegisterClientService,
      private router: Router
  ) {
      this.signInForm = this.formBuilder.group({
        username: ['', [Validators.required], [this.validateUsername()]],
        password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signInForm!.controls; }

  validateUsername(): AsyncValidatorFn {
    return async (control: AbstractControl): Promise<ValidationErrors | null> => {
      console.log(control.value);
      if(control.value == "")
        return null;
      let response = await this.client.checkUsername(control.value);
      console.log("validateUsername " + response);
      
      if(response){
        console.log("userName not exists");
        this.showMessage = true;
        return {'usernameNotExist': true};
      }
      else{
        console.log("userName okay");
        this.showMessage = false;
        this.username = this.signInForm.controls['username'].value;
        console.log("userName is " + this.username);
        return null;
      }
    }
  }

  ngOnInit() {
  }

  async onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.signInForm!.invalid) {
          return;
      }

      var fusername = this.signInForm.get('username')!.value;
      var fpwd = this.signInForm.get('password')!.value;
      
      let response = await this.client.checkPassword(fusername, fpwd);
      console.log("validatePwd response: " + response);
      if (response){
        this.pwdNotMatch = false;
        this.router.navigate(['/dashboard']);
      }else{
        this.pwdNotMatch = true;
        this.router.navigate(['/sign-in']);
      }
  }
}
