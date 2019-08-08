import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviresComponent } from './navires.component';

describe('NaviresComponent', () => {
  let component: NaviresComponent;
  let fixture: ComponentFixture<NaviresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NaviresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NaviresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
