import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoColumnsAndImageComponent } from './two-columns-and-image.component';

describe('TwoColumnsAndImageComponent', () => {
  let component: TwoColumnsAndImageComponent;
  let fixture: ComponentFixture<TwoColumnsAndImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoColumnsAndImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoColumnsAndImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
