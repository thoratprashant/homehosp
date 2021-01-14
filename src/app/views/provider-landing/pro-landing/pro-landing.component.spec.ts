import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProLandingComponent } from './pro-landing.component';

describe('ProLandingComponent', () => {
  let component: ProLandingComponent;
  let fixture: ComponentFixture<ProLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
