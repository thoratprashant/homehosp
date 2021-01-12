import { Component, OnInit } from '@angular/core'; 
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-mini-survey',
  templateUrl: './mini-survey.component.html',
  styleUrls: ['./mini-survey.component.scss']
})
export class MiniSurveyComponent implements OnInit { 
  firstFormGroup: FormGroup; 

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    }); 
  }

}
