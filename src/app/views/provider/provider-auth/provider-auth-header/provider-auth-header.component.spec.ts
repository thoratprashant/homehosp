import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderAuthHeaderComponent } from './provider-auth-header.component';

describe('ProviderAuthHeaderComponent', () => {
  let component: ProviderAuthHeaderComponent;
  let fixture: ComponentFixture<ProviderAuthHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderAuthHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderAuthHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
