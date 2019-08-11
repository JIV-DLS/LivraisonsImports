import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdresseListComponent } from './adresse-list.component';

describe('AdresseListComponent', () => {
  let component: AdresseListComponent;
  let fixture: ComponentFixture<AdresseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdresseListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdresseListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
