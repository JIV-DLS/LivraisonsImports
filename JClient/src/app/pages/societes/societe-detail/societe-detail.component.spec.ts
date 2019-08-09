import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocieteDetailComponent } from './societe-detail.component';

describe('SocieteDetailComponent', () => {
  let component: SocieteDetailComponent;
  let fixture: ComponentFixture<SocieteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocieteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocieteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
