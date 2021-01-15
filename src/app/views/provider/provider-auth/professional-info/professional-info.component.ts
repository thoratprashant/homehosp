import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.scss']
})
export class ProfessionalInfoComponent implements OnInit {

  professionalInformationForm:FormGroup

  constructor() { }

  ngOnInit(): void {
    this.professionalInformationForm = new FormGroup({
      caqhNumber: new FormControl("", Validators.required),
    })
  }

}
