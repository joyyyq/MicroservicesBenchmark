import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
import { RegisterClientService } from '../../services/register-client.service';
import { Router } from '@angular/router';
// import { throwError } from 'rxjs';

type profile =   {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup; 
  loading = false;
  submitted = false;
  returnUrl?: string;

  constructor(
    private formBuilder: FormBuilder,
    private client: RegisterClientService,
    private router: Router
  ) { 
    this.signUpForm = this.formBuilder.group({
        username: ['', [Validators.required, this.validateUsername()]],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        password: ['', Validators.required]
    });
    console.log("construct");
  }
  // convenience getter for easy access to form fields
  get f() { return this.signUpForm!.controls; }

  private validateUsername(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (this.client.checkUsername() == control.value)
        return {'usernameTaken': true};
      else 
        return null;
    }
  }

  ngOnInit(): void {
    console.log("success");
  }

  onSubmit() {
    console.log("success 2");
    this.submitted = true;
    
    var newProfile: profile = {
      username: '',
      password: '',
      firstname: '',
      lastname: ''
    }
    newProfile.username = this.signUpForm.get('username')!.value;
    newProfile.password = this.signUpForm.get('password')!.value;
    newProfile.firstname = this.signUpForm.get('first_name')!.value;
    newProfile.lastname = this.signUpForm.get('last_name')!.value;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.signUpForm!.invalid) {
        return;
    }

    //this.loading = true;
    let response = this.client.register(newProfile);
    console.log(response)
    this.submitted = true;
    if (response == false) { // shouldn't have this error since have already addressed usernameTaken error when user enters a username
      this.router.navigate(['/register']); 
    }
    else this.router.navigate(['.']);
  }
}
