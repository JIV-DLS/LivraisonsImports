import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavireDetailComponent } from './navire-detail.component';

describe('NavireDetailComponent', () => {
  let component: NavireDetailComponent;
  let fixture: ComponentFixture<NavireDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavireDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavireDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
