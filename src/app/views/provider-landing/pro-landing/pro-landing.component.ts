import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pro-landing',
  templateUrl: './pro-landing.component.html',
  styleUrls: ['./pro-landing.component.scss']
})
export class ProLandingComponent implements OnInit {
  docProfile : any;

  constructor() { }

  ngOnInit(): void {
    this.docProfile = [
      {
        docImg:'assets/images/ark/dr-1.png',
        docName:'Dr. James Anderson',
        docProf:'Dentist',
        docAdd:'washington, D.C.',
        docAbout:'Lorem ipsum dolor sit amet, sapien etiam, nunc  viva', 
      },
      {
        docImg:'assets/images/ark/dr-2.png',
        docName:'Dr. Lora Smith',
        docProf:'Cardiologists ',
        docAdd:'washington, D.C.',
        docAbout:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum ', 
      },
      {
        docImg:'assets/images/ark/dr-3.png',
        docName:'Dr. Brick Wall',
        docProf:'Colon Hydrotherpist ',
        docAdd:'washington, D.C.',
        docAbout:'Lorem ipsum dolor sit amet, sapien etiam, nunc  viva', 
      },
      {
        docImg:'assets/images/ark/dr-4.png',
        docName:'Dr. Peter Anderson',
        docProf:'Neurologist',
        docAdd:'washington, D.C.',
        docAbout:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum', 
      },
    ]
  }

}
