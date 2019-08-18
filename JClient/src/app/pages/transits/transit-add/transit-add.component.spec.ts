import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitAddComponent } from './transit-add.component';

describe('TransitAddComponent', () => {
  let component: TransitAddComponent;
  let fixture: ComponentFixture<TransitAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
