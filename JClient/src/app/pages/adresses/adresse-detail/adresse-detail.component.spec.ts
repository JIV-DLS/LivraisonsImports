import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseDetailComponent } from './adresse-detail.component';

describe('AdresseDetailComponent', () => {
  let component: AdresseDetailComponent;
  let fixture: ComponentFixture<AdresseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
