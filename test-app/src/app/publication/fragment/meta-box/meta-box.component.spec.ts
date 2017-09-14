import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaBoxComponent } from './meta-box.component';

describe('MetaBoxComponent', () => {
  let component: MetaBoxComponent;
  let fixture: ComponentFixture<MetaBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
