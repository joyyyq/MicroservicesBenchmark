import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router
  ) {
      this.signInForm = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.signInForm!.controls; }

  ngOnInit() {
  }

  onSubmit() {
      this.submitted = true;
      // stop here if form is invalid
      if (this.signInForm!.invalid) {
          return;
      }
      this.router.navigate(['/dashboard']);
  }
}
