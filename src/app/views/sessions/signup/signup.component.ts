import { Component, OnInit, ViewChild } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatProgressBar } from '@angular/material/progress-bar';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild(MatProgressBar) progressBar: MatProgressBar;
  @ViewChild(MatButton) submitButton: MatButton;

  signupForm: FormGroup
  constructor() {}

  ngOnInit() { 

    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),   
      firstName: new FormControl("", Validators.required),
      lastName: new FormControl("", Validators.required),
      contactNumber: new FormControl("", Validators.required)
      
    })
  }

  signup() {
    const signupData = this.signupForm.value;
    console.log(signupData);

    this.submitButton.disabled = true;
    this.progressBar.mode = 'indeterminate';
  }

}
