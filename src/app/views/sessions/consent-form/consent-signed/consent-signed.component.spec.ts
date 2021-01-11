import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsentSignedComponent } from './consent-signed.component';

describe('ConsentSignedComponent', () => {
  let component: ConsentSignedComponent;
  let fixture: ComponentFixture<ConsentSignedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsentSignedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsentSignedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
