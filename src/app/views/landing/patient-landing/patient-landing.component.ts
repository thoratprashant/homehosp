import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-landing',
  templateUrl: './patient-landing.component.html',
  styleUrls: ['./patient-landing.component.scss']
})
export class PatientLandingComponent implements OnInit {

  howDoesWork:any;
  visitorsThrough:any;

  constructor() { }

  ngOnInit(): void {
    this.howDoesWork = [
      {
        hdwImg:'assets/images/ark/enroll.png',
        hdwName:'1. Enroll',
        hdwDesc:'Creating an account takes only few steps and is done in a minute',
      },
      {
        hdwImg:'assets/images/ark/choose.png',
        hdwName:'2. Choose',
        hdwDesc:'Search through our network of certified doctors and choose the one thats right for you.',
      },
      {
        hdwImg:'assets/images/ark/visit.png',
        hdwName:'3. Visit',
        hdwDesc:'Our web based visits use secure, high-quality streaming video. See and speak with a doctor from home.',
      }
    ]
    this.visitorsThrough = [
      {
        throught:"Dummy is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's lorem dummy",
        throughtBy:"Carly R. Smith"
      },
      {
        throught:"Dummy is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's lorem dummy",
        throughtBy:"Herbert K. Daum"
      },
      {
        throught:"Dummy is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's lorem dummy",
        throughtBy:"Bradley J. Sherman"
      }
    ]
  }

}
