import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  personalInfoForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.personalInfoForm = new FormGroup({
    })
  }

}
