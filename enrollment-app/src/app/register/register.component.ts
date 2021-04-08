import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterClientService } from '../services/register-client.service';
import { Router, ActivatedRoute } from '@angular/router';

type profile =   {
  username: string;
  password: string;
  firstname: string;
  lastname: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup; 
  loading = false;
  submitted = false;
  returnUrl?: string;

  constructor(
    private formBuilder: FormBuilder,
    private client: RegisterClientService,
    private router: Router
  ) { 
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        password: ['', Validators.required]
    });
    console.log("construct");
  }
  // convenience getter for easy access to form fields
  get f() { return this.registerForm!.controls; }

  ngOnInit(): void {
    console.log("success");
  }
  onSubmit() {
    console.log("success 2");
    this.submitted = true;
    
    var newProfile: profile = {
      username: 'Tamzid',
      password: 'testpass',
      firstname: 'xccxx',
      lastname: 'xcxccx'
    }
    newProfile.username = this.registerForm.get('username')!.value;
    newProfile.password = this.registerForm.get('password')!.value;
    newProfile.firstname = this.registerForm.get('first_name')!.value;
    newProfile.lastname = this.registerForm.get('last_name')!.value;

    // reset alerts on submit
    // this.alertService.clear();

    // stop here if form is invalid
    if (this.registerForm!.invalid) {
        return;
    }

    //this.loading = true;
    this.client.register(newProfile);
    this.submitted = true;
    //this.authenticationService.login(this.f.username.value, this.f.password.value)
    //    .pipe(first())
         //.subscribe(
          //   data => {
         //        this.router.navigate([this.returnUrl]);
         //    },
         //    error => {
    //             this.alertService.error(error);
    //             this.loading = false;
    //         });
    this.router.navigate(['.']);
  }
}
