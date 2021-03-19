import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup; 
  constructor(private formBuilder: FormBuilder,) { 
    this.registerForm = this.formBuilder.group({
        username: ['', Validators.required],
        first_name: ['', Validators.required],
        last_name: ['', Validators.required],
        password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

}
