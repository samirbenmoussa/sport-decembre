import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.signupForm=this.formBuilder.group({
      FirstName:[''],
      LastName:[''],
      Email:[''],
      Password:[''],
      ConfirmPassword:['']

    })
  }
  signup(){
    alert ('btn clicked')
  }

}
