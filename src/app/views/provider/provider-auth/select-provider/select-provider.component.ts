 
import { Component, OnInit, ViewChild } from '@angular/core'; 
import { Validators,FormBuilder, FormGroup, FormControl } from '@angular/forms';

export interface Animal {
  name: string;
  sound: string;
}

@Component({
  selector: 'app-select-provider',
  templateUrl: './select-provider.component.html',
  styleUrls: ['./select-provider.component.scss']
})
export class SelectProviderComponent implements OnInit {

  selectProviderForm:FormGroup;
 

  constructor(private fb: FormBuilder,) { }

  ngOnInit(): void {
    this.buildProviderForm();
  }

  buildProviderForm() {
    this.selectProviderForm = this.fb .group({
      subtype: ['', Validators.required],
      providerType: ['', Validators.required],
    })
  }

}
