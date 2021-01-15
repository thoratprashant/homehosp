import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-office-info',
  templateUrl: './office-info.component.html',
  styleUrls: ['./office-info.component.scss']
})
export class OfficeInfoComponent implements OnInit {
  officeInfoForm: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.officeInfoForm = new FormGroup({
    })
  }

}
