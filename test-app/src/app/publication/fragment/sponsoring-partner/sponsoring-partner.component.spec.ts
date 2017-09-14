import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SponsoringPartnerComponent } from './sponsoring-partner.component';

describe('SponsoringPartnerComponent', () => {
  let component: SponsoringPartnerComponent;
  let fixture: ComponentFixture<SponsoringPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SponsoringPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SponsoringPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
