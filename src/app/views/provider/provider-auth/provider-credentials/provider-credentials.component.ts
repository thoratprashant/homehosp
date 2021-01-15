import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-provider-credentials',
  templateUrl: './provider-credentials.component.html',
  styleUrls: ['./provider-credentials.component.scss']
})
export class ProviderCredentialsComponent implements OnInit {

  credentialsForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.credentialsForm = new FormGroup({
      caqhNumber: new FormControl("", Validators.required),
    })
  }

}
