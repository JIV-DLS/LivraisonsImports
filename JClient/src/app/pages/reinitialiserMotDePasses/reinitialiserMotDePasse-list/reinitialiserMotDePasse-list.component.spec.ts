import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitialiserMotDePassesListComponent } from './reinitialiserMotDePasse-list.component';

describe('ReinitialiserMotDePassesListComponent', () => {
  let component: ReinitialiserMotDePassesListComponent;
  let fixture: ComponentFixture<ReinitialiserMotDePassesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitialiserMotDePassesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitialiserMotDePassesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
