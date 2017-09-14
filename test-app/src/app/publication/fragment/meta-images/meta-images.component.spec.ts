import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaImagesComponent } from './meta-images.component';

describe('MetaImagesComponent', () => {
  let component: MetaImagesComponent;
  let fixture: ComponentFixture<MetaImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MetaImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MetaImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
