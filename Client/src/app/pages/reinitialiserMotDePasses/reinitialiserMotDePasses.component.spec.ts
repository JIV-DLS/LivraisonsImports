import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReinitialiserMotDePassessComponent } from './reinitialiserMotDePassess.component';

describe('ReinitialiserMotDePassessComponent', () => {
  let component: ReinitialiserMotDePassessComponent;
  let fixture: ComponentFixture<ReinitialiserMotDePassessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReinitialiserMotDePassessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReinitialiserMotDePassessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
