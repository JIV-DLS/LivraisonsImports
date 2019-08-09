import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitDetailComponent } from './transit-detail.component';

describe('TransitDetailComponent', () => {
  let component: TransitDetailComponent;
  let fixture: ComponentFixture<TransitDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransitDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
