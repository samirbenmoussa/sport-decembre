import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup;
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      FirstName:['', [Validators.minLength(3), Validators.required]],
      LastName:['', [Validators.minLength(4 ), Validators.required]],
      Email:['', [Validators.email , Validators.required]],
      Password:[''],
      ConfirmPassword:['']

    })
  }
  signup(){
    alert ('btn clicked')
  }

}
