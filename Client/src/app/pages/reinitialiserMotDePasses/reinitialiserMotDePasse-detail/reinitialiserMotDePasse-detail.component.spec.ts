import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitialiserMotDePassesDetailComponent } from './reinitialiserMotDePasses-detail.component';

describe('ReinitialiserMotDePassesDetailComponent', () => {
  let component: ReinitialiserMotDePassesDetailComponent;
  let fixture: ComponentFixture<ReinitialiserMotDePassesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitialiserMotDePassesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitialiserMotDePassesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
