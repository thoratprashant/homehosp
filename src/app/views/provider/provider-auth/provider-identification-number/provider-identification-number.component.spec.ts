import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderIdentificationNumberComponent } from './provider-identification-number.component';

describe('ProviderIdentificationNumberComponent', () => {
  let component: ProviderIdentificationNumberComponent;
  let fixture: ComponentFixture<ProviderIdentificationNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderIdentificationNumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderIdentificationNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
