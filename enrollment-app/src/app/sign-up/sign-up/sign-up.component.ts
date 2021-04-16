import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, AsyncValidatorFn, ValidationErrors, AbstractControl } from '@angular/forms';
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
  showMessage = false; 
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

  checkUsername(event: any) {
    console.log(event);
    var newProfile: profile = {
      username: '',
      password: '',
      firstname: '',
      lastname: ''
    }
    newProfile.username = event.target.value; 
    console.log(event.target.value)
    let response = this.client.checkUsername(newProfile);
    console.log(event.target.value)
    console.log(response)
    this.showMessage = !response; 
  }
  private validateUsername(): ValidatorFn {
    var newProfile: profile = {
      username: '',
      password: '',
      firstname: '',
      lastname: ''
    }
    
    return (control: AbstractControl): ValidationErrors | null => {
      newProfile.username = control.value;

      let response = this.client.checkUsername(newProfile);
      console.log(response);
      
      if(response){
        console.log("response okay");
        return null;
      }
      else{
        console.log("response taken");
        return {'usernameTaken': true};
      }
    //   if (this.client.checkUsername() == control.value)
    //     return {'usernameTaken': true};
    //   else 
    //     return null;
    }
  }

  ngOnInit(): void {
    console.log("success");
    console.log(this.f);
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
