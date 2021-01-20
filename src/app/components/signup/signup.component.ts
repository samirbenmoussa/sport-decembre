import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { MustMatch } from 'src/app/validators/mustMatch';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      FirstName: ['', [Validators.minLength(3), Validators.required]],
      LastName: ['', [Validators.minLength(4), Validators.required]],
      Email: ['', [Validators.email, Validators.required]],
      Password: ['', [Validators.minLength(8), Validators.required]],
      ConfirmPassword: ['']

    },
    {
      validators: MustMatch('Password','ConfirmPassword')
    })
  }
  signup(x: any) {
    console.log('here my object', x);
   // let users = JSON.parse(localStorage.getItem('users') || '[]');
   //users.push(x);
   // localStorage.setItem('users', JSON.stringify(users));
    // localStorage.removeItem('users'); 
  }

}
