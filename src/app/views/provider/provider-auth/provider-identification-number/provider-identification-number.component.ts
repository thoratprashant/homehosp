 
import { Component, OnInit, ViewChild } from '@angular/core'; 
import { Validators,FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-provider-identification-number',
  templateUrl: './provider-identification-number.component.html',
  styleUrls: ['./provider-identification-number.component.scss']
})
export class ProviderIdentificationNumberComponent implements OnInit {

  pinForm:FormGroup;
  caqhError = false;
  caqhNot = true;

  constructor() { }

  ngOnInit(): void {
    this.pinForm = new FormGroup({
      caqhNumber: new FormControl("", Validators.required),
    })
  }

  
  caqhNumber($event){
    this.caqhError = true;
    this.caqhNot = false;
  }
}
