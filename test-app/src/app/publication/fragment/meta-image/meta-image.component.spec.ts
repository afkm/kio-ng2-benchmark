import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaImageComponent } from './meta-image.component';

describe('MetaImageComponent', () => {
  let component: MetaImageComponent;
  let fixture: ComponentFixture<MetaImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
